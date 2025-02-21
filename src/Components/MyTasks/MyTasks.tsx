import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import TaskCard from "../TaskCard/TaskCard";

const MyTasks = () => {
  const axiosPublic = useAxiosPublic();
  const { data: myTasks = [] } = useQuery({
    queryKey: ["myTasks"],
    queryFn: async () => {
      const res = await axiosPublic.post("/my-tasks");
      return res.data;
    },
  });
  console.log(myTasks);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      <div>
        <h1 className="font-bold text-center text-primary">To-Do</h1>
        <div className="divider"></div>
        <TaskCard />
      </div>
      <div>
        <h1 className="font-bold text-center text-primary">In Progress</h1>
        <div className="divider"></div>
        <TaskCard />
      </div>
      <div>
        <h1 className="font-bold text-center text-primary">Done</h1>
        <div className="divider"></div>
        <TaskCard />
      </div>
    </div>
  );
};

export default MyTasks;
