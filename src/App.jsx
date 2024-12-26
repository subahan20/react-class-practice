import Button from "./components/button/button"
import Greeting from "./components/greeting/greeting"


const App = () => {

  const clickHandler = (name) => alert(`I am clicked my name is ${name}`)

  return (
    <div>
      {
        [{ name: "subahan", role: "Front-End Developer" }, { name: "Tulasi", role: "Angular Developer" }, { name: "Thirmul", role: "Back-End Developer" }].map((eachName, index) => {
          const { name, role } = eachName
          return (
            <div key={index}>
              <Greeting key={index} text={`I am ${role}`}>{name}</Greeting>
              <Button text={"Click Me"} onPress={() => clickHandler(name)} bgColor={"green"} />
            </div>
          )
        })
      }
    </div>
  )
}
export default App