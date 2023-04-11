import http from "@/services/httpServices";
import { toast } from "react-hot-toast";
import routerPush from "./routerPush";

const handleBookmark = async (blogId, user, router) => {
  if (!user?._id) {
    toast.error("Please sign in first!");
    return;
  }

  try {
    const { data } = await http.put(`api/posts/bookmark/${blogId}`);

    data.bookmarked ? toast.success(data.message) : toast.error(data.message);

    routerPush(router);
  } catch (err) {
    console.log(err);
  }
};

export default handleBookmark;
