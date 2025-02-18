import { useState } from "react";
import Input from "../../../../shared/input";
import Select from "@/components/shared/selectoption";
import TextArea from "../../../../shared/textarea";

const options = [
  { label: "Software Development", value: "software-development" },
  { label: "Cyber Security", value: "cyber-security" },
  { label: "Dot Net", value: "dot-net" },
];

export default function FormComponent() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    address: "",
    interestedcourse: options[0].value,
    queries: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phonenumber" && !/^\d{0,10}$/.test(value)) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      interestedcourse: e.target.value,
    }));
  };

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     setError(null);
  //     setSuccess(null);
  //     setLoading(true);
  //     if (
  //       !formData.fullname ||
  //       !formData.email ||
  //       !formData.phonenumber ||
  //       !formData.address ||
  //       !formData.queries
  //     ) {
  //       setError("Please fill in all fields.");
  //       setLoading(false);
  //       return;
  //     }

  //     if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
  //       setError("Invalid email format.");
  //       setLoading(false);
  //       return;
  //     }

  //     setSuccess("Form submitted successfully!");

  //     setFormData({
  //       fullname: "",
  //       email: "",
  //       phonenumber: "",
  //       address: "",
  //       interestedcourse: options[0].value,
  //       queries: "",
  //     });
  //   };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    if (
      !formData.fullname ||
      !formData.email ||
      !formData.phonenumber ||
      !formData.address ||
      !formData.queries
    ) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Invalid email format.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess("Form submitted successfully!");
        setFormData({
          fullname: "",
          email: "",
          phonenumber: "",
          address: "",
          interestedcourse: options[0].value,
          queries: "",
        });
      } else {
        setError("Failed to submit the form.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center md:w-[717px] mx-auto p-4 gap-2  rounded-lg ">
      {success && <div className="text-green-600 font-semibold">{success}</div>}
      {error && <div className="text-red-600 font-semibold">{error}</div>}
      <h2 className="font-semibold mb-4 text-orange-600 text-4xl">
        <span className="text-[#164561] ">Admission</span> Form
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        {loading && <p>loading</p>}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Full Name </label>
          <Input
            className="h-30 focus:outline-2 focus:outline-orange-600 p-4 w-full rounded-md text-xl"
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
            isRequired
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Email</label>
          <Input
            className="h-30 focus:outline-2 focus:outline-orange-600 p-4 w-full rounded-md text-xl"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            isRequired
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Phone Number</label>
            <Input
              className="h-30 focus:outline-2 focus:outline-orange-600 p-4 w-full rounded-md text-xl"
              type="text"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleInputChange}
              isRequired
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Address</label>
            <Input
              className="h-30 focus:outline-2 focus:outline-orange-600 p-4 w-full rounded-md text-xl"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              isRequired
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Interested Course</label>
          <Select
            value={formData.interestedcourse}
            className="h-30 focus:outline-2 focus:outline-orange-600 p-4 w-full rounded-md text-xl"
            onChange={handleSelectChange}
            options={options}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-medium"> Queries</label>
          <TextArea
            name={"queries"}
            value={formData.queries}
            onChange={handleInputChange}
            rows={4}
            cols={2}
            className={"border-2 rounded-xl"}
            isRequired
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
          disabled={loading}
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
  );
}
