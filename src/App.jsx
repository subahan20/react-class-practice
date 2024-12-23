import Button from "./components/button/button"
import Card from "./components/card/card"
import { HeadingOne, HeadingTwo, HeadingThree, HeadingFour, HeadingFive } from "./components/heading/headings"
import { ImageComponent } from "./components/image/image"
import { OrderedLists, UnorderedLists } from "./components/list/list"

const App = () => {
  return (
    <div>
      <Button />
      <HeadingOne />
      <HeadingTwo />
      <HeadingThree />
      <HeadingFour />
      <HeadingFive />
      <HeadingFive />
      <OrderedLists />
      <UnorderedLists />
      <ImageComponent />
      <Card />
    </div>
  )
}
export default App