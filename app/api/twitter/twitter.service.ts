import { Injectable } from '@angular/core';
import { Block } from '../../block';
import {

    SearchCriteria,
    BlockProvider,
    API_TWITTER

} from '../shared';

/**
 * Instagram api service
 */
@Injectable()
export class TwitterService implements BlockProvider {

    public search( searchCriteria: SearchCriteria ) {
        let block: Block = {
            'id': '1',
            'username': 'username',
            'time': 500,
            'link': 'http://www.example.com',
            'API': API_TWITTER,
            'title': 'testing',
            'text': 'text',
            'iconUrl': 'iconUrl',
            'hidden' : false,
            'media': 'test'
        };

        return [
            block, block
        ];
    }

    getBlocks( searchCriteria: SearchCriteria ) {
        return Promise.resolve ( this.search( searchCriteria ) );
    }

}
