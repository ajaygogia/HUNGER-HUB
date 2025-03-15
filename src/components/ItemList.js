import { IMG_URL } from "../utilities/constants"

function ItemList(data) {
    const info = data.res.itemCards
    console.log(info)
    return (
        <div>
            {info.map((item) => (
                <div className="item-menu" key={item.card.info.id}>
                    <div className="resItems">
                        <span>{item.card.info.name} - ₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</span>
                    </div>
                    <div className="itemDesc">
                        <p>{item.card.info.description}</p>
                        <img className='food-image' src={IMG_URL + item.card.info.imageId}></img>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList