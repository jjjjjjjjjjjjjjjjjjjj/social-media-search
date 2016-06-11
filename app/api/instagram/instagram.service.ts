import { SearchCriteria, BlockProvider, Credentials } from '../shared';
import { InstagramCredentialsService } from './';
import { Block, BLOCKS } from '../../block/shared';

/**
 * Instagram api service
 */
export class InstagramService implements BlockProvider {

    private credentials: Credentials;
    private blocks: Block[];

    constructor() {
        this.blocks = [
            new Block('55', 'a', 'a', 'a', 'a', 'a', 'a', null),
            new Block('422', 'a', 'a', 'a', 'a', 'a', 'a', null)
        ];
    }

    search(searchCriteria: SearchCriteria) {
        return new Promise<Block[]>(resolve =>
            setTimeout( () => resolve(this.blocks), 2000)
        );
    }
    
}
