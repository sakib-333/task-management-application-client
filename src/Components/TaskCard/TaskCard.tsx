import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TaskCard = () => {
  return (
    <div className="max-w-sm w-full h-full p-3 max-h-[135px] border rounded-md group">
      <h1 className="font-bold truncate">Test Task</h1>
      <p className=" text-justify max-h-[75px] overflow-hidden">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
        consequuntur voluptatum similique placeat. Ea, itaque iste. Nobis
        corporis culpa hic doloremque, voluptate enim sequi dignissimos corrupti
        nemo aspernatur delectus consequatur. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Pariatur consequuntur voluptatum similique
        placeat. Ea, itaque iste. Nobis corporis culpa hic doloremque, voluptate
        enim sequi dignissimos corrupti nemo aspernatur delectus consequatur.
      </p>
      <div className="gap-2 hidden group-hover:flex">
        <button>
          <FaEye />
        </button>
        <button>
          <FaRegEdit />
        </button>
        <button>
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
