interface TextAreaProps {
    placeholder ?: string,
    name ?: string,
    value ?: string
    rows ?: number,
    cols?: number,
    onchange : (event : React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({placeholder,name,value,onchange,rows= 6}) =>{
    return (
        <div>
            <textarea className="w-full"
                placeholder={placeholder}
                name={name}
                value = {value}
                rows={rows}
                // cols={cols}
                onChange={onchange}
            />
        </div>
    )

}
export default TextArea;