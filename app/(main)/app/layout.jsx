'use client';
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Modal from "react-modal";

export default function Layout({ children }) {
  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  return (
    <div id="__next" className="bg-bgColor">
      <Navbar />
      <div className="pt-16 pb-20">
        <main>{children}</main>
      </div>
    </div>
  );
}