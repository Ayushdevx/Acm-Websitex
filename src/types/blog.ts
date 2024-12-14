export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    image: string;
  };
  createdAt: string;
  likes: number;
  comments: Comment[];
  tags: string[];
}

export interface Comment {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    image: string;
  };
  createdAt: string;
  likes: number;
}

export interface BlogFormData {
  title: string;
  content: string;
  tags: string[];
}