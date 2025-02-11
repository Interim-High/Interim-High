"use client"
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import Achievement from "./Achievement";
import AboutAdventure from "./adventure";
import Facility from "./Facilities";
import Governance from "./governance";
//import Governance from "./governance";
import AboutHero from "./hero";
import PolicySection from "./policy";
import StorySection from "./story";


function AboutPage() {
    return (
        <div>
            <Header />
            <AboutHero/>
            <AboutAdventure/>
            <StorySection/>
            <Achievement/>
            <Governance/>
            <Facility/>
            <PolicySection/>
            <Footer />
        </div>

    )
}
export default AboutPage;