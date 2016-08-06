// region imports
import * as _ from 'lodash';
import {

    Component,
    Input,
    OnInit

} from '@angular/core';

import { APIS } from './';

import {

    Block,
    BlockComponent,
    BlockService

} from '../shared';

import {

    TwitterService,
    FacebookService,
    InstagramService,
    GooglePlusService

} from '../../api';

import { API } from './apis';
// endregion

@Component({
    selector: 'sms-block-list',
    template: require('to-string!./block-list.component.html'),
    providers: [
        BlockService,
        TwitterService,
        FacebookService,
        InstagramService,
        GooglePlusService
    ],
    directives: [ BlockComponent ]
})

/**
 * The list of blocks component representing search results gathered
 * from different social media sites.
 */
export class BlockListComponent implements OnInit {

    /**
     * The list of search results (blocks) presented to the user.
     *
     * @type    {Block[]}
     */
    private blocks : Block[] = [];

    /**
     * Controls which APIs to use when searching, and when presenting
     * search results to the user.
     *
     * @type    {API[]}
     */
    private externalAPIS : API[] = APIS;

    /**
     * Block fields to order the result list by. Must correspond to
     * {@link Block} fields.
     *
     * @type    {string[]}
     */
    private sortFields : string[] = [
        'time', // Primary sort field
        'time'  // Secondary sort field
    ];

    /**
     * Sort order for the {@link sortFields).
     *
     * @type    {string[]}
     */
    private sortOrder : string[] = [
        'desc', // Sort order for primary field
        'desc'  // Sort order for secondary field
    ];

    constructor ( private blockService : BlockService ) { }

    /**
     * Initialization logic for block list component.
     */
    public ngOnInit () : void {

        // Temporary to get mock blocks. Todo: remove
        this.getBlocks();

    }

    /**
     * Iterates over all active external APIs, and queries them based on
     * search criteria bound to input form on front end.
     */
    public getBlocks () : void {

        // Clear current list of blocks.
        this.clearBlockList();

        // Filter out inactive APIs.
        let activeAPIS = _.filter( this.externalAPIS, { 'active' : true } );

        for ( let API of activeAPIS ) {

            // Call blockService to get search results from all active APIs.
            this.blockService
                .getBlocks( API.key )
                .then(
                    (blocks) => {
                        this.addBlocks( blocks );
                        this.orderList();
                    }
                );

        }

    }

    /**
     * Orders the list of blocks.
     */
    private orderList () : void {

        // todo: better sort implementation
        this.blocks = _.orderBy(
            this.blocks,
            this.sortFields,
            this.sortOrder
        );

    }

    /**
     * Adds blocks to the list of search results presented to
     * the user as blocks in the front end.
     *
     * @see     {@link blocks}
     * @param   blocks
     */
    private addBlocks ( blocks : Block[] ) : void {

        for ( let block of blocks ) {

            this.blocks.push( block );

        }

    }

    /**
     * Empties the current block list.
     *
     * @see     {@link blocks}
     */
    private clearBlockList () : void {

        this.blocks = [];

    }

}
