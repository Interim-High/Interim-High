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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();
      console.log("data", data);
      if (data.success) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="flex flex-col xl:w-[40%]">
      <div className="  rounded-lg w-full space-y-6 border-black">
        <form className="space-y-10" onSubmit={handleSubmit}>
          <Input
            type="text"
            className="h-20 focus:outline-2 focus:outline-orange-600 p-4 w-full rounded-md text-xl"
            name="name"
            placeholder="Name *"
            value={formdata.name}
            onChange={handleInputChange}
            isRequired
          />
          <Input
            type="email"
            name="email"
            className="h-20 p-4 w-full focus:outline-2 focus:outline-orange-600 rounded-md text-xl"
            placeholder="Email *"
            value={formdata.email}
            onChange={handleInputChange}
            isRequired
          />
          <Input
            type="tel"
            name="phone"
            className="h-20 p-4 w-full focus:outline-2 focus:outline-orange-600 rounded-md text-xl"
            placeholder="Phone Number *"
            value={formdata.phone}
            onChange={handleInputChange}
            isRequired
          />
          <TextArea
            placeholder="Message *"
            name="message"
            className="rounded-md text-xl resize-none"
            value={formdata.message}
            onChange={handleInputChange}
            isRequired
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 rounded-md text-white w-full h-14"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
export default Form;
