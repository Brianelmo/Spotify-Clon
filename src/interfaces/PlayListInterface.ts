export interface Owner {
    display_name:string
}

export interface Image {
    url:string
}

export interface PlayListInterface {
    owner:Owner
    name:string
    images:Image[];
    id:string;
}

