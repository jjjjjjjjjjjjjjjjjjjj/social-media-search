import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {
    Response,
    Http
} from '@angular/http';

import { Block } from '../../block';
import {

    SearchCriteria,
    BlockProvider,
    API_TWITTER

} from '../shared';

/**
 * Twitter api service
 */
@Injectable()
export class TwitterService implements BlockProvider {

    constructor ( private http : Http ) {

    }

    public search( searchCriteria: SearchCriteria ) : Observable<Block[]> {
        return this.http.get('').map(this.toBlocks);
    }

    public toBlocks(response) {
        return [];
    }

}
