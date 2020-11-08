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

    swalInfo(message: string, title?: string) {
        Swal.fire({
            icon: 'info',
            title: title || 'Info',
            text: message,
            ...this.swalConfigOptions
        });
    }

    swalWarning(message: string, title?: string) {
        Swal.fire({
            icon: 'warning',
            title: title || 'Warning',
            text: message,
            ...this.swalConfigOptions
        });
    }

    swalSuccess(message?: string) {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: message || 'Process has been completed!',
            ...this.swalConfigOptions
        });
    }

}