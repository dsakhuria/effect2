import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Example from "./components/SaleItemsRow";

function App() {


  // Storing multi-use btn inside one variable
  const categoryStyles =
    "bg-white text-black p-4 rounded-lg hover:bg-[#1f1f1f] hover:text-white transition-all";

  // Returning JSX with Tailwind CSS classes
  return (
    <main className="bg-[#f7fafc] w-full h-screen">
      <Header/>
      <div className="z-0 w-full h-auto bg-gradient-to-r from-[#dbdbdb] via-[#cccccc] to-[#dbdbdb] flex flex-col items-center justify-center">
        <div className="w-full h-auto py-5 flex items-center justify-evenly">
          <a className="bg-black text-white p-4 rounded-lg" href="#">
            All Categories
          </a>
          <a href="#" className={categoryStyles}>
            Beauty & Care
          </a>
          <a href="#" className={categoryStyles}>
            Skin Creams
          </a>
          <a href="#" className={categoryStyles}>
            Sun Protectors
          </a>
          <a href="#" className={categoryStyles}>
            Makeup
          </a>
          <a href="#" className={categoryStyles}>
            Beauty tools
          </a>
        </div>
        <div className="py-10 w-full h-auto flex flex-col items-center justify-center">
          <span className="w-full h-auto py-10 text-center text-3xl text-[#4d4d4d] font-bold">
            Sales & Offers
          </span>
          <Example />
          <Example />
          <Example />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
