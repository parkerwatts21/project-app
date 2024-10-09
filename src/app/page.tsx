"use client";

import React, { useState } from "react";
import Navbar from "./navbar";

export default function Home() {
  const doughnuts = [
    { name: "Caramel Glazed Doughnut", price: "$1.99", type: "glazed" },
    { name: "Caramel Crunch Doughnut", price: "$2.49", type: "filled" },
    { name: "Pumpkin Spice Cake", price: "$2.99", type: "cake" },
    { name: "Reese's Classic Doughnut", price: "$3.49", type: "chocolate" },
    { name: "Original Filled Original Kreme™", price: "$2.29", type: "filled" },
    { name: "Original Filled Chocolate Kreme™", price: "$2.79", type: "filled" },
    { name: "Original Glazed ®", price: "$1.89", type: "glazed" },
    { name: "Chocolate Iced Glazed", price: "$2.19", type: "iced" },
    { name: "Chocolate Sprinkled", price: "$2.39", type: "iced" },
    { name: "Cookies & Cream Doughnut", price: "$3.19", type: "chocolate" },
    { name: "Glazed Doughnut", price: "$1.99", type: "glazed" },
    { name: "Chocolate Iced Sprinkles", price: "$2.49", type: "iced" },
  ];

  const [filter, setFilter] = useState("all");

  const filteredDoughnuts = filter === "all" ? doughnuts : doughnuts.filter((doughnut) => doughnut.type === filter);

  return (
    <div className="min-h-screen p-8 sm:p-20 bg-dot-black/[.2]">
      <main className="flex flex-col items-center max-w-screen-lg mx-auto gap-2">
        <Navbar />
        <h2 className="text-1xl md:text-3xl lg:text-7xl font-bold text-center text-green-800 tracking-tight pt-12">
          Doughnuts
        </h2>
        <p className="text-center tracking-tight pt-1 pb-10 text-gray-400 text-bold">
          Daily Selection Varies by Shop
        </p>

        {/* Filtering options */}
        <div className="flex gap-12 pb-6">
          <button
            className={`text-sm font-bold pb-2 ${
              filter === "all"
                ? "text-green-800 border-b-2 border-green-700"
                : "text-slate-700 hover:border-b-2 hover:border-green-700"
            }`}
            onClick={() => setFilter("all")}
          >
            ALL
          </button>
          <button
            className={`text-sm font-bold pb-2 ${
              filter === "iced"
                ? "text-green-800 border-b-2 border-green-700"
                : "text-slate-700 hover:border-b-2 hover:border-green-700"
            }`}
            onClick={() => setFilter("iced")}
          >
            ICED
          </button>
          <button
            className={`text-sm font-bold pb-2 ${
              filter === "glazed"
                ? "text-green-800 border-b-2 border-green-700"
                : "text-slate-700 hover:border-b-2 hover:border-green-700"
            }`}
            onClick={() => setFilter("glazed")}
          >
            GLAZED
          </button>
          <button
            className={`text-sm font-bold pb-2 ${
              filter === "filled"
                ? "text-green-800 border-b-2 border-green-700"
                : "text-slate-700 hover:border-b-2 hover:border-green-700"
            }`}
            onClick={() => setFilter("filled")}
          >
            FILLED
          </button>
          <button
            className={`text-sm font-bold pb-2 ${
              filter === "cake"
                ? "text-green-800 border-b-2 border-green-700"
                : "text-slate-700 hover:border-b-2 hover:border-green-700"
            }`}
            onClick={() => setFilter("cake")}
          >
            CAKE
          </button>
          <button
            className={`text-sm font-bold pb-2 ${
              filter === "chocolate"
                ? "text-green-800 border-b-2 border-green-700"
                : "text-slate-700 hover:border-b-2 hover:border-green-700"
            }`}
            onClick={() => setFilter("chocolate")}
          >
            CHOCOLATE
          </button>
        </div>

        {/* Grid for doughnuts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {filteredDoughnuts.map((doughnut, index) => (
            <div key={index} className="flex flex-col items-center max-w-sm w-full">
              <div className="flex flex-col items-center justify-center border rounded-lg p-4 shadow-md min-h-[300px] w-full hover:shadow-xl hover:border-gray-200 transition duration-200 bg-white">
                <img
                  src="/donut.png" // Correct path to the public folder
                  alt={doughnut.name}
                  className="w-40 h-55 rounded-full mb-4"
                />
              </div>
              <div className="mt-4 flex justify-between items-center w-full">
                <span className="text-sm text-green-800 font-bold">{doughnut.name}</span>
                <span className="text-sm text-gray-400">{doughnut.price}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}