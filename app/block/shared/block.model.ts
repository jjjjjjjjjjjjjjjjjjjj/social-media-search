import {

    YouTubeVideo,
    VimeoVideo,
    VineVideo,
    SoundCloudSound,

} from '../../media/';

/**
 * A block that represents a search result.
 */
export class Block {

    id         : string;
    username   : string;
    time       : number;
    link       : string;
    sourceName : string;
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
