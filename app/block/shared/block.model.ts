import {

    YouTubeVideo,
    VimeoVideo,
    VineVideo,
    SoundCloudSound,

} from '../../media/';

import {
    API
} from '../../api/';

/**
 * A block that represents a search result.
 */
export class Block {

    id         : string|number;
    username   : string;
    time       : number;
    link       : string;
    API        : API;
    title      : string;
    text       : string;
    iconUrl    : string;
    hidden     : boolean;
    media      : YouTubeVideo
               | VimeoVideo
               | VineVideo
               | SoundCloudSound
               | string;

}
