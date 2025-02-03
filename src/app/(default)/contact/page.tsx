import Header from "@/components/layout/header/Header";
import Form from "@/components/layout/main/contact/form";
import ContactHero from "@/components/layout/main/contact/hero";

function ContactPage (){
    return (
        <div>
            <Header/>
            <ContactHero/>
            <Form/>
        </div>
    )
}

export default ContactPage;