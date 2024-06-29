import Dashbord from "./dashbord";
import { IoIosNotifications } from "react-icons/io";
import image from "../assets/images/profil.svg"
import rv from "../assets/images/rv.svg"
import patient from "../assets/images/patient.svg"
const Acceilrv = () => {
    return ( 
        <>
        <div className="flex">
            <div>
                <Dashbord />
            </div>
            <div className="flex-grow ml-20 mr-20 mr">
                <div className="w-full mt-10 flex items-center justify-between">
                    <div className="flex-shrink-0">
                    <h2 className="text-[#1998D3]">Bienvenu ! Docteur</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                    <IoIosNotifications className="text-3xl" />
                    <img src={image} alt="Profil" />
                    </div>
                </div>
                <p className="w-7/12 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. </p>
                <div className="mt-20">
                    <h1 className="font-bold text-4xl">Rendez-vous</h1>
                    <div className="flex items-center mt-5 gap-10">
                        <div className="bg-[#1998D3] rounded-xl w-1/2 h-36 flex flex-col items-center justify-center">
                            <img src={rv} alt="Rendez-vous" />
                            <h2 className="text-2xl mt-4 text-white">Liste des Rendez-vous</h2>
                        </div>
                        <div className="bg-[#008E5B] rounded-xl w-1/2 h-36 flex flex-col items-center justify-center">
                            <img src={patient} alt="Rendez-vous" />
                            <h2 className="text-2xl mt-4 text-white">Liste des Patients</h2>
                        </div>

                    </div>
                    <div className="flex items-center mt-5 gap-10">
                        <div className="bg-[#000000] rounded-xl w-1/2 h-36 flex flex-col items-center justify-center">
                            <img src={rv} alt="Rendez-vous" />
                            <h2 className="text-2xl mt-4 text-white">Liste des Rendez-vous</h2>
                        </div>
                        <div className="bg-[#8EDBFF] rounded-xl w-1/2 h-36 flex flex-col items-center justify-center">
                            <img src={patient} alt="Rendez-vous" />
                            <h2 className="text-2xl mt-4 text-white">Liste des Patients</h2>
                        </div>

                    </div>
                </div>
               
                 
            </div>

</div>


        </>
     );
}
 
export default Acceilrv;