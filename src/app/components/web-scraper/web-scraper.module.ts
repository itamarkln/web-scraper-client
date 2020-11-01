import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherIconsModule } from 'src/app/common/modules/feather-icons/feather-icons.module';
import { WebScraperComponent } from './web-scraper.component';
import { WebScraperService } from './web-scraper.service';

@NgModule({
    declarations: [WebScraperComponent],
    imports: [CommonModule, FeatherIconsModule],
    providers: [WebScraperService],
    exports: [WebScraperComponent],
    bootstrap: [WebScraperComponent]
})
export class WebScraperModule { }
