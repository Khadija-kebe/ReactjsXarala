import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaConciergeBell } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiAccountCircleFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import dija from "../assets/images/RVS 1.svg"
import dijaa from "../assets/images/Ellipse 12.svg"

const Dashbord = () => {
    return ( 
        <>
        <div className="dasbord">
           <div className="sidebar flex flex-col h-screen text-center">
                <div className="w-72 bg-[#8EDBFF] h-36 rounded-br-3xl flex justify-center items-center">
                    <div className="w-52 bg-[#FFFFFF] rounded-lg flex justify-center items-center">
                        <img
                        src={dija}
                        width={120}
                        height={50}
                        alt="Float UI logo"
                        />
                      
                    </div>
                </div>

                <div className="w-72 bg-white h-16 flex justify-center items-center"> 
                   <div  className="flex justify-center items-center gap-3">
                   <RxDashboard className="text-3xl text-[#1998D3]" />
                    <span className=" text-2xl text-[#1998D3]">Tableau de bord</span>
                   </div>
                </div>
                <div className="w-72 bg-[#8EDBFF] flex-grow rounded-tr-3xl flex justify-center items-center">
                    <div>
                        
                        <img src={dijaa} alt="" srcset="" />
                        <div className="flex flex-col gap-4 mt-5">
                            <Link to="/" className="flex justify-normal items-center gap-3 text-white">
                            < IoMdHome className="text-3xl text-[#1998D3]"/>
                            <span>Accueil</span>
                            </Link>
                            <Link to="/rendez" className="flex justify-normal items-center gap-3 text-white">
                            <FaConciergeBell  className="text-3xl text-[#1998D3]" />
                            <span>Mes rendez-vous</span>
                            </Link>
                            <Link to="/patient" className="flex justify-normal items-center gap-3 text-white">
                            <IoPeople className="text-3xl text-[#1998D3]" />
                            <span>Mes Patients</span>
                            </Link>
                            <Link to="/compte" className="flex justify-normal items-center gap-3 text-white">
                            <RiAccountCircleFill className="text-3xl text-[#1998D3]" />
                            <span>Mon compte</span>
                            </Link>

                            <Link to="/" className=" mt-10 flex justify-normal items-center gap-3 text-white">
                            <RiLogoutCircleRLine  className="text-3xl text-[#1998D3]" />
                            <span>Déconnection</span>
                            </Link>
                            
                        </div>
                    </div>
                </div>
           </div>
        </div>
      
        </>
     );
}
 
export default Dashbord;
