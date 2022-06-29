import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {JobOffer} from "../../model/job-offer.model";
import {JobsServiceService} from "../../service/jobs-service.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  jobOffers$: Observable<JobOffer[]> = this.jobsService.getJobs();


  constructor(private jobsService: JobsServiceService) { }

  ngOnInit(): void {
  }

}
