import GeneralText from "../../Components/GeneralText/GeneralText";
import useAuth from "../../Hooks/useAuth/useAuth";

const HomePage = () => {
  const { user } = useAuth();

  return <div>{user ? <div>Hello</div> : <GeneralText />}</div>;
};

export default HomePage;
