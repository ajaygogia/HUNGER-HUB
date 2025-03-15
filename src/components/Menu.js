import Shimmer from "./Shimmer"
import { useParams } from "react-router"
import useMenu from "../hooks/useMenu"
import RestrauntCategory from "./RestrauntCategory"
import { useState } from "react"

const Menu = () => {

    const resId = useParams().resId
    const resInfo = useMenu(resId)
    const [showIndex, setShowIndex] = useState(1)

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

    const category = resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR?.cards.filter((card) => {
        return card.card.card['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    })

    return (
        <div id='menu' className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(', ')}</p>
            <p>{costForTwoMessage}</p>
            <h2>Menu</h2>
            {
                category.map((item, index) => <RestrauntCategory key={item.card.card.categoryId} setShowIndex={()=> setShowIndex(index)} showList={showIndex == index ? true : false} data={item} />)
            }
        </div>
    )
}

export default Menu