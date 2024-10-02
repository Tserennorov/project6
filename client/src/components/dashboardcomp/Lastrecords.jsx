"use client";
import React from "react";

const records = [
  {
    id: 1,
    title: "Lending & Renting",
    time: "3 hours ago",
    imgSrc: "home.png",
  },
  {
    id: 2,
    title: "Buying & Selling",
    time: "5 hours ago",
    imgSrc: "home.png",
  },
  { id: 3, title: "Investing", time: "1 day ago", imgSrc: "home.png" },
  {
    id: 1,
    title: "Lending & Renting",
    time: "3 hours ago",
    imgSrc: "home.png",
  },
  {
    id: 1,
    title: "Lending & Renting",
    time: "3 hours ago",
    imgSrc: "home.png",
  },
];

export const LastRecords = () => {
  return (
    <div className="flex flex-col w-[1440px] justify-between mx-auto">
      <h2>Last Records</h2>
      {records.map((record) => (
        <div
          className="flex items-center w-[1400px] h-[80px] justify-between
        "
        >
          <div key={record.id} className="flex items-center mb-2">
            <img src={record.imgSrc} alt={record.title} className="mr-2" />
            <div>
              <p>{record.title}</p>
              <p>{record.time}</p>
            </div>
          </div>
          <div className="text-green-500">-1000</div>
        </div>
      ))}
    </div>
  );
};
