import Data from '/src/assets/data.json'

export default function Gallery() {
    return Data.map((item)=> (
        <Data 
        key = {item._id}
        title = {item.title}
        imageUrl = {item.imageUrl}
        description = {item.description}
        />
    ));
}