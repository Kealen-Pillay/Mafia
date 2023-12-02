"use client";
import Link from "next/link";
import Image from "next/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MafiaLogo from "../../../public/Mafia.png";
import { useState } from "react";

const JoinScreen = () => {
  const [username, setUsername] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const handleJoinGame = (e: any): void => {
    username.length && username.length <= 10
      ? console.log("valid username") //proceed
      : console.log("Invalid username"); //reject
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex w-screen h-10 items-center pl-3 pt-2">
        <Link href="/">
          <ArrowBackIosIcon />
        </Link>
      </div>
      <Image
        src={MafiaLogo}
        alt="Mafia Icon"
        className="w-4/5 mb-10 ml-10  mt-20"
      />
      <input
        value={username}
        type="text"
        placeholder="Room Code"
        className="w-9/12 h-14 my-10 rounded p-2 text-center font-medium italic text-black border-2 border-[#848282]"
        onChange={onChange}
      />
        <Link
          href="/"
          className="bg-[#C5FFE0] text-black w-9/12 h-12 font-bold rounded flex justify-center items-center border-2 border-[#31CC78]"
          onClick={handleJoinGame}
        >
          <p className="text-[#31CC78]">Play</p>
        </Link>
    </div>
  );
};

export default JoinScreen;
