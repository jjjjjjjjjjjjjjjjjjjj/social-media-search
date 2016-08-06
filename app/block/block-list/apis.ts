export interface API {

    key    : string;
    name   : string;
    active : boolean;
    color  : string;

}

const INSTAGRAM : API = {

    'key'     : 'instagram',
    'name'    : 'Instagram',
    'active'  : true,
    'color'   : `radial-gradient(
                    circle at 33% 100%, 
                        #fed373 4%, 
                        #f15245 30%, 
                        #d92e7f 62%, 
                        #9b36b7 85%, 
                        #515ecf
                )`

};

const FACEBOOK : API = {

    'key'     : 'facebook',
    'name'    : 'Facebook',
    'active'  : true,
    'color'   : '#3b5998'

};

const TWITTER : API = {

    'key'     : 'twitter',
    'name'    : 'Twitter',
    'active'  : true,
    'color'   : '#1da1f2'

};

const GOOGLE_PLUS : API = {

    'key'     : 'google+',
    'name'    : 'Google+',
    'active'  : true,
    'color'   : '#dd4b39'


};

export const APIS : API[] = [

    INSTAGRAM,
    FACEBOOK,
    TWITTER,
    GOOGLE_PLUS

];
