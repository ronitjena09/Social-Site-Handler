import React from "react";
import { Routes, Router, BrowserRouter, Link } from "next/link";
import Navbar from "./homepage/navbar/page";
import Hero from "./homepage/herosection/page";

export default function Home() {
  return (
    <>
      <main className="p-[10px]  bg-misty-moss ">
        <Navbar />
      </main>
      {/* Hero Section */}
      <Hero />
      <body className=""></body>
    </>
  );
}
