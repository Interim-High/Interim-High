import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import Card from "../about/card";
import Governancesection from "./components/govermentDashboard";
import SideNav from "./components/sidenav";

export default function Governance (){
    return(
        <div>
            <Header/>
            <Governancesection/>
            <Footer/>
            
        </div>
    )
}