import AddTaskBtn from "../../Components/AddTaskBtn/AddTaskBtn";
import GeneralText from "../../Components/GeneralText/GeneralText";
import useAuth from "../../Hooks/useAuth/useAuth";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <AddTaskBtn />
          <div className="divider"></div>
        </div>
      ) : (
        <GeneralText />
      )}
    </div>
  );
};

export default HomePage;
