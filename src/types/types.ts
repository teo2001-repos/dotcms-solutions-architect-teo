export type BannerType = {
    identifier: string;
    title: string;
    image: string;
  };

 export type Blog = {
    identifier: string;
    inode: string;
    title: string;
  };
  
 export type HomeProps = {
    blogs: Blog[];
  }; 