
const Greeting = ({ children, text }) => {
    return (
        <div>
            <h1>Good Morning {children}</h1>
            <h3>{text}</h3>
        </div>
    )
}
export default Greeting