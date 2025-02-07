import { useState } from "react";

interface InputProp {
    type?: string;
    value?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isRequired: boolean;
   className ?: string;
}

const Input: React.FC<InputProp> = ({ type = "text", value, name, label, placeholder, className,onChange, isRequired }) => {
    const [error, setError] = useState("");

    const validateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (isRequired && value.trim() === "") {
            setError(`${name} is required.`);
        } else if (type === "tel" && !/^\d{10}$/.test(value)) {
            setError("Phone number must be exactly 10 digits.");
        } else if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setError("Please enter a valid email.");
        } else {
            setError(""); 
        }

        onChange(event);
    };

    return (
        <div>
            {label && <label className="block font-medium">{label}</label>}
            <input
            className={` ${className||"w-[519px] h-[40px] rounded-sm p-3 border border-gray-300 focus:border-blue-500 focus:outline-none"}`}
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={validateInput}
                required={isRequired}
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>
    );
}; 

export default Input;
