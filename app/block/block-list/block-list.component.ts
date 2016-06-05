import { Component, OnInit } from '@angular/core';

import { 
    Block,
    BlockService
} from '../shared';

@Component({
    selector: 'sms-block-list',
    templateUrl: '/app/block/block-list/block-list.component.html',
    providers: [ BlockService ]
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
