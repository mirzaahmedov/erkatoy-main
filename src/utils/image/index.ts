import { baseURL } from "@/common/lib/http";

export const getImageUrl = (url: string) => {
  return url
    ?.replace("http://localhost:4001", "/images")
    ?.replace(baseURL, "/images");
};
