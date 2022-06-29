import { Component, OnInit } from '@angular/core';
import {JobsServiceService} from "../../service/jobs-service.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {take} from "rxjs";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  userForm: any;

  constructor(private jobsService: JobsServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      jobTitle: new FormControl('', Validators.required),
      salary: '',
      description: '',
    })
  }

  onSubmit() {
    let jobTitle = this.userForm.value['jobTitle']
    let salary = this.userForm.get('salary')?.value;
    let description = this.userForm.get('description')?.value;
    this.jobsService.createJobs(
      jobTitle
      ,salary
      ,description).pipe(take(1)).subscribe();
    window.location.href = "/";
  }
}
