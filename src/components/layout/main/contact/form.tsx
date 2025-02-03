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
        <div className="flex flex-cols items-end justify-end p-4 mt-20 mr-24" >
            <div className="flex flex-col items-center space-y-3  border-black bg-orange-200 backdrop:blur-3xl p-2 rounded-lg">
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