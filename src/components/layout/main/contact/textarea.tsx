import { ClassNames } from "@emotion/react";

interface TextAreaProps {
    placeholder ?: string,
    name ?: string,
    value ?: string
    rows ?: number,
    cols?: number,
    onchange : (event : React.ChangeEvent<HTMLTextAreaElement>) => void;
    className? : string
    isRequired : boolean
    
}

const TextArea: React.FC<TextAreaProps> = ({placeholder,isRequired,name,value,onchange,rows= 6 ,className}) =>{
    return (
        <div>
            <textarea className={` ${className || 'w-full p-3 rounded-sm'}`} 

                placeholder={placeholder}
                name={name}
                value = {value}
                rows={rows}
                required = {isRequired}
                // cols={cols}
                onChange={onchange}
            />
        </div>
    )

}
export default TextArea;