import { getSidebarAds } from "./action";

export const SideAds = async () => {
  const ads = await getSidebarAds();

  return (
    <div className="fixed top-40 right-5 bottom-0 w-full max-w-sm flex flex-col gap-5">
      {ads.data?.map((item) => (
        <img
          key={item.file_url}
          src={item.file_url}
          className="w-full"
        />
      ))}
    </div>
  );
};
