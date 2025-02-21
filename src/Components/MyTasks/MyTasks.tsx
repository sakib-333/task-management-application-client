import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import TaskCard from "../TaskCard/TaskCard";

type Task = {
  _id: string;
  title: string;
  description: string;
  category: "To-Do" | "In Progress" | "Done";
};

const MyTasks = () => {
  const axiosPublic = useAxiosPublic();
  const { data: myTasks = [] } = useQuery({
    queryKey: ["myTasks"],
    queryFn: async () => {
      const res = await axiosPublic.post("/my-tasks");
      return res.data;
    },
  });

  const toDos = myTasks.filter((task: Task) => task.category === "To-Do");
  const inProgress = myTasks.filter(
    (task: Task) => task.category === "In Progress"
  );
  const done = myTasks.filter((task: Task) => task.category === "Done");

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      <div className="w-full">
        <h1 className="font-bold text-center text-primary">To-Do</h1>
        <div className="divider"></div>
        {toDos.map((task: Task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
      <div className="w-full">
        <h1 className="font-bold text-center text-primary">In Progress</h1>
        <div className="divider"></div>
        {inProgress.map((task: Task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
      <div className="w-full">
        <h1 className="font-bold text-center text-primary">Done</h1>
        <div className="divider"></div>
        {done.map((task: Task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
