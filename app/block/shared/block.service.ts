import { Injectable } from '@angular/core';

// Barreled import
import {
    Block,
    BLOCKS
} from '../shared';

@Injectable()
export class BlockService {

    blocks: Block[];

    getBlocks() {
        return Promise.resolve(BLOCKS);
    }

    getBlocksSlowly() {
        return new Promise<Block[]>(
            resolve => setTimeout( () => resolve(BLOCKS), 2000)
        );
    }

}
