"use client"
import { useState } from "react"
import Input from "./input";
import TextArea from "./textarea";
import Button from "../about/button";

function Form() {
    const [formdata, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const handleInputchange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleSubmit = () => {
        
    }
    return (
        <div className="flex flex-cols items-center justify-between p-4 mt-20 mr-24 ml-24 gap-1"  >
            <div>
                
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1907860552883!2d85.32064107509376!3d27.711395076180164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900449576b3%3A0x8cbc9b2634e299c!2sDanpheLink%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1738567807011!5m2!1sen!2snp" 
             width="670" height="470" 
             style={{
                border: 0
             }} 
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="flex flex-col items-center space-y-3  border-black bg-gray-300 shadow-lg p-3 rounded-lg">
                <h1 className="text-5xl text-red-600 font-semibold">Get in Touch</h1>
                <p className="text-gray-900 text-2xl">Start the Conversation, We’re Here for You!</p>
             <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Name *"
                        value={formdata.name}
                        onchange={handleInputchange}
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        value={formdata.email}
                        onchange={handleInputchange}
                    />
                    <Input
                        type="number"
                        name="number"
                        placeholder="Phone Number *"
                        value={formdata.phone}
                        onchange={handleInputchange}
                    />
                    <TextArea
                        placeholder="Message *"
                        name="message"
                        value={formdata.message}
                        onchange={handleInputchange}
                    />
                    <button
                        type="submit"
                        className="bg-red-900 text-white w-full h-9" >
                           Send
                        </button>               
                </form>
            </div>
        </div>
    )
}

export default Form;