import Navbar from "./components/Navbar";

export default function Layout({ children }) {
    return (
        <div className=" bg-bgColor">
        <Navbar />
        <div className="pt-16 pb-20">  
          <main>{children}</main>
        </div>
      </div>
    );
  }