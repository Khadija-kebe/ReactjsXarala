import Dashbord from "./dashbord";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { RiAccountPinCircleFill } from "react-icons/ri";
import compte from "../assets/images/compte1.svg"
const Compte = () => {
    return ( 
        <>
        <div className="flex">
            <div>
                <Dashbord />
            </div>
            <div className="flex-grow ml-20 mr">
                <div className="w-full mt-10 text-center">
                    <h1 className="text-[#1998D3] text-5xl font-normal">Rendez-vous</h1>
                    <div className=" flex items-center justify-center mt-6 ">
                        <div className=" ml-20 absolute  left-64">
                        <img src={compte} alt="" srcset="" />
                        </div>
                        <div className="w-full h-20 bg-[#1998D3] text-white flex items-center justify-center">
                            <span className="font-bold mr-96">Mon compte</span>
                        </div>
                    </div>
                </div>
                <div className=" w-96 mt-6 ml-80 flex flex-col items-center justify-center ">
                   <div className="h-32 rounded-lg  border flex items-center w-96 justify-between mb-2">
                        <span className="text-[#2F2F2F] ml-5"><span className="font-bold text-[#1998D3]  ">Doctor Ndiaye</span><br /> <span>Dentiste</span> </span>
                        <span className="mr-5"><RiAccountPinCircleFill className="text-2xl text-[#1998D3]" /></span>
                    </div>
                   <div className="h-11 rounded-lg  border flex items-center w-96 justify-between mb-2">
                        <span className="text-[#2F2F2F] ml-5"><span className="font-bold">Adresse:</span> : Cité Avion, Ouakam</span>
                        <span className="mr-5"><CiEdit className="text-3xl" /></span>
                    </div>
                    <div className="h-11 rounded-lg  border flex items-center w-96 justify-between mb-2">
                        <span className="text-[#2F2F2F] ml-5"><span className="font-bold">Telephone:</span>  +221 77 000 00 02</span>
                        <span className="mr-5"><CiEdit className="text-3xl" /></span>
                    </div>
                    <div className="h-11 rounded-lg  border flex items-center w-96 justify-between mb-2">
                        <span className="text-[#2F2F2F] ml-5"><span className="font-bold">Email:</span> : astou.ndiaye90@gmail.com</span>
                        <span className="mr-5"><CiEdit className="text-3xl" /></span>
                    </div>
                    <div className="h-11 rounded-lg  border flex items-center w-96 justify-between mb-2">
                        <span className="text-[#2F2F2F] ml-5"><span className="font-bold">Mot de passe:</span>........</span>
                        <span className="mr-5"><CiEdit className="text-3xl" /></span>
                    </div>
                    
                    
                    
                </div>
                 <Link to='/compte'><button className="rounded-lg text-white w-96 ml-80 mt-2 h-10 bg-[#1998D3]" type="submit">enregistre</button></Link> 
            </div>      
        </div>
        </>
     );
}
 
export default Compte;