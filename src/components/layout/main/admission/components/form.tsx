import { useState } from "react";
import Input from "../../../../shared/input";
import Select from "@/components/shared/selectoption";
import TextArea from "../../../../shared/textarea";

const options = [
    { label: "Software Development", value: "software-development" },
    { label: "Cyber Security", value: "cyber-security" },
    { label: "Dot Net", value: "dot-net" }
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
    const [error, setError] = useState<string>();
    const [success, setSuccess] = useState<string>();


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === "phonenumber" && !/^\d{0,10}$/.test(value)) {
            return;
        }
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData((prev) => ({
            ...prev,
            interestedcourse: e.target.value
        }));
    };
    // const handleSelectChange = (value: string) => {
    //     setFormData((prev) => ({
    //         ...prev,
    //         interestedcourse: value
    //     }));
    // };
    


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData({
            fullname: "",
            email: "",
            phonenumber: "",
            address: "",
            interestedcourse: options[0].value,
            queries: "",
        })
        console.log("Form Data:", formData);
        alert("Form submitted successfully!");
    };

    return (
        <div className="flex flex-col justify-center items-center md:w-[717px] mx-auto p-4 gap-2  rounded-lg ">
            <h2 className="font-semibold mb-4 text-orange-600 text-4xl"><span className="text-[#164561] ">Admission</span> Form</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                {/* {Inputfields.map((input, index) => (
                     <div key={index} className="flex flex-col">
                     <label className="font-medium">{input.label}</label>
                     <input
                         type={input.type}
                         name={input.name}
                         value={formData[input.name as keyof typeof formData]}
                         onChange={handleInputChange}
                         className="border p-2 rounded-md"
                         required
                     />
                 </div>
                ))} */}
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
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
