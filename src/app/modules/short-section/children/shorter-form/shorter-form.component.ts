import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../../../services/data/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shorter-form',
  templateUrl: './shorter-form.component.html',
  styleUrls: ['./shorter-form.component.scss']
})
export class ShorterFormComponent implements OnInit {
  public linkForm: FormGroup;
  public isResetInput = false;
  public isLoading = false;
  public sorterURL: string | null = null;


  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.linkForm = this.fb.group({
      linkUrl: [null, [Validators.required]]
    });
  }

  viewResult(): void {
    this.isResetInput = true;
    this.isLoading = true;
    this.dataService.getShorterURL(this.linkForm.value)
      .subscribe((res) => {
        if (res.linkHash) {
          this.sorterURL = window.location.origin + '/shorter/link/' + res.linkHash;
        }
        this.isLoading = false;
      });
  }

  copyLink(): void{
    if (!this.sorterURL) return;
    navigator.clipboard.writeText(this.sorterURL).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  resetForm(): void {
    this.linkForm.patchValue({linkUrl: null})
    this.isResetInput = false;
  }
}
