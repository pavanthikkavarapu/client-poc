import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Grid} from '../app/grid';
    
@Injectable()
export class gridService {
    
    constructor(private http: Http) {}

    getCarsLarge() {
        return this.http.get('assets/grid.json')
        .map((response:Response) => response.json());
    }
}