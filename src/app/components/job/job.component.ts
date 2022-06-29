import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {JobsServiceService} from "../../service/jobs-service.service";
import {Observable} from "rxjs";
import {JobOffer} from "../../model/job-offer.model";


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');
  jobOffer$: Observable<JobOffer> = this.jobsService.getJob(this.id);

  constructor(private router: Router, private route: ActivatedRoute, private jobsService: JobsServiceService) { }

  ngOnInit(): void {
    this.jobOffer$.subscribe(itm => console.log(itm))
  }

  editWindow(): void {
    console.log(this.id);
    window.location.href='/edit/' + this.id;
  }

  deleteJob(): void {
    console.log("deleteJob");
    this.jobsService.deleteJob(this.id).subscribe();
    window.location.href='/search';
  }


}
