import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const httpHeaders = {
    headers: {
        "Content-Type": "application/json",
    },
};

@Injectable({ providedIn: "root" })
export class HomeService {
    constructor(private http: HttpClient) {}
}
