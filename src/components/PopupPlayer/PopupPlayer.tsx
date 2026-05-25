import React from "react";
import { IoClose } from "react-icons/io5";

export type PopupPlayerProps = {
  isPlay: boolean;
  tooglePlay: () => void;
};

const PopupPlayer = ({ isPlay, tooglePlay }: PopupPlayerProps) => {
  return (
    <>
      {isPlay && (
        <div className="fixed z-999 top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm">
          <div className="absolute w-full sm:max-w-150 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white dark:bg-dark p-5 m-3 rounded-lg shadow-md">
              {/* header section */}
              <div className="flex items-center justify-between pb-3">
                <h1 className="text-2xl font-semibold">Metaverse</h1>
                <IoClose className="text-4xl cursor-pointer hover:scale-110 duration-300" />
              </div>
              {/* video player section */}
              <div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupPlayer;
