"use client";
import { useState } from "react";
import Input from "../../../shared/input";
import TextArea from "../../../shared/textarea";
function Form() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formdata);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="flex flex-col items-center justify-center">
        <div className="bg-gray-300 p-8 shadow-lg rounded-lg w-full border-black">
          <h1 className="text-4xl text-orange-600 font-semibold text-center">
            Get in Touch
          </h1>
          <p className="text-gray-900 text-center mb-4">
            Start the Conversation, We’re Here for You!
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Name *"
              value={formdata.name}
              onChange={handleInputChange}
              isRequired
            />
            <Input
              type="email"
              name="email"
              placeholder="Email *"
              value={formdata.email}
              onChange={handleInputChange}
              isRequired
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formdata.phone}
              onChange={handleInputChange}
              isRequired
            />
            <TextArea
              placeholder="Message *"
              name="message"
              value={formdata.message}
              onchange={handleInputChange}
              isRequired
            />
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white w-full h-9">
              Send
            </button>
          </form>
        </div>
    </main>
  );
}
export default Form;
