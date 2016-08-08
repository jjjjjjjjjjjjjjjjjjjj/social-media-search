import { Injectable } from '@angular/core';
import {

    SearchCriteria,
    BlockProvider,
    API_FACEBOOK

} from '../shared';

import {
    Block
} from '../../block';

/**
 * Facebook api service
 */
@Injectable()
export class FacebookService implements BlockProvider {

    search ( searchCriteria: SearchCriteria ) {
        let block : Block = {
            'id': '1',
            'username': 'username',
            'time': 2000,
            'link': 'http://www.example.com',
            'API': API_FACEBOOK,
            'title': 'testing1',
            'text': 'text',
            'iconUrl': 'iconUrl',
            'hidden' : false,
            'media': 'test'
        };

        return [
            block, block
        ];
    }

    getBlocks ( searchCriteria: SearchCriteria ) {
        return Promise.resolve( this.search( searchCriteria ) );
    }

}
