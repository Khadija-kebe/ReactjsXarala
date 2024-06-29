import { Link } from "react-router-dom";
import patiente from "../assets/images/patiente.svg"
const Prixpt = () => {
    return ( 
        <>
        <div className="flex justify-center mt-10 ">
            <div className="flex flex-col items-center justify-center">
                <div className="mb-4">
                    <img src={patiente} alt="" srcset="" />
                </div>
                <div className=" w-96 flex flex-col items-center justify-center ">
                    <div className="flex items-center  justify-between mb-2">
                      <input className=" border rounded-lg border-[#2F2F2F] h-10 w-96 pl-4 " type="text"  placeholder="Prenom"/>
                    </div>
                    <div className="flex items-center  justify-between mb-4">
                      <input className=" border rounded-md border-[#2F2F2F] h-10 w-96 pl-4" type="text"  placeholder="Nom"/>
                    </div>
                    <div className="flex items-center  justify-between mb-4">
                      <input className=" border rounded-md border-[#2F2F2F] h-10 w-96 pl-4" type="text"  placeholder="Age"/>
                    </div>
                    <div className="flex items-center  justify-between mb-4">
                      <input className=" border rounded-md border-[#2F2F2F] h-10 w-96 pl-4" type="text"  placeholder="Adresse"/>
                    </div>
                    <div className="flex items-center  justify-between mb-4">
                      <input className=" border rounded-md border-[#2F2F2F] h-10 w-96 pl-4" type="text"  placeholder="Telephone"/>
                    </div>
                    
                    
                    
                </div>
                 <Link to='/patient'><button className=" rounded-md text-white w-96  h-10 bg-[#1998D3]" type="submit"> Valider</button></Link> 
            </div>

        </div>
        </>
     );
}
 
export default Prixpt;