import Swal from "sweetalert2";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";
import { errorAlert } from "../../Alerts/errorAlert";
import useFetchMyTasks from "../useFetchMyTasks/useFetchMyTasks";

const useDeleteTask = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch } = useFetchMyTasks();

  const deleteTask = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This task will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.post("/delete-task", { id }).then(({ data }) => {
          if (data.acknowledgement) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          } else {
            errorAlert(data.message);
          }
        });
      }
    });
  };

  return deleteTask;
};

export default useDeleteTask;
