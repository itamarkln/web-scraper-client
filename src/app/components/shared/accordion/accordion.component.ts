import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"],
})
export class AccordionComponent implements OnInit {
  cards = [
    {
      title: "What is web scraping?",
      description:
        "Web scraping, also known as web harvesting and data extraction, basically refers to obtaining data available on the World Wide Web via the Hypertext Transfer Protocol (HTTP) or through web browsers.",
      isOpen: false
    },
    {
      title: "Is web scraping legal?",
      description:
        "Web scraping itself is not illegal as it is just a tool for collecting data more easily. However, doing so might break the law when you use it to steal non-public information, or the targeted website strictly prohibits web scraping without prior permission or without mentioning some legal copyright aspects related to the use of its data. It is highly recommended you read the Terms and Conditions (ToS) of the website thoroughly before scraping it.",
      isOpen: false
    },
    {
      title: "What is web scraping used for?",
      description:
        "Web scraping is aimed at collecting data so it can be applied in any industry that needs the data. It is used largely in market research, price monitoring, human capital optimization, lead generation, and many other fields.",
      isOpen: false
    },
    {
      title: "Can I extract data from the entire web?",
      description:
        "Many people believe web scraping can be used to scrape data from the entire World Wide Web or at least hundreds of thousands of websites. This is not feasible in practice. Since websites do not follow a universal page structure, it would be hard for one web scraper to interact with all pages.",
      isOpen: false
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  onToggleCard(e, card) {
    card.isOpen = !card.isOpen;
  }
}
