import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import AdmissionHero from "./components/admissionHero";
import ApproveSection from "./components/approve";

function AdmissionPage (){
    return(
        <div>
            <Header/>
            <AdmissionHero/>
            <ApproveSection/>
            <Footer/>
        </div>
    )
}
export default AdmissionPage;