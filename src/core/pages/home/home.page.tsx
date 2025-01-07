import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import Loader from "@/core/components/common/loader";
import useGetData from "./hooks/use-get-data";
import { Bounce, toast } from "react-toastify";

const HomePage = () => {
  const { data, isLoading, error } =
    useGetData();

  if (isLoading) {
    return <Loader />;
  }


  if (error) {
    toast(`Error al obtener datos ${error.message} `, {
      toastId: 1,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }

  if (data) {
    return (
      <div className="grid grid-cols-1 p-4 pt-0">
        <DataTable
          columns={columns}
          data={data}
        />
      </div>
    );
  }
};

export default HomePage;
