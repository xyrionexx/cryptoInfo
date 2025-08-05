"use client";
import "./detailCrypto.css";
import Sidebar from "@/sideBar/page";
import { Icon } from "@iconify/react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

import React from "react";

export default function DetailCrypto() {
  const data = [
    { name: "2009-01-03", uv: 0.0, pv: 0.0, amt: 0.0 }, // Genesis Block
    { name: "2010-05-22", uv: 0.0025, pv: 0.0025, amt: 0.0025 }, // BTC pizza
    { name: "2011-06-08", uv: 31.0, pv: 31.0, amt: 31.0 },
    { name: "2013-11-29", uv: 1242.0, pv: 1242.0, amt: 1242.0 },
    { name: "2017-12-17", uv: 19650.0, pv: 19650.0, amt: 19650.0 },
    { name: "2018-12-15", uv: 3200.0, pv: 3200.0, amt: 3200.0 },
    { name: "2020-12-16", uv: 21310.0, pv: 21310.0, amt: 21310.0 },
    { name: "2021-11-10", uv: 69000.0, pv: 69000.0, amt: 69000.0 }, // ATH
    { name: "2022-06-18", uv: 17500.0, pv: 17500.0, amt: 17500.0 },
    { name: "2023-12-31", uv: 42000.0, pv: 42000.0, amt: 42000.0 },
    { name: "2024-04-20", uv: 64000.0, pv: 64000.0, amt: 64000.0 },
    { name: "2025-07-31", uv: 58000.0, pv: 58000.0, amt: 58000.0 },
  ];

  return (
    <>
      <nav className="absolute z-20">
        <Sidebar />
      </nav>
      <div className="titleDetailCryptoInfo pl-20 mb-5">
        <h2 className="text-white text-5xl">
          crypto<span className="text-blue-600">Info</span>
        </h2>
      </div>
      <div className="heroPageDetailCrypto pl-28 flex justify-between">
        <div className="rightSide flex flex-col w-[60%]">
          <div className="rightSideDetailCrypto flex  flex-col mt-3">
            <h2 className="text-white flex items-center text-3xl">
              <Icon
                icon="mdi:bitcoin"
                width="50"
                height="50"
                style={{ color: "#ff9400" }}
              />
              BTC/USD
            </h2>
            <div className="">
              <div className="priceAndCondition flex gap-5">
                <div className="price text-amber-100 text-4xl">
                  <h2>$200000000</h2>
                </div>
                <div className="condition flex items-center text-green-300 bg-blue-800  px-5 rounded-2xl">
                  <p>+2.26</p>
                </div>
              </div>
              <div className="mt-5 z-[-1] ">
                <LineChart
                  width={800}
                  height={350}
                  data={data}
                  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                  className="z-[1]"
                >
                  <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="purple"
                    strokeWidth={2}
                    name="My data series name"
                  />
                  <XAxis dataKey="name" />
                  <YAxis
                    width="auto"
                    label={{ value: "UV", position: "insideLeft", angle: -90 }}
                  />
                  <Legend align="right" />
                  <Tooltip />
                </LineChart>
              </div>
              <div className="table">
                <table>
                  <thead></thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="leftSide w-[30%] mt-5 flex flex-col mr-16">
          <div className="optionLeftSide flex justify-between mb-5">
            <div className="optionTrancsaction text-white flex gap-3">
              <button>BUY</button>
              <h2>|</h2>
              <button>SELL</button>
            </div>
            <div className="optionSetting flex gap-2 ">
              <button className="">
                <Icon
                  icon="solar:refresh-bold"
                  width="24"
                  height="24"
                  style={{ color: "#9a9792" }}
                />
              </button>
              <button>
                <Icon
                  icon="uil:setting"
                  width="24"
                  height="24"
                  style={{ color: "#9a9792" }}
                />
              </button>
            </div>
          </div>
          <form action="">
            <div className="transactionCrypto border rounded-3xl border-white text-white p-5">
              <div className="titleTracsactionCrypto flex items-center justify-between">
                <h2 className="flex items-center text-3xl">
                  <Icon
                    icon="mdi:bitcoin"
                    width="50"
                    height="50"
                    style={{ color: "#ff9400" }}
                  />
                  BTC
                </h2>
                <p>You buy</p>
              </div>
              <div className="priceCrypto flex justify-between items-center">
                <div className="inputBuyCrypto text-4xl pl-2  text-white">
                  <input
                    type="number"
                    placeholder="Input Price"
                    className="w-70 border-none outline-none no-spinner"
                  />
                </div>
                <div className="balanceCrypto">
                  <p>Balance</p>
                  <p>20.000</p>
                </div>
              </div>
            </div>
            <div className="transactionRoom border rounded-3xl mt-5 border-white text-white p-5">
              <div className="titleTracsactionRoom flex items-center justify-between">
                <h2 className="flex items-center text-3xl mb-1 ">
                  <Icon
                    icon="fa:usd"
                    width="50"
                    height="50"
                    style={{ color: "#40b676" }}
                  />
                  USD
                </h2>
                <p>You Spend</p>
              </div>
              <div className="priceCrypto flex justify-between items-center">
                <div className="inputDolar">
                  <input
                    type="number"
                    className="text-4xl pl-2 border-none outline-none w-80"
                    placeholder="Pay"
                    readOnly
                  />
                </div>
                <div className="balanceCrypto">
                  <p>Balance</p>
                  <p>20.000</p>
                </div>
              </div>
            </div>
            <div className="buttonBuy bg-green-400 flex items-center justify-center rounded-4xl h-10 mt-5">
              <button type="submit">Buy BTC</button>
            </div>
            <div className="buttonConnectWallet bg-blue-600 flex items-center justify-center rounded-4xl h-10 mt-5">
              <button className="flex  text-white gap-2 items-center">
                Connect Wallet{" "}
                <Icon
                  icon="mdi:wallet-outline"
                  width="24"
                  height="24"
                  style={{ color: "#ffffff" }}
                />
              </button>
            </div>
            <div className="CurrentBalance text-white mt-5 bg-blue-950 p-4 rounded-2xl">
              <p className="mb-1">Current Balance</p>
              <div className="trackBalance flex justify-between items-center text-5xl">
                <h2>2000.000</h2>
                <div
                  className="priceCurrentBalance bg-red-950 px-5 py-1 text-red-500 rounded-3xl items-center flex "
                  style={{ fontSize: "16px" }}
                >
                  <p>-2.61</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
