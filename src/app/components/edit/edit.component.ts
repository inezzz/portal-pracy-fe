import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {identity, Observable} from "rxjs";
import {JobOffer} from "../../model/job-offer.model";
import {JobsServiceService} from "../../service/jobs-service.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  userForm: any;

  id = this.route.snapshot.paramMap.get('id');
  jobOffer$: Observable<JobOffer> = this.jobsService.getJob(this.id);

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private jobsService: JobsServiceService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      jobTitle: '',
      salary: '',
      description: '',
    })

    this.jobOffer$.subscribe(itm => {this.userForm.patchValue({
      jobTitle: itm.jobTitle,
      salary: itm.salary,
      description: itm.description,
    });})
  }

  onSubmit() {
    let jobTitle = this.userForm.value['jobTitle']
    let salary = this.userForm.get('salary')?.value;
    let description = this.userForm.get('description')?.value;
    this.jobsService.updateJobs(
      this.id
      ,jobTitle
      ,salary
      ,description
      ).subscribe();
    window.location.href = "/search/" + this.id;
  }
}
