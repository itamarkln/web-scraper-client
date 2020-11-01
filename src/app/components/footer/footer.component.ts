import { Component, OnInit } from '@angular/core';
import { ScrollToByClickService } from 'src/app/common/services/scroll-to.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private readonly scrollToByClickService: ScrollToByClickService) { }
  
  ngOnInit(): void {
  }

  onNavigateTo($event, dest) {
    this.scrollToByClickService.triggerScrollTo(dest);
  }
}
