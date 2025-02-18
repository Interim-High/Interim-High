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
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
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
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess("Form submitted successfully!");
        setLoading(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setLoading(false);
        setError("Failed to submit the form.");
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setError("Error sending email");
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col xl:w-[40%]">
      {success && <div className="text-green-600 font-semibold">{success}</div>}
      {error && <div className="text-red-600 font-semibold">{error}</div>}
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
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
export default Form;
