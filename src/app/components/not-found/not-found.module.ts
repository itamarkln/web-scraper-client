import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { NotFoundService } from './not-found.service';

@NgModule({
    declarations: [NotFoundComponent],
    imports: [],
    providers: [NotFoundService],
    exports: [NotFoundComponent],
    bootstrap: [NotFoundComponent]
})
export class NotFoundModule { }
