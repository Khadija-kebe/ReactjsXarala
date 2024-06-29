import React from "react";
import Navbar from "./navbar";
import Awa from "./khady";
import photos from "../assets/images/img.svg"
const Accueil = () => {
    return (
        <>
        <Navbar></Navbar>
         <main>
         
        <div className='bg-white flex justify-center items-center  gap-44'>
           <div  className='w-96'>
            <h1 className='font-bold text-4xl leading-10'>Rendez-vous</h1>
            <p className='leading-9 mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris.</p>
             <button
                className="w-full mt-5 py-1.5 text-sm text-white duration-150 bg-[#8EDBFF] rounded-lg hover:bg-indigo-700 active:shadow-lg">
            commencer
            </button>
           
           </div>
           <div>
           <img src={photos} alt="" srcset="" />
           </div>
        </div>
      </main>
        </>
      );
}
 
export default Accueil;