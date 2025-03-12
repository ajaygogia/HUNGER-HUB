import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router"

const Menu = () => {

    useEffect(() => {
        fetchData()
    }, [])

    const [resInfo, setResInfo] = useState(null)
    const resId = useParams().resId

    async function fetchData() {
        const json = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=' + resId + '&catalog_qa=undefined&submitAction=ENTER')
        const data = await json.json()
        setResInfo(data)
    }

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
    console.log(menuItems)


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