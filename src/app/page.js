import React from "react";
import { Routes, Router, BrowserRouter, Link } from "next/link"; 
import Navbar from "./homepage/navbar/page";

export default function Home() {
  return (
    <>
    <main className='p-[10px]'>
      <Navbar />
      </main>
      
    </>
  );
};

