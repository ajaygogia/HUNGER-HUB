import Shimmer from "./Shimmer"
import { useParams } from "react-router"
import useMenu from "../hooks/useMenu"

const Menu = () => {

    const resId = useParams().resId
    const resInfo = useMenu(resId)

    if (resInfo == null) {
        return <Shimmer />
    }
    let menuItems
    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
    for (let i = 0; i < resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR?.cards?.length; i++) {
        if (resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card?.itemCards?.length > 5) {
            menuItems = resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[i].card.card.itemCards
        }
    }

    return (
        <div id='menu' className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(', ')}</p>
            <p>{costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {
                    menuItems.map((item) => (<li key={item?.card?.info?.id}>{item?.card?.info?.name}  - ₹{(item?.card?.info?.price ?? item?.card?.info?.defaultPrice) / 100}</li>))
                }
            </ul>
        </div>
    )
}

export default Menu