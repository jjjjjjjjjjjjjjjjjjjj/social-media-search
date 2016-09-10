import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {
    Response,
    Http
} from '@angular/http';

import {

    SearchCriteria,
    FacebookService,
    TwitterService,
    GooglePlusService,
    FiveHundredPixelsService

} from '../../api';
import { Block } from './';


/**
 * Main service responsible for delegating queries to external API
 * services.
 */
@Injectable()
export class BlockStore {

    /**
     * The search criteria bound to the search form component and used
     * to query the external APIs.
     *
     * @type    {SearchCriteria}
     */
    public searchCriteria: SearchCriteria = {

        'tag'      : 'tokyo',
        'location' : '',
        'lat'      : '',
        'long'     : ''

    };
    
    constructor(
        private http                     : Http,
        private facebookService          : FacebookService,
        private twitterService           : TwitterService,
        private googlePlusService        : GooglePlusService,
        private fiveHundredPixelsService : FiveHundredPixelsService
    ) { }

    /**
     * @param   tag
     */
    public updateSearchTag( tag : string ) {
        this.searchCriteria.tag = tag;
    };

    /**
     * @param externalAPIKey
     * @returns {any}
     */
    public getBlocks ( externalAPIKey : string ) : Observable<Block[]> {
        
        switch ( externalAPIKey ) {

            case 'facebook':
                return this.facebookService.search( this.searchCriteria );

            case 'twitter':
                return this.twitterService.search( this.searchCriteria );

            case 'google+':
                return this.googlePlusService.search( this.searchCriteria );

            case '500px':
                let obs = this.fiveHundredPixelsService.search( this.searchCriteria );

                obs.subscribe(
                    res => {
                        console.log(res);
                    });

                return obs;

            default:
                return this.http.get('').map(() => {return []});

        }

    }

}
