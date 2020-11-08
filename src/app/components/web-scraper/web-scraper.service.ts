import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const httpHeaders = {
    headers: {
        "Content-Type": "application/json",
    },
};

@Injectable({ providedIn: "root" })
export class WebScraperService {
    constructor(private http: HttpClient) {}

    validateUrl(url: string) {
        return this.http.post<any>(
            `${environment.apiUrl}/web-scraper/url/validate`,
            { url },
            httpHeaders
        );
    }

    scrapeData(
        url: string,
        data: { property: string, selector: string, attribute: string }[]
    ) {
        return this.http.post<any>(
            `${environment.apiUrl}/web-scraper/data`,
            { url, data },
            httpHeaders
        );
    }
}
