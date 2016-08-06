import { Injectable } from '@angular/core';

import {

    SearchCriteria,
    InstagramService,
    FacebookService,
    TwitterService,
    GooglePlusService

} from '../../api';


/**
 * Main service responsible for delegating queries to external API
 * services.
 */
@Injectable()
export class BlockService {

    /**
     * The search criteria bound to the search form component and used
     * to query the external APIs.
     *
     * @type    {SearchCriteria}
     */
    public searchCriteria: SearchCriteria = {

        'tag'      : '',
        'location' : '',
        'lat'      : '',
        'long'     : ''

    };

    constructor(
        private instagramService  : InstagramService,
        private facebookService   : FacebookService,
        private twitterService    : TwitterService,
        private googlePlusService : GooglePlusService
    ) { }

    /**
     * @param   tag
     */
    public updateSearchTag( tag : string ) {
        this.searchCriteria.tag = tag;
    };

    /**
     * @param   externalAPIKey
     * @returns {Promise<Block[]>}
     */
    public getBlocks ( externalAPIKey : string ) {
        
        switch ( externalAPIKey ) {

            case 'instagram':
                return this.instagramService.getBlocks( this.searchCriteria );

            case 'facebook':
                return this.facebookService.getBlocks( this.searchCriteria );

            case 'twitter':
                return this.twitterService.getBlocks( this.searchCriteria );

            case 'google+':
                return this.googlePlusService.getBlocks( this.searchCriteria );

            default:
                return Promise.resolve( [] );

        }

    }

}
