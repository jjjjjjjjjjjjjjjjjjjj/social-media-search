import { Injectable } from '@angular/core';
import { Block } from '../../block';
import {

    SearchCriteria,
    BlockProvider,
    TWITTER_SETTINGS

} from '../shared';

/**
 * Instagram api service
 */
@Injectable()
export class TwitterService extends BlockProvider {

    public search( searchCriteria: SearchCriteria ) {
        let block: Block = {
            'id': '1',
            'username': 'username',
            'time': 500,
            'link': 'http://www.example.com',
            'sourceName': 'twitter',
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
