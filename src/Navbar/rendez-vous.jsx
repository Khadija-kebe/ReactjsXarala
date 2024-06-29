import Dashbord from "./dashbord";
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import profil from "../assets/images/profil.svg"
const Rendez = () => {
    return ( 
        <>
        <div className="flex">
            <div>
                <Dashbord />
            </div>
            <div className="flex-grow ml-20 mr-20 mr">
                <div className="w-full mt-10 flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <div className="relative max-w-xs">
                        <CiSearch  className="absolute left-3 text-white top-1/2 transform -translate-y-1/2" />
                            <input type="text" placeholder="recherche"
                            className="w-96 pl-12 pr-3 py-2 text-gray-500 bg-black outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                    <IoIosNotifications className="text-3xl" />
                    <img src={profil} alt="Profil" />
                    </div>
                </div>
                <div className="mt-20">
                    <div className="flex items-center justify-between">
                        <div><h2 className="text-xl font-bold">Mes Rendez-vous</h2></div>
                        <Link to="/prix"><div><IoAddCircle className="text-2xl text-[#1998D3]"/></div></Link>
                    </div>
                    <div className="mt-5">
                      
                            
                        <div className="flex items-center gap-x-3  whitespace-nowrap">
                            <div className="w-16 h-14 rounded-full border border-black flex items-center justify-center">
                                <FaUser className="text-2xl" />
                            </div>

                          
                            <div className="w-full">
                                
                                <hr className="border-t-2 border-gray-300 my-2 w-full" />
                                <div className="">
                                    <div className="flex items-center justify-between w-full">
                                        <span className="block text-gray-700 text-sm font-medium">Ajourdh'ui</span>
                                        <span className="block text-gray-700 text-sm font-medium">09H00</span>
                                        
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <span className="block text-[#1998D3] font-bold text-sm">Mousa Ba</span>
                                        <span className="block text-gray-700 text-xs"><Link to="/info" ><GoChevronRight className="text-3xl" /></Link></span>
                                    </div>
                                </div>
                                <hr className="border-t-2 border-gray-300 my-2 w-full" />
                                
                                
                            </div>
                        </div>
                        <div className="flex items-center gap-x-3  whitespace-nowrap">
                            <div className="w-16 h-14 rounded-full border border-black flex items-center justify-center">
                                <BsFillPeopleFill className="text-2xl" />
                            </div>
                            <div className="w-full">
                                
                                <hr className="border-t-2 border-gray-300 my-2 w-full" />
                                <div className="">
                                    <div className="flex items-center justify-between w-full">
                                        <span className="block text-gray-700 text-sm font-medium">28/05/2023</span>
                                        <span className="block text-gray-700 text-sm font-medium">08H00</span>
                                        
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <span className="block text-[#1998D3] font-bold text-sm">Equipe Xarala</span>
                                        <span className="block text-gray-700 text-xs"><Link to="/info" ><GoChevronRight className="text-3xl" /></Link></span>
                                    </div>
                                </div>
                                <hr className="border-t-2 border-gray-300 my-2 w-full" />
                                
                                
                            </div>
                        </div>
                        <div className="flex items-center gap-x-3  whitespace-nowrap">
                            <div className="w-16 h-14 rounded-full border border-black flex items-center justify-center">
                                <BsFillPeopleFill className="text-2xl" />
                            </div>
                            <div className="w-full">
                                
                                <hr className="border-t-2 border-gray-300 my-2 w-full" />
                                <div className="">
                                    <div className="flex items-center justify-between w-full">
                                        <span className="block text-gray-700 text-sm font-medium">28/05/2023</span>
                                        <span className="block text-gray-700 text-sm font-medium">11H00</span>
                                        
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <span className="block text-[#1998D3] font-bold text-sm">Réunion d’affaire</span>
                                        <span className="block text-gray-700 text-xs"><Link to="/info" ><GoChevronRight className="text-3xl" /></Link></span>
                                    </div>
                                </div>
                                <hr className="border-t-2 border-gray-300 my-2 w-full" />
                                
                                
                            </div>
                        </div>
                        <div className="flex items-center gap-x-3  whitespace-nowrap">
                            <div className="w-16 h-14 rounded-full border border-black flex items-center justify-center">
                                <FaUser  className="text-2xl" />
                            </div>
                            <div className="w-full">
                                
                                <hr className="border-t-2 border-gray-300 my-2 w-full" />
                                <div className="">
                                    <div className="flex items-center justify-between w-full">
                                        <span className="block text-gray-700 text-sm font-medium">22/05/2023</span>
                                        <span className="block text-gray-700 text-sm font-medium">10H00</span>
                                        
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <span className="block text-[#1998D3] font-bold text-sm">Pathé Fall</span>
                                        <span className="block text-gray-700 text-xs"><Link to="/info" ><GoChevronRight className="text-3xl" /></Link></span>
                                    </div>
                                </div>
                                <hr className="border-t-2 border-gray-300 my-2 w-full" />
                                
                                
                            </div>
                        </div>
                        
                        


                        
                    </div>
                    
                </div>
            </div>
        </div>
          
        </>
     );
}
 
export default Rendez;