import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import ContactHero from "@/components/layout/main/contact/hero";
import MainContact from "@/components/layout/main/contact/Main";

function ContactPage (){
    return (
        <div>
            <Header/>
            <ContactHero/>
            <MainContact/>
            <Footer/>
        </div>
    )
}

export default ContactPage;