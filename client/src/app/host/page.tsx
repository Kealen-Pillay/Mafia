"use client";
import React, { useState } from "react";
import Face6RoundedIcon from "@mui/icons-material/Face6Rounded";
import Face3RoundedIcon from "@mui/icons-material/Face3Rounded";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CircularProgress from "@mui/material/CircularProgress";
import PersonIcon from "@mui/icons-material/Person";
import TimerIcon from "@mui/icons-material/Timer";

const HostScreen = () => {
  const [roomCode, setRoomCode] = useState<string>("#7HI6G1");
  const [players, setPlayers] = useState<string[] | null>(null);

  const LoadingTable = (): JSX.Element => {
    return (
      <div className="w-11/12 flex items-center justify-center bg-white rounded-lg h-20">
        <CircularProgress />
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex font-bold flex-row text-2xl my-5 w-full items-center">
        <div className="w-1/5 px-5">
          <Link href="/">
            <ArrowBackIosIcon />
          </Link>
        </div>
        <div className="flex flex-row space-x-2">
          <h1>Room Code: </h1>
          <h1 className="text-red-500">{roomCode}</h1>
        </div>
      </div>
      {players ? (
        <div className="grid grid-cols-4 rounded-lg gap-4 bg-white p-3 w-11/12 h-fit">
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
          <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center">
            {" "}
            <Face3RoundedIcon className="text-4xl" />{" "}
          </div>
        </div>
      ) : (
        <LoadingTable />
      )}
      <div className="w-full flex justify-center my-5">
        <Link
          href="/"
          className="bg-[#C5FFE0] text-black w-11/12 h-12 font-bold rounded flex justify-center items-center border-2 border-[#31CC78]"
        >
          <p className="text-[#31CC78]">Start Game</p>
        </Link>
      </div>
      <div className="flex flex-col w-11/12 rounded-lg mb-5">
        <div className="flex flex-row w-full items-center bg-white text-black rounded-md space-x-2 pl-2 py-2">
          <PersonIcon />
          <h1 className="font-bold">Role Settings</h1>
        </div>
      </div>
      <div className="flex flex-col w-11/12 rounded-lg mb-5">
        <div className="flex flex-row w-full items-center bg-white text-black rounded-md space-x-2 pl-2 py-2">
          <TimerIcon />
          <h1 className="font-bold">Round Settings</h1>
        </div>
      </div>
    </div>
  );
};

export default HostScreen;
