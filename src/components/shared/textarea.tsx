type TextAreaProps =  {
    placeholder ?: string,
    name ?: string,
    value ?: string
    rows ?: number,
    cols?: number,
    onChange : (event : React.ChangeEvent<HTMLTextAreaElement>) => void;
    className? : string,
    isRequired : boolean
}

const TextArea: React.FC<TextAreaProps> = ({placeholder,name,value,onChange,rows= 6 ,className, isRequired = true}) =>{
    return (
        <div>
            <textarea className={`w-full p-3 rounded-sm ${className}`}
                placeholder={placeholder}
                name={name}
                value = {value}
                rows={rows}
                required = {isRequired}
                // cols={cols}
                onChange={onChange}
            />
        </div>
    )

}
export default TextArea;