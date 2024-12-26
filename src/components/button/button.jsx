
const Button = ({ text, onPress, bgColor, border, outline, margin, color }) => {
    return (
        <button onClick={onPress} style={{ background: bgColor, border: border, outline: outline, margin: margin, color: color }}>{text}</button>
    )
}
export default Button