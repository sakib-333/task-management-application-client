import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  title: string;
  description: string;
  category: "To-Do" | "In Progress" | "Done";
  timestamp: Date;
};

const AddTaskPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const timestamp = new Date();
    data.timestamp = timestamp;
    console.log(data);
  };

  return (
    <div className="w-full p-4 border flex items-center justify-center rounded-md">
      <form
        className="max-w-screen-lg w-full space-y-4 flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold">Add Task</h1>
        <label className="form-control w-full max-w-md">
          <div className="label">
            <span className="label-text font-bold">Title</span>
          </div>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="max 50 characters"
            className="input input-bordered  w-full max-w-md"
          />
        </label>
        <label className="form-control w-full max-w-md">
          <div className="label">
            <span className="label-text font-bold">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered w-full max-w-md"
            rows={3}
            {...register("description", { required: true })}
            placeholder="max 200 characters"
          ></textarea>
        </label>
        <label className="form-control w-full max-w-md">
          <div className="label">
            <span className="label-text font-bold">Category</span>
          </div>
          <select
            {...register("category", { required: true })}
            defaultValue={""}
            className="select select-bordered"
          >
            <option disabled value={""}>
              Pick one
            </option>
            <option value={"To-Do"}>To-Do</option>
            <option value={"In Progress"}>In Progress</option>
            <option value={"Done"}>Done</option>
          </select>
        </label>
        <label className="max-w-md w-full">
          <button className="btn bg-primary hover:bg-secondary w-full">
            Add Task
          </button>
        </label>
      </form>
    </div>
  );
};

export default AddTaskPage;
