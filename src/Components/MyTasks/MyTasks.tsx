import TaskCard from "../TaskCard/TaskCard";
import useFetchMyTasks from "../../Hooks/useFetchMyTasks/useFetchMyTasks";

type Task = {
  _id: string;
  title: string;
  description: string;
  category: "To-Do" | "In Progress" | "Done";
  timestamp: string;
};

const MyTasks = () => {
  const { myTasks } = useFetchMyTasks();

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
