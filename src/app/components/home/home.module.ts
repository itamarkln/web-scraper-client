import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherIconsModule } from 'src/app/common/modules/feather-icons/feather-icons.module';
import { AccordionComponent } from '../shared/accordion/accordion.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

@NgModule({
    declarations: [HomeComponent, FeaturesComponent, AccordionComponent],
    imports: [CommonModule, FeatherIconsModule],
    providers: [HomeService],
    exports: [HomeComponent],
    bootstrap: [HomeComponent]
})
export class HomeModule { }
