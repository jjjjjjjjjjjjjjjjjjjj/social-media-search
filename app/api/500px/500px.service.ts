import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import {
    Response,
    Jsonp
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

    constructor ( private jsonp : Jsonp ) {

    }

    public search( searchCriteria : SearchCriteria ) {

        let tag = searchCriteria.tag;
        let url = this.getEndpoint.replace('{TAG}', tag);
        url = url.replace('{ACCESS_TOKEN}', this.accessToken);

        this.jsonp.get(url)
            .toPromise()
            .then(this.toBlocks)
            .catch(this.handleError);

        let block: Block = {
            'id': '1',
            'username': 'username',
            'time': 1000,
            'link': 'http://www.example.com',
            'API': API_500PX,
            'title': 'testing',
            'text': 'text',
            'iconUrl': 'iconUrl',
            'hidden' : false,
            'media': 'test'};

        return [
            block, block
        ];
    }

    public toBlocks(response) {
        let photos = response.photos;
        for ( let photo of photos ) {

        }

    }

    public handleError(response : Response) {
        console.error(response);
    }

    getBlocks( searchCriteria: SearchCriteria ) : Promise<Block[]> {
        return Promise.resolve ( this.search( searchCriteria ) );
    }

}
