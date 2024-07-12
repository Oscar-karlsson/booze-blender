'use client';
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Modal from "react-modal";

export default function Layout({ children }) {
  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  return (
    <div id="__next" className="bg-bgColor min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16 pb-20 flex flex-col">
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}