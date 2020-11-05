import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class Swal2Service {  
    private swalConfigOptions = {
        showCloseButton: true,
    };

    constructor() { }  

    swalError(message?: string) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message || 'Something went wrong!',
            ...this.swalConfigOptions
        });
    }

    swalInfo(title?: string, message?: string) {
        Swal.fire({
            icon: 'info',
            title: title || 'Notice',
            text: message || 'Something went wrong!',
            ...this.swalConfigOptions
        });
    }

}