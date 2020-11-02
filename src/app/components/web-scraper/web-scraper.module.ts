import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatherIconsModule } from 'src/app/common/modules/feather-icons/feather-icons.module';
import { SafeUrlPipe } from 'src/app/common/pipes/safe-url.pipe';
import { WebScraperComponent } from './web-scraper.component';
import { WebScraperService } from './web-scraper.service';

@NgModule({
    declarations: [WebScraperComponent, SafeUrlPipe],
    imports: [CommonModule, FeatherIconsModule, FormsModule, ReactiveFormsModule],
    providers: [WebScraperService],
    exports: [WebScraperComponent],
    bootstrap: [WebScraperComponent]
})
export class WebScraperModule { }
