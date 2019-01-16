import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {

  constructor(private http: Http) { }

  async getVersion(command: string) {
    return await this.http.request(`${config.nodeBaseUrl}version?command=${command}`).toPromise();
  }
}
