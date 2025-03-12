import RestrauntCard from "./RestrauntCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router"

const Body = () => {
    const [listOfRestraunts, setListOfRestraunts] = useState([])
    const [filteredListOfRestraunts, setFilteredListOfRestraunts] = useState([])

    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const res = await data.json()
        setListOfRestraunts(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredListOfRestraunts(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    function filterArray() {
        setFilteredListOfRestraunts(listOfRestraunts.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())))
    }

    return listOfRestraunts.length == 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='search-box'>
                <input className="search" value={searchText} type="search" onChange={(e) => {
                    setSearchText(e.target.value)
                }} >
                </input>

                <button className="search-btn" type='button' onClick={filterArray}>Search</button>
            </div>


            <button className='top-rated' onClick={() => {
                const filteredRest = listOfRestraunts.filter((res) => res.info.avgRating > 4.3)
                setFilteredListOfRestraunts(filteredRest)
            }}>Top Rated Restraunts</button>


            <div className="res-container">
                {filteredListOfRestraunts.map((res) =>
                    <Link key={res.info.id} to={'/menu/' + res.info.id}><RestrauntCard  res={res} /></Link>
                )}
            </div>
        </div>
    )
}

export default Body