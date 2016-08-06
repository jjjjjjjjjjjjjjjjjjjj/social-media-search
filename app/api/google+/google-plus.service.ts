import { Injectable } from '@angular/core';
import { Block } from '../../block';
import {

    SearchCriteria,
    BlockProvider,
    GOOGLE_PLUS_SETTINGS

} from '../shared';

/**
 * Instagram api service
 */
@Injectable()
export class GooglePlusService extends BlockProvider {

    public search( searchCriteria: SearchCriteria ) {
        let block: Block = {
            'id': '1',
            'username': 'username',
            'time': 100,
            'link': 'http://www.example.com',
            'sourceName': 'google+',
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
