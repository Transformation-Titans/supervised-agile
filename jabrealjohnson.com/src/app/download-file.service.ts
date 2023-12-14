import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor(private httpClient:HttpClient) { }
}
