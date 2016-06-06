import { Component, OnInit } from '@angular/core';

import { 
    Block,
    BlockComponent,
    BlockService
} from '../shared';

@Component({
    selector: 'sms-block-list',
    template: require('to-string!./block-list.component.html'),
    providers: [ BlockService ],
    directives: [ BlockComponent ]
})

export class BlockListComponent implements OnInit {

    public blocks: Block[];

    constructor(private blockService: BlockService) {}

    getBlocks() {
        this.blockService
            .getBlocks()
            .then(
                blocks => this.blocks = blocks
            );
    }

    ngOnInit() {
        this.getBlocks();
    }

}
