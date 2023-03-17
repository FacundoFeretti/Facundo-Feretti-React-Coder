import "./ItemListContainer.css"

export const ItemListContainer = (props) => {
    return (
        <div id="itemListContainer">
            <h1>{props.greeting}</h1>
            <h3>{props.msg}</h3>
        </div>
    )
}