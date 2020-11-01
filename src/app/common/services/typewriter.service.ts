import { Injectable } from '@angular/core';

declare const $: any;

@Injectable({
    providedIn: 'root'
})
export class TypeWriterService {  

    constructor() { }  

    onTypeWriter(qrySelector: string, index: number): void {
        const selectorText = $(qrySelector).data('text');
        if (!selectorText) return;
        if (index < (selectorText.length)) {
            $(qrySelector).html(selectorText.substring(0, index + 1));
            index++;
            setTimeout(() => {
                this.onTypeWriter(qrySelector, index);
            }, 80);
        } else {
            setTimeout(() => {
                this.onTypeWriter(qrySelector, 0);
            }, 4000);
        }
    }
}