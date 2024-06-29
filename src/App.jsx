import React from "react"
import { Routes,Route } from "react-router-dom"
import Navbar from "./Navbar/navbar"
import Accueil from "./Navbar/acceuil"
import Register from "./Navbar/register"
import Login from "./Navbar/login"
import Acceilrv from "./Navbar/vxaccaill"
import Rendez from "./Navbar/rendez-vous"
import Patient from "./Navbar/patient"
import Info from "./Navbar/inforv"
import Infopatient from "./Navbar/patientInfo"
import Prendrerv from "./Navbar/prixrv"
import Prixpt from "./Navbar/prixpt"
import Compte from "./Navbar/compte"
function App() {


  return (
    <>
    <Routes>
    <Route path="/navbar" element={<Navbar />} />
    <Route path="" element={<Accueil />} />
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/das" element={<Acceilrv/>} />
    <Route path="/rendez" element={<Rendez/>} />
    <Route path="/patient" element={<Patient/>} />
    <Route path="/info" element={<Info/>} />
    <Route path="/infopatient" element={<Infopatient/>} />
    <Route path="/prix" element={<Prendrerv/>} />
    <Route path="/prixpatient" element={<Prixpt/>} />
    <Route path="/compte" element={<Compte/>} />
    </Routes>

    </>
  )
}

export default App
