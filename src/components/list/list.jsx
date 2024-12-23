
export const OrderedLists = () => {
    return (
        <ol>
            <ListItems />
        </ol>
    )
}

export const UnorderedLists = () => {
    return (
        <ul>
            <ListItems />
        </ul>
    )
}

const ListItems = () => {
    return (
        <div>
            <li>Apple</li>
            <li>Bannana</li>
            <li>Kiwi</li>
        </div>
    )
}