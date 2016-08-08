import { Component, Input } from '@angular/core';

import {
    Block
} from './';

@Component({
    selector: 'sms-block',
    template: require('to-string!./block.component.html'),
    styles: [
        require('./block.component.scss')
    ]
})

export class BlockComponent {

    @Input() block : Block;

}
