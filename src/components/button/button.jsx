
const Button = ({ text, onClick, bgColor, border, outline, margin, color }) => {
    return (
        <button onClick={onClick} style={{ background: bgColor, border: border, outline: outline, margin: margin, color: color }}>{text}</button>
    )
}
export default Button