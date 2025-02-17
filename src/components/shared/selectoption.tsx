
type SelectionProps = {
    options: { label: string, value: string }[],
   className ?: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
}

const Select: React.FC<SelectionProps> = ({options,className, onChange,value}) => {
    return (
        <div className=" border rounded-xl">
           <select value={value} onChange={onChange} className={`rounded-lg w-full flex gap${className}`}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                        
                    </option>
                )

                )}
            </select>
        </div>
    )
}
export default Select;