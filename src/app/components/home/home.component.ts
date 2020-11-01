import { AfterViewInit, Component, OnInit } from "@angular/core";
import { TypeWriterService } from 'src/app/common/services/typewriter.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private readonly typewriterService: TypeWriterService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
      this.typewriterService.onTypeWriter('#header-input', 0);
  }
}
