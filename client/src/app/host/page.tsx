import React from "react";
import Face6RoundedIcon from '@mui/icons-material/Face6Rounded';
import Face3RoundedIcon from '@mui/icons-material/Face3Rounded';

const Host = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex font-bold text-2xl italic my-3">
        Room Code: <h1 className="text-[#DF4C4C]">7HI6G1</h1>
      </div>

      <div className="grid grid-cols-4 gap-4 bg-white p-3 w-11/12 aspect-square">
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center"> <Face6RoundedIcon className="text-4xl"/> </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center"> <Face6RoundedIcon className="text-4xl"/> </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center"> <Face3RoundedIcon className="text-4xl"/> </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center"> <Face6RoundedIcon className="text-4xl"/> </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center"> <Face3RoundedIcon className="text-4xl"/> </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center"> <Face3RoundedIcon className="text-4xl"/> </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center"> <Face6RoundedIcon className="text-4xl"/> </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center"> <Face3RoundedIcon className="text-4xl"/> </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center"> <Face6RoundedIcon className="text-4xl"/> </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center"> <Face3RoundedIcon className="text-4xl"/> </div>
        <div className="rounded-full border-2 border-black aspect-square text-black flex justify-center items-center"> <Face6RoundedIcon className="text-4xl"/> </div>
      </div>
    </div>
  );
};

export default Host;
