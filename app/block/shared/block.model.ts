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

    public iconUrl: string;

    constructor(
        public id: string,
        public username: string,
        public time: string,
        public externalUrl: string,
        public externalSite: string,
        public title: string,
        public text: string,
        public media:
                YouTubeVideo|
                VimeoVideo|
                VineVideo|
                SoundCloudSound|
                string
    ) {

        // Set icon.
        this.iconUrl = this.getIcon();
    }

    /**
     * Get an icon based 
     *
     * @returns {string}
     */
    private getIcon() {

        switch (this.externalSite) {
            case 'facebook':
                return '/asset/graphic/facebook.png';
            case 'twitter':
                return '/asset/graphic/twitter.png';
            case 'Instagram':
                return '/asset/graphic/instagram.png';
            case 'Google+':
                return '/asset/graphic/googleplus.png';
            default:
                return '';
        }

    }

}
