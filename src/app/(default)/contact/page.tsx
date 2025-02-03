import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Form from "@/components/layout/main/contact/form";
import ContactHero from "@/components/layout/main/contact/hero";

function ContactPage (){
    return (
        <div>
            <Header/>
            <ContactHero/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default ContactPage;