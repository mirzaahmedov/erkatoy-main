import { baseURL } from "@/common/lib/http";

export const getImageUrl = (url: string) => {
  return url
    ?.replace(
      "http://localhost:4001",
      "https://raqamli-manaviyat.uz/ayzek-back/api",
    )
    ?.replace(baseURL, "https://raqamli-manaviyat.uz/ayzek-back/api");
};
