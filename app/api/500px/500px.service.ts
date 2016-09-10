import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {
    Response,
    Http
} from '@angular/http';

import {
    Block
} from '../../block';

import {

    SearchCriteria,
    BlockProvider,
    API_500PX

} from '../shared';



/**
 * Instagram api service
 */
@Injectable()
export class FiveHundredPixelsService implements BlockProvider {

    private getEndpoint = API_500PX.getEndpoint;
    private accessToken = API_500PX.accessToken;

    constructor ( private http : Http ) {

    }

    public search( searchCriteria : SearchCriteria ) : Observable<Block[]> {

        let url = this.getEndpoint;
        url = url.replace('{TAG}', searchCriteria.tag);
        url = url.replace('{ACCESS_TOKEN}', this.accessToken);

        return this.http.get(url)
            .map(this.toBlocks);
    }

    public toBlocks(response : Response) : Block[] {

        let photos   = response.json().photos;
        let counter  = 0;
        let username = '';
        let blocks   = [];


        for ( let photo of photos ) {

            // Set username based on what values are present.
            if ( undefined !== typeof photo.user.firstname
                && undefined !== photo.user.lastname ) {
                username = photo.user.firstname + ' ' + photo.user.lastname;
            } else {
                username = photo.user.username;
            }

            let block: Block = {
                'id': ++counter,
                'username': username,
                'time' : photo.created_at,
                'link' : 'https://500px.com' + photo.url,
                'API'  : API_500PX,
                'title' : photo.name,
                'text' : photo.description,
                'iconUrl' : 'iconUrl',
                'hidden' : false,
                'media' : photo.image_url
            };

            blocks.push( block );
            
        }

        return blocks;
    }

    public handleError(response : Response) {

    }

    getBlocks( searchCriteria: SearchCriteria ) : Promise<Block[]> {
        return Promise.resolve ( [] );
    }

}
