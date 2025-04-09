import { useDispatch } from "react-redux"
import { IMG_URL } from "../utilities/constants"
import { useLocation } from "react-router";

function ItemList(data) {
    const info = data?.res?.itemCards || data?.items;
    const dispatch = useDispatch();
    const addItem = (item) => {
        dispatch({ type: 'cart/addItem', payload: item });
    }

    const location = useLocation();
    const isCartPage = location.pathname.includes("/cart");

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
                        {!isCartPage && (
                            <button className="add-button" onClick={() => addItem(item)}>Add +</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList