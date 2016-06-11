import { Component, Input } from '@angular/core';

import {
    BlockService,
    Block
} from './';

@Component({
    selector: 'sms-block',
    providers: [ BlockService ],
    template: require('to-string!./block.component.html'),
    styles: [
        require('./block.component.scss')
    ]
})

export class BlockComponent {
    @Input() block: Block;
}
