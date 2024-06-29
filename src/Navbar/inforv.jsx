import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import compt from "../assets/images/fil.svg"
const Info = () => {

    return ( 
        <>
        <div className="flex justify-center mt-14">
            <div className="flex flex-col items-center justify-center">
                <div className="mb-4">
                    <img src={compt} alt="" srcset="" />
                </div>
                <div className="border w-96 flex flex-col items-center justify-center ">
                    <div className="flex items-center w-80 justify-between mb-6">
                        <span className="text-[#2F2F2F]"><span className="font-bold">Titre:</span> Réunion de travail</span>
                        <span><CiEdit className="text-3xl" /></span>
                    </div>
                    <div className="flex items-center w-80 justify-between mb-6">
                        <span><span className="font-bold">Avec:</span> Equipe Xarala</span>
                        <span><CiEdit className="text-3xl" /></span>
                    </div>
                    <div className="flex items-center w-80 justify-between mb-6">
                        <span><span className="font-bold">Date:</span>  28/05/2023</span>
                        <span><CiEdit className="text-3xl" /></span>
                    </div>
                    <div className="flex items-center w-80 justify-between mb-6">
                        <span><span className="font-bold">Heure:</span> 08H:00</span>
                        <span><CiEdit className="text-3xl" /></span>
                    </div>
                    <div className="flex items-center w-80 justify-between mb-6">
                        <span><span className="font-bold">Lieu:</span>  Campus LIberté 6</span>
                        <span><CiEdit className="text-3xl" /></span>
                    </div>
                    
                    
                </div>
                 <Link to='/rendez'><button className=" text-white w-96 mt-4 h-10 bg-[#1998D3]" type="submit">enregistre</button></Link> 
            </div>

        </div>
        </>
     );
}
 
export default Info;