import Button from "../button/button"
import { HeadingOne } from "../heading/headings"
import { ImageComponent } from "../image/image"
import { UnorderedLists } from "../list/list"

const Card = () => {
    return (
        <div>
            <ImageComponent />
            <HeadingOne />
            <UnorderedLists />
            <Button />
        </div>
    )
}
export default Card