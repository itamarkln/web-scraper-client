import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
    providedIn: 'root'
})
export class ScrollToByClickService {  

    constructor(private scrollToService: ScrollToService) { }  

    triggerScrollTo(dest) {
        const config: ScrollToConfigOptions = {
            target: dest
        };
        this.scrollToService.scrollTo(config);
    }
}