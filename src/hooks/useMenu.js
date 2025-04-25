import { useState, useEffect } from "react"
import { useParams } from "react-router"


const useMenu = (resId) => {
    useEffect(() => {
        fetchData()
    }, [])

    const [resInfo, setResInfo] = useState(null)

    async function fetchData() {
        const json = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=' + resId + '&catalog_qa=undefined&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A721%2C%22primaryRestaurantId%22%3A10575%2C%22cloudinaryId%22%3A%22RX_THUMBNAIL%2FIMAGES%2FVENDOR%2F2025%2F4%2F9%2F5c424dcc-2417-4679-a8f0-659c9e4aa5c1_10575.jpg%22%2C%22brandId%22%3A721%2C%22dishFamilyId%22%3A%22846647%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION')
        const data = await json.json()
        setResInfo(data)
    }

    return resInfo
}

export default useMenu