type buttonComponentsProps = {
    label : string,
    className : string,
    onClick:(e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button : React.FC<buttonComponentsProps>=({label,className,onClick})=>{
    return<button onClick={onClick} className={className}>{label}</button>
}
export default Button;
 