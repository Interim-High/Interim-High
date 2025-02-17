"use client"
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import AdmissionHero from "./components/admissionHero";
import HorizontalLinearStepper from "./components/ApplicationSection";
import ApproveSection from "./components/approve";
import Formsection from "./components/formsection";
import RequirementsTab from "./components/tabs";
// import BasicTabs from "./components/tabs";

function AdmissionPage (){
    return(
        <div>
            <Header/>
            <AdmissionHero/>
            <HorizontalLinearStepper/>
            <ApproveSection/>
            
            <RequirementsTab/>
            
            <Formsection/>
            <Footer/>
        </div>
    )
}
export default AdmissionPage;