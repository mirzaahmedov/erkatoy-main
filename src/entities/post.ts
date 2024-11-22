import { Tag } from "./tag";

type Post = {
  id: number;
  title: string;
  fio: string | null;
  descr: string;
  content: string;
  category_id: number;
  category_name: string;
  view: number;
  click: number;
  imageurl: string;
  tags: Tag[];
};

export type { Post };
