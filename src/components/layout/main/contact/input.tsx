export type InputProp ={
    type ?: string,
    value ?: string,
    name : string,
    label ?: string,
    placeholder ?: string,
    onchange? : (event : React.ChangeEvent<HTMLInputElement>) => void;
    className? : string
}

const Input :React.FC<InputProp> = ({type,value,name,label,placeholder ,onchange ,className}) => {
    return(
        <div > 
        
          <input className={` ${className || "w-[519px] h-[40px] rounded-sm p-3"}`} 
            type = {type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onchange}

        onChange(event);
    };

    return (
        <div>
            {label && <label className="block font-medium">{label}</label>}
            <input
                className="w-[519px] h-[40px] rounded-sm p-3 border border-gray-300 focus:border-blue-500 focus:outline-none"
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
