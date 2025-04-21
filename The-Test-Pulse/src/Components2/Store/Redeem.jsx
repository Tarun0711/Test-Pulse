import React, { useState } from "react";
import Navbar from "../../Components/Home/Navbar";
import trophy from "../../Assests/Logo/trophy.png";
import logo from "../../Assests/Logo/TextLogo.svg";
import "./BackGround.css";
import RedeemCard from "./RedeemCard";
import { AddBoxRounded, Telegram } from "@mui/icons-material";
import { BiGift } from "react-icons/bi";
import { ImBoxRemove } from "react-icons/im";

import EarnCoins from "./EarnCoins";
function Redeem() {
  const [selected, setSelected] = useState("Redeem");
  return (
    <div className="h-auto w-full bg-gray-100 dark:bg-[#121212] ">
      <Navbar isHome={true} />
      <div className="h-[90vh] relative ">
        <div
          style={{
            background:
              " radial-gradient(circle, rgba(44,44,44,1) 0%, rgba(30,30,30,1) 30%)",
          }}
          className="w-full relative  md:h-[90%]  flex items-center flex-col gap-4 justify-center"
        >
          <img src={trophy} alt="trophy" className="h-20  md:h-40" />
          <div className="flex items-center justify-center gap-4">
            <img src={logo} alt="logo" className="h-12 " />
            <h1 className="text-gray-300 text-3xl md:text-5xl">Store</h1>
          </div>
          <p className="text-gray-400 font-thin text-sm md:text-lg">
            Shop in our store or redeem our products for free by using Edge
            Coins.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={() => setSelected("Redeem")}
              className={` border-[0.1px] text-center  flex items-center gap-2 hover:scale-105 transition-all ease-in-out duration-300 outline-dashed outline-[1px] p-2  rounded-lg ${
                selected === "Redeem"
                  ? "text-amber-500 bg-white"
                  : "text-warmGray-100"
              }`}
            >
              Redeem <BiGift fontSize={24} />
            </button>
            <button
              onClick={() => setSelected("")}
              className=" text-black p-2 Btn rounded-lg"
            >
              Get Premium
            </button>
            <button
              onClick={() => setSelected("EarnCoins")}
              className={` border-[0.1px] text-center  flex items-center gap-2 hover:scale-105 transition-all ease-in-out duration-300 outline-dashed outline-[1px] p-2  rounded-lg ${
                selected === "EarnCoins"
                  ? "text-amber-500 bg-white"
                  : "text-warmGray-100"
              }`}
            >
              <AddBoxRounded /> Earn{" "}
              <span className="font-bold text-amber-500">Edge Coins</span>
            </button>
            <button
              onClick={() => setSelected("ViewOrders")}
              className={` border-[0.1px] text-center  flex items-center gap-2 hover:scale-105 transition-all ease-in-out duration-300 outline-dashed outline-[1px] p-2  rounded-lg ${
                selected === "ViewOrders"
                  ? "text-amber-500 bg-white"
                  : "text-warmGray-100"
              }`}
            >
              View Order <Telegram />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full  flex bg-transparent min-h-screen  justify-center pb-10">
        {selected === "Redeem" && (
          <div className="  gap-14 w-[90%] items-start flex-wrap flex  p-2 rounded-lg overflow-hidden">
            <RedeemCard />
            <RedeemCard />
            <RedeemCard />
            <RedeemCard />
            <RedeemCard />
            <RedeemCard />
            <RedeemCard />
          </div>
        )}
        {selected === "EarnCoins" && (
          <div className="w-[90%] gap-14 items-start flex-wrap flex p-2 rounded-lg overflow-hidden">
            <EarnCoins />
          </div>
        )}
        {selected === "ViewOrders" && (
          <div className="w-[90%] gap-14 p-2 rounded-lg overflow-hidden">
            <table className="w-full text-gray-400 bg-white dark:bg-transparent border-2">
              <thead>
                <tr>
                  <th className="border-2 text-gray-400 text-sm font-semibold px-4 py-2">
                    Order ID
                  </th>
                  <th className="border-2 text-center text-gray-400 text-sm font-semibold px-4 py-2">
                    Product
                  </th>
                  <th className="border-2 text-center text-gray-400 text-sm font-semibold px-4 py-2">
                    Status
                  </th>
                  <th className="border-2 text-center text-gray-400 text-sm font-semibold px-4 py-2">
                    Date
                  </th>
                  <th className="border-2 text-center text-gray-400 text-sm font-semibold px-4 py-2">
                    Action
                  </th>
                </tr>
              </thead>
            </table>
            <div className="w-full border bg-white dark:bg-transparent border-t-0">
                <p className="text-center text-gray-400 flex flex-col items-center justify-center text-sm font-semibold px-4 py-2">
                    <ImBoxRemove fontSize={32}/>
                    No Orders
                </p>
              </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Redeem;
