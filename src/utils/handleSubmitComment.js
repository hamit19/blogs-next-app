import { toast } from "react-hot-toast";
import routerPush from "./routerPush";
import http from "@/services/httpServices";

const onSubmitHandler = async (
  e,
  value,
  setValue,
  postId,
  responseTo,
  router,
  setIsOnReply
) => {
  e.preventDefault();

  try {
    const { data } = await http.post(`/api/post-comment/save-comment`, {
      content: value,
      postId,
      responseTo,
    });

    toast.success(data.message);

    routerPush(router);
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.message);
  }
  setValue("");
  setIsOnReply && setIsOnReply(false);
};

export default onSubmitHandler;
