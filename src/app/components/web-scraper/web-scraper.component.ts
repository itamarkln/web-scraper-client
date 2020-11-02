import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

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
  @ViewChild("webFrame") webFrame: ElementRef;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.scraperForm = this.formBuilder.group({
      url: ["", Validators.required],
      scrapedItems: this.formBuilder.array([]),
    });
    this.addScrapedItem();
  }

  get f() {
    return this.scraperForm.controls;
  }

  addScrapedItem() {
    (<FormArray>this.f.scrapedItems).push(
      this.formBuilder.group({
        propName: ["", Validators.required],
        selector: ["", Validators.required],
      })
    );
  }

  removeScrapedItem(index: number): void {
    (<FormArray>this.scraperForm.controls.scrapedItems).removeAt(index);
  }

  onSubmit() {
    console.log(this.scraperForm.value);
  }

  onSearchByUrl(e) {
    console.log(this.f.url.value);
    if (!this.validateUrlRegexp.test(this.f.url.value)) {
      
      return;
    }
    this.webFrame.nativeElement.src = this.f.url.value || "";
    console.log(this.webFrame.nativeElement);
  }
}
