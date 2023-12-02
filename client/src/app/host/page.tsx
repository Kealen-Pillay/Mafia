"use client";
import React, { useState } from "react";
import Face6RoundedIcon from "@mui/icons-material/Face6Rounded";
import Face3RoundedIcon from "@mui/icons-material/Face3Rounded";

const HostScreen = () => {
  const [roomCode, setRoomCode] = useState<string>("7HI6G1");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex font-bold flex-row text-2xl italic my-3 px-5">
        <h1>Room Code: {roomCode}</h1>
      </div>
      <div className="grid grid-cols-4 rounded-lg gap-4 bg-white p-3 w-11/12 aspect-square">
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center">
          {" "}
          <Face6RoundedIcon className="text-4xl" />{" "}
        </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center">
          {" "}
          <Face6RoundedIcon className="text-4xl" />{" "}
        </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center">
          {" "}
          <Face3RoundedIcon className="text-4xl" />{" "}
        </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center">
          {" "}
          <Face6RoundedIcon className="text-4xl" />{" "}
        </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center">
          {" "}
          <Face3RoundedIcon className="text-4xl" />{" "}
        </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center">
          {" "}
          <Face3RoundedIcon className="text-4xl" />{" "}
        </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center">
          {" "}
          <Face6RoundedIcon className="text-4xl" />{" "}
        </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center">
          {" "}
          <Face3RoundedIcon className="text-4xl" />{" "}
        </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center">
          {" "}
          <Face6RoundedIcon className="text-4xl" />{" "}
        </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center">
          {" "}
          <Face3RoundedIcon className="text-4xl" />{" "}
        </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center">
          {" "}
          <Face6RoundedIcon className="text-4xl" />{" "}
        </div>
      </div>
    </div>
  );
};

export default HostScreen;
