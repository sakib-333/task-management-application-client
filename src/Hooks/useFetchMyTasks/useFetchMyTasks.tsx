import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useFetchMyTasks = () => {
  const axiosPublic = useAxiosPublic();
  const { data: myTasks = [], refetch } = useQuery({
    queryKey: ["myTask"],
    queryFn: async () => {
      const res = await axiosPublic.post("/my-tasks");
      return res.data;
    },
  });
  return { myTasks, refetch };
};

export default useFetchMyTasks;
