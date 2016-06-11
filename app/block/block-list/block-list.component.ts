import { Component, OnInit } from '@angular/core';

import { 
    Block,
    BlockComponent,
    BlockService
} from '../shared';

import {
    InstagramService,
    TwitterService,
    FacebookService,
    GooglePlusService,
    SearchCriteria
} from '../../api';

@Component({
    selector: 'sms-block-list',
    template: require('to-string!./block-list.component.html'),
    providers: [
        BlockService,
        InstagramService,
        TwitterService,
        FacebookService,
        GooglePlusService,
    ],
    directives: [ BlockComponent ]
})

export class BlockListComponent implements OnInit {

    public blocks: Block[];
    private searchCriteria: SearchCriteria;

    constructor(private blockService: BlockService) {}

    ngOnInit() {

        // Empty search criteria (get from search bar).
        this.searchCriteria = {
            tag: null,
            location: null,
            lat: null,
            long: null
        };

        // Get block list.
        this.getBlocks();
    }

    getBlocks() {
        this.blockService
            .search(this.searchCriteria)
            .then(
                blocks => this.blocks = blocks
            );
    }
    
}
