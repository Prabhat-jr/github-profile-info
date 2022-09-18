import React from "react";

const Card = ({ data, loginUserName }) => {
  return (
    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-md shadow-xl tansition ease-in delay-100 hover:shadow-sm duration-700">
      <div className="flex justify-center items-center">
        <img
          className=" mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={data?.avatar_url}
          alt="github avatar"
        />
      </div>
      <div className="flex items-center mt-4">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-md text-black font-light text-slate-300">
              Github Username:{" "}
              <span className="text-lg text-black font-semibold">
                @{loginUserName}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-md text-black font-light text-slate-300">
              Github Name:
              <span className="text-lg text-black font-semibold">
                {` ${data?.name}`}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-md text-black font-light text-slate-300">
          Public Repos :{" "}
          <span className="text-lg text-black font-normal">
            {data?.public_repos}
          </span>
        </p>
        <p className="text-md text-black font-light text-slate-300">
          Public Gists :{" "}
          <span className="text-lg text-black font-normal">
            {data?.public_gists}
          </span>
        </p>
        <p className="text-md text-black font-light text-slate-300">
          Profile Created :{" "}
          <span className="text-lg text-black font-normal">
            {data?.created_at?.slice(0, 10)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
