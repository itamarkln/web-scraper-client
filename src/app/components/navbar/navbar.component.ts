import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";

declare const $: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('navMenu') navMenu;
  mobileIsOpen = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
        }
        else {
            $('nav').removeClass('black');
        }
    });
  }

  onNavClick(e) {
    this.mobileIsOpen = !this.mobileIsOpen;
  }
}
