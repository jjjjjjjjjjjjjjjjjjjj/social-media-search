import { Injectable, OnInit } from '@angular/core';

import {
    Block,
    BLOCKS
} from '../shared';

import {
    InstagramService,
    TwitterService,
    FacebookService,
    GooglePlusService,
    SearchCriteria
} from '../../api';

@Injectable()
export class BlockService {

    public blocks: Block[];

    constructor(private instagramService: InstagramService) { }

    search(searchCriteria: SearchCriteria) {
        return Promise.resolve(
            this.instagramService.search(searchCriteria)
        );
    }

}
