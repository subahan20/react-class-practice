import Card from "./components/card/card"
import { ImageComponent } from "./components/image/image"
import { OrderedLists, UnorderedLists } from "./components/list/list"


const App = () => {
  const isMorning = true
  return (
    <div>
      {
        isMorning ?
          <>
            <h1>Hello World</h1>
            <ImageComponent />
            <OrderedLists />
            <UnorderedLists />
          </> :
          <div>
            <h1>Hello</h1>
            <Card />
          </div>
      }
    </div>
  )
}
export default App