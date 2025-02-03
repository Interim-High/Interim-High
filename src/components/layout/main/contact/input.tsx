interface InputProp {
    type ?: string,
    value ?: string,
    name ?: string,
    label ?: string,
    placeholder ?: string,
    onchange : (event : React.ChangeEvent<HTMLInputElement>) => void;
}

const Input :React.FC<InputProp> = ({type,value,name,label,placeholder ,onchange}) => {
    return(
        <div > 
            <input className="w-[519px] h-[40px] rounded-sm"
            type = {type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onchange}

            />
        </div>
    )
}

export default Input;