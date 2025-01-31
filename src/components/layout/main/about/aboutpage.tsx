import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import AboutAdventure from "./adventure";
import AboutHero from "./hero";


function AboutPage() {
    return (
        <div>
            <Header />
            <AboutHero/>
            <AboutAdventure/>
            <Footer />
        </div>

    )
}
export default AboutPage;