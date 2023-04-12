import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import routerPush from "@/utils/routerPush";

const PaginationComponent = ({ totalPages, page }) => {
  const router = useRouter();

  const handleChange = (e, page) => {
    router.query.page = page;

    routerPush(router);
  };
  return (
    <div className='flex items-center justify-center col-span-6 max-h-10'>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(e, page) => handleChange(e, page)}
        color={"primary"}
      />
    </div>
  );
};

export default PaginationComponent;
