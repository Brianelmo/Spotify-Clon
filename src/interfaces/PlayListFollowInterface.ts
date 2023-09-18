export interface PlaylistData {
  message: string;
  playlists: {
    href: string;
    items: Array<{
      description: string;
      external_urls: {
        spotify: string;
      };
      images: Array<{
        url: string;
      }>;
      name: string;
      owner: {
        display_name: string;
      };
      type: string;
      id:string
    }>;
  };
}

  

 
  

  
