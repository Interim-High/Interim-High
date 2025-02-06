import { ClassNames } from "@emotion/react";

interface TextAreaProps {
    placeholder ?: string,
    name ?: string,
    value ?: string
    rows ?: number,
    cols?: number,
    onchange : (event : React.ChangeEvent<HTMLTextAreaElement>) => void;
    isRequired : true

}

const TextArea: React.FC<TextAreaProps> = ({placeholder,name,value,onchange,rows= 6,isRequired}) =>{
    return (
        <div>
            <textarea className={`w-full p-3 rounded-sm ${className}`}
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