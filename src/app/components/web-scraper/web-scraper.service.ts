import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const httpHeaders = {
    headers: {
        "Content-Type": "application/json",
    },
};

@Injectable({ providedIn: "root" })
export class WebScraperService {
    constructor(private http: HttpClient) {}
}
