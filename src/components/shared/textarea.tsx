interface TextAreaProps {
  placeholder?: string;
  name?: string;
  value?: string;
  rows?: number;
  cols?: number;
  onchange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  isRequired: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  name,
  value,
  onchange,
  rows = 6,
  className,
  isRequired = true,
}) => {
  return (
    <div>
      <textarea
        className={` ${className || "w-full p-3 rounded-sm"}`}
        placeholder={placeholder}
        name={name}
        value={value}
        rows={rows}
        required={isRequired}
        // cols={cols}
        onChange={onchange}
      />
    </div>
  );
};
export default TextArea;
