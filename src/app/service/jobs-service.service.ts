import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {JobOffer} from "../model/job-offer.model";

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {

  constructor(private httpClient: HttpClient) { }

  public getJobs(): Observable<JobOffer[]> {
    return this.httpClient.get<any>(environment.backendUrl + "/jobs")
      .pipe(map(res => res.jobGammaList));
  }

  public getJob(id: string | null): Observable<JobOffer> {
    return this.httpClient.get<any>(environment.backendUrl + "/jobs/" + id);
  }

  public deleteJob(id: string | null): Observable<void> {
    console.log("hear");
    console.log(environment.backendUrl + "/jobs/" + id);
    return this.httpClient.delete<any>(environment.backendUrl + "/jobs/" + id);
  }

  public createJobs(jobTitle?: string, salary?: number, description?: string): Observable<void> {
    console.log(jobTitle)
    console.log(salary)
    return this.httpClient.post<void>(environment.backendUrl + "/jobs",
      {jobTitle, salary, description});
  }

  public updateJobs(id: string | null, jobTitle?: string, salary?: number, description?: string): Observable<void> {
    return this.httpClient.put<void>(environment.backendUrl + "/jobs/" + id,
      {jobTitle, salary, description});
  }
}
