<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {DataService} from "../../../../services/data/data.service";
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> c74fbed1f9440c693c58fa2762ef3c54cfc6739b

@Component({
  selector: 'app-redirect-confirmation',
  templateUrl: './redirect-confirmation.component.html',
  styleUrls: ['./redirect-confirmation.component.scss']
})
export class RedirectConfirmationComponent implements OnInit {
<<<<<<< HEAD
  public isLoading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.getOriginalURL();
  }

  getOriginalURL(): void {
    const hash = this.activatedRoute.snapshot.params?.id;
    if (!hash) return;
    this.dataService.getOriginalURL(hash)
      .subscribe(originalURL => {
        if (!originalURL.link) return;
        this.redirectUser(originalURL.link)
      }, error => {
        this.errorHandler(error);
      });
  }

  redirectUser(link: string): void {
    window.location.href = link;
  }

  errorHandler(error: Error): void {
    this.isLoading = false;
  }
=======

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> c74fbed1f9440c693c58fa2762ef3c54cfc6739b
}
