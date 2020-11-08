import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Swal2Service } from "src/app/common/services/swal2.service";
import { ResponseDTO } from "src/app/models/dtos/response.dto";
import { WebScraperService } from "./web-scraper.service";

@Component({
  selector: "app-web-scraper",
  templateUrl: "./web-scraper.component.html",
  styleUrls: ["./web-scraper.component.scss"],
})
export class WebScraperComponent implements OnInit {
  validateUrlRegexp = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=-]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  scrapeSteps = [
    {
      text:
        "Enter a start URL that is the starting page that web scraper will load, It is often a link to an scraped product list.",
    },
    {
      text:
        "Input keywords to submit form to get results if the website requires, This step can be skipped in most of cases (e.g. login page).",
    },
    {
      text:
        "Inspect your desired list to be scraped using DevTools, and select an arbitrary item in the list.",
    },
    {
      text:
        "Select scraped properties of the item (query selectors), fill in with them the inputs below and get the scraped data.",
    },
  ];
  scraperForm: FormGroup;
  scrapedItems: FormArray;
  isInputsHidden: boolean;
  loading: boolean;
  submitted: boolean;
  scrapedData: any;
  copiedScrapedData: boolean;
  @ViewChild("webFrame") webFrame: ElementRef;
  @ViewChild("copiedData") dataToCopy: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private readonly webScraperService: WebScraperService,
    private readonly swal2Service: Swal2Service
  ) {}

  ngOnInit(): void {
    this.scraperForm = this.formBuilder.group({
      url: ["", Validators.required],
      scrapedItems: this.formBuilder.array([]),
    });
    this.addScrapedItem();
    this.isInputsHidden = true;
    this.loading = false;
    this.submitted = false;
    this.copiedScrapedData = false;
  }

  get f() {
    return this.scraperForm.controls;
  }

  addScrapedItem() {
    this.scrapedItems = <FormArray>this.f.scrapedItems;
    this.scrapedItems.push(
      this.formBuilder.group({
        property: ["", Validators.required],
        selector: ["", Validators.required],
        type: ["", Validators.required],
      })
    );
  }

  removeScrapedItem(index: number): void {
    (<FormArray>this.scraperForm.controls.scrapedItems).removeAt(index);
  }

  onSubmit() {
    if (this.scraperForm.invalid) {
      this.swal2Service.swalWarning(
        "Be aware to fill in all input fields",
        "Validation"
      );
      return;
    }
    this.loading = true;
    this.submitted = true;
    this.webScraperService
      .scrapeData(this.f.url.value, this.f.scrapedItems.value)
      .subscribe((res: ResponseDTO) => {
        if (res.data.success) {
          this.loading = false;
          this.submitted = false;
          if (res.data.content.length === 0) {
            this.swal2Service.swalInfo(
              "Reassure that you are in the correct webpage and that the selectors are filled in correctly.",
              "Unreached scraped data"
            );
          } else {
            this.scrapedData = JSON.stringify(res.data.content, null, 4).trim();
            this.swal2Service.swalSuccess(
              "Scraping process has been successfully completed."
            );
          }
        } else {
          this.loading = false;
          this.submitted = false;
          this.swal2Service.swalError(res.data.errMsg);
        }
      });
  }

  onSearchByUrl(e) {
    console.log(this.f.url.value);
    if (!this.validateUrlRegexp.test(this.f.url.value)) {
      this.isInputsHidden = true;
      this.swal2Service.swalInfo(
        "Parts of the URL are missing.",
        "The URL is incomplete"
      );
      return;
    }
    this.loading = true;
    this.webScraperService
      .validateUrl(this.f.url.value)
      .subscribe((res: ResponseDTO) => {
        if (res.data.success) {
          this.webFrame.nativeElement.src = this.f.url.value || "";
          this.isInputsHidden = false;
          this.loading = false;
        } else {
          this.loading = false;
          this.swal2Service.swalError(res.data.errMsg);
        }
      });
  }

  copyScrapedData(e) {
    this.copiedScrapedData = true;
    this.selectTextToCopy(this.scrapedData);
    setTimeout(() => (this.copiedScrapedData = false), 1000);
  }

  selectTextToCopy(value: any) {
    let selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
  }
}
