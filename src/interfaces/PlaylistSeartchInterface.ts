export interface Playlists {
    href:     string;
    items:    Item[];
} 


export interface Item {
    collaborative: boolean;
    description:   string;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    owner:         Owner;
    primary_color: null;
    public:        null;
    snapshot_id:   string;
    tracks:        Tracks;
    type:          string;
    uri:           string;
}

export interface Image {
    height: null;
    url:    string;
    width:  null;
} 

export interface Owner {
    display_name:  string;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    type:          string;
    uri:           string;
} 
 
export interface ExternalUrls {
    spotify: string;
}

export interface Tracks {
    href:  string;
    total: number;
}