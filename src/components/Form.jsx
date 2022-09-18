import React from "react";

const Form = ({ onSubmit }) => {
  const [username, setUsername] = React.useState("");
  const submitHandler = () => {
    if(username){
      onSubmit(username);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full relative">
        <h2 className="inline-block text-slate-500 absolute top-3 left-[10%]">
          See your repos?
        </h2>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-[80%] block px-3 py-3 bg-white border shadow-sm rounded-[10px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-500"
          placeholder="Enter Your Github username"
        />
        <button
          className="inline-block -mb-2 mt-12 px-4 py-2 rounded-md transition ease-in delay-50 bg-slate-200 hover:bg-slate-300 duration-700"
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Form;
