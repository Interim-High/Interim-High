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

            />
        </div>
    )
}

export default Input;