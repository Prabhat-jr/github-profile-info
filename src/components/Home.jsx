import React from "react";
import Card from "./Card";
import Form from "./Form";

const Home = () => {
  const [data, setData] = React.useState("");
  const [loginUserName, setLoginUserName] = React.useState("");
  const fetchHandler = async (username) => {
    setLoginUserName(username);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const res = await response.json();
    setData(res);
  };
  return (
    <div className="w-full h-[98vh] bg-slate-200 flex justify-center items-center">
      {!data && (
        <div className="w-[90%] h-[40%] md:w-[30%] md:h-[40%] bg-slate-50 border-0 transition delay-50 ease-in shadow-xl hover:shadow-md duration-700">
          <Form onSubmit={fetchHandler} />
        </div>
      )}
      {data && <Card data={data} loginUserName={loginUserName} />}
    </div>
  );
};

export default Home;
