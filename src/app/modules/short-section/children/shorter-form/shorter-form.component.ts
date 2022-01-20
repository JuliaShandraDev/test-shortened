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

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    console.log(this.activatedRoute)
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
      .subscribe();
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  resetForm(): void {
    this.linkForm.patchValue({linkUrl: null})
    this.isResetInput = false;
  }
}
