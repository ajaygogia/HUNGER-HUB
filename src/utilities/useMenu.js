import { useState, useEffect } from "react"
import { useParams } from "react-router"


const useMenu = (resId) => {
    useEffect(() => {
        fetchData()
    }, [])

    const [resInfo, setResInfo] = useState(null)

    async function fetchData() {
        const json = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=' + resId + '&catalog_qa=undefined&submitAction=ENTER')
        const data = await json.json()
        setResInfo(data)
    }

    return resInfo
}

export default useMenu