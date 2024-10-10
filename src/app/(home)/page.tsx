"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./navbar";

type Doughnut = {
  id: number;
  name: string;
  type: string;
  price: number;
};

export default function Home() {
  const [doughnuts, setDoughnuts] = useState<Doughnut[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch doughnuts from the API on component mount
  useEffect(() => {
    const fetchDoughnuts = async () => {
      try {
        const response = await fetch('/api/doughnuts');
        if (!response.ok) {
          throw new Error('Failed to fetch doughnuts');
        }
        const data = await response.json();
        setDoughnuts(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDoughnuts();
  }, []);

  const filteredDoughnuts = filter === "all" ? doughnuts : doughnuts.filter((doughnut) => doughnut.type === filter);

  if (loading) return <p>Loading doughnuts...</p>;
  if (error) return <p>Error: {error}</p>;

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
                <Image
                  src="/donut.png" // Correct path to the public folder
                  alt={doughnut.name}
                  className="rounded-full mb-4"
                  width={160}
                  height={220}
                />
              </div>
              <div className="mt-4 flex justify-between items-center w-full">
                <span className="text-sm text-green-800 font-bold">{doughnut.name}</span>
                <span className="text-sm text-gray-400">${doughnut.price}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}