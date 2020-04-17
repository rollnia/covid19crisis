import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Crisis } from '../models/crisis.model';

@Injectable({ providedIn: 'root' })
export class CrisisInfoService {
    constructor(private http: HttpClient) { }


    add(crisis: Crisis) {
        return this.http.post('http://localhost:8000/addCrisisInfo', crisis);
    }
}
