import Button from "./components/button/button"
import { HeadingOne, HeadingTwo } from "./components/heading/headings"
import { ImageComponent } from "./components/image/image"
import { OrderedLists } from "./components/list/list"
import { recipeData } from "./data/recipeData"



const App = () => {

  return (
    <div>
      {
        recipeData.recipes.map((eachRecipe, index) => {
          return (
            <div key={index}>
              <HeadingOne text={eachRecipe.name} />
              <ImageComponent source={eachRecipe.image} alternateText={eachRecipe.name} height={100} width={100} />
              <HeadingTwo text={"List of ingredients to prepare the recipe"} />
              <OrderedLists list={eachRecipe.ingredients} />
              <HeadingTwo text={"List of instructions to prepare the recipe"} />
              <OrderedLists list={eachRecipe.instructions} />
              <Button text={"start preparation"} bgColor={"green"} />
            </div>
          )
        })
      }
    </div>
  )
}
export default App