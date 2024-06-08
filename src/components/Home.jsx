import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);

  const { id, name, address, contact, role, email } = user?.user;
  console.log("Name: ", name);
  console.log("Address: ", address);
  console.log("Email: ", email);
  return (
    <>
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center ">
        <h1>This is home page</h1>
      </div>
    </>
  );
};

export default Home;
