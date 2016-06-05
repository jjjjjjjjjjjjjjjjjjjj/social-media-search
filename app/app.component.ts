import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { BlockListComponent } from './block/block-list/block-list.component';

@Component({
    selector: 'sms-app',
    templateUrl: '/app/app.component.html',
    styleUrls: [ require('./styles.scss') ],
    providers: [ Title ],
    directives: [ BlockListComponent ]
})

/**
 * Main component class for social media search
 */
export class AppComponent implements OnInit {

    // Title of our app.
    title: string = 'Social media search';

    constructor( private titleService: Title ) {}

    ngOnInit() {
        // Set the title of our page.
        this.titleService.setTitle( this.title );
    }

}
