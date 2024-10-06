import { CaretRightIcon } from "@radix-ui/react-icons";
import React from "react";

function Nav() {
  return (
    <>
      <div className="flex flex-row justify-between items-center px-3 text-black">
        <p className="text-[20px]">Create session</p>
        <CaretRightIcon width={40} height={40} />
      </div>
      <div className="flex flex-row justify-between items-center px-3 text-black">
        <p className="text-[20px]">Animations</p>
        <CaretRightIcon width={40} height={40} />
      </div>
      <div className="flex flex-row justify-between items-center px-3 text-black">
        <p className="text-[20px]">Backgrounds</p>
        <CaretRightIcon width={40} height={40} />
      </div>
      <div className="flex flex-row justify-between items-center px-3 text-black">
        <p className="text-[20px]">Fonts</p>
        <CaretRightIcon width={40} height={40} />
      </div>
    </>
  );
}

export default Nav;
