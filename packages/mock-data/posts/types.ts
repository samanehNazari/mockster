export interface PostResponse {
  id: number;
  userId: number;
  body: string;
  media: Media[];
  user: User;
  likeCount: number;
  share: number;
  createdAt: "Wed Oct 04 12:46:06 +0000 2023";
  commentCount: number;
  viewCount: number;
}

enum Format {
  Image = "IMAGE",
  Link = "LINK",
}

interface Media {
  format: Format;
  url: string;
}

interface User {
  username: string;
  avatar: string;
  name: string;
}
