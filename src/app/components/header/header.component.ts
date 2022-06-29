import {Component, OnInit} from '@angular/core';
import {JobsServiceService} from "../../service/jobs-service.service";
import {JobOffer} from "../../model/job-offer.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  jobOffers: Observable<JobOffer[]> = this.jobsService.getJobs();

  constructor(private jobsService: JobsServiceService) {
  }

  ngOnInit(): void {
  }

}
