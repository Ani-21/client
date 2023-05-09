export interface IPost {
  _id: string;
  username: string;
  text: string;
  selectedFile?: string;
  timestamp: string;
  likeCount: number;
}
