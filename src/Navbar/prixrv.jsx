import { Link } from "react-router-dom";
import prix from "../assets/images/prix.svg"
const Prendrerv = () => {
    return ( 
        <>
         <div className="flex justify-center ">
            <div className="flex flex-col items-center justify-center">
                <div className="">
                    <img src={prix} alt="" srcset="" />
                </div>
                <div className=" w-96 flex flex-col items-center justify-center ">
                    <div className="flex items-center  justify-between mb-2">
                      <input className=" border rounded-lg border-[#2F2F2F] h-10 w-96 pl-4 " type="text"  placeholder="Titre-Rendez-vous"/>
                    </div>
                    <div className="flex items-center  justify-between mb-4">
                      <input className=" border rounded-md border-[#2F2F2F] h-10 w-96 pl-4" type="text"  placeholder="AVEC QUI?"/>
                    </div>
                    <div className="flex items-center  justify-between mb-4">
                      <input className=" border rounded-md border-[#2F2F2F] h-10 w-96 pl-4" type="text"  placeholder="Date de rendez-vous"/>
                    </div>
                    <div className="flex items-center  justify-between mb-4">
                      <input className=" border rounded-md border-[#2F2F2F] h-10 w-96 pl-4" type="text"  placeholder="Heure-Rendez-vous"/>
                    </div>
                    <div className="flex items-center  justify-between mb-4">
                      <input className=" border rounded-md border-[#2F2F2F] h-10 w-96 pl-4" type="text"  placeholder="Lieu-Rendez-vous"/>
                    </div>
                    
                    
                    
                </div>
                 <Link to='/rendez'><button className=" rounded-md text-white w-96  h-10 bg-[#1998D3]" type="submit"> Valider</button></Link> 
            </div>

        </div>

        </>
     );
}
 
export default Prendrerv;