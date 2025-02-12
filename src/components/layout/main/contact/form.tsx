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
    <main className="flex flex-col  justify-center items-center xl:w-[40%]">
        <div className=" p-8  rounded-lg w-full space-y-6 border-black">
          <div className="space-y-3">
          <h1 className="text-4xl text-orange-600 font-semibold text-center">
            Get in Touch
          </h1>
          <p className="text-gray-900 text-center text-xl mb-4">
            Start the Conversation, We’re Here for You!
          </p>
          </div>
          <form className="space-y-10" onSubmit={handleSubmit}>
            <Input
              type="text" 
              className="h-30 focus:outline-2 focus:outline-orange-600 p-4 w-full rounded-md text-xl"
              name="name"
              placeholder="Name *"
              value={formdata.name}
              onChange={handleInputChange}
              isRequired
            />
            <Input
              type="email"
              name="email"
              className="h-30 p-4 w-full focus:outline-2 focus:outline-orange-600 rounded-md text-xl"
              placeholder="Email *"
              value={formdata.email}
              onChange={handleInputChange}
              isRequired
            />
            <Input
              type="tel"
              name="phone"
              className="h-30 p-4 w-full focus:outline-2 focus:outline-orange-600 rounded-md text-xl"
              placeholder="Phone Number *"
              value={formdata.phone}
              onChange={handleInputChange}
              isRequired
            />
            <TextArea
              placeholder="Message *"
              name="message"
              className="rounded-md"
              value={formdata.message}
              onChange={handleInputChange}
              isRequired
            />
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 rounded-md text-white w-full h-14">
              Send
            </button>
          </form>
        </div>
    </main>
  );
}
export default Form;
