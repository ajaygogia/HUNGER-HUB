import { useContext } from "react"
import { IMG_URL } from "../utilities/constants"
import UserContext from "../utilities/UserContext"

const RestrauntCard = (props) => {
    let res = props.res.info
    const { name, cuisines, avgRating, costForTwo, sla } = res
    const { loggedInUser } = useContext(UserContext)
    return (
        <div className="res-card">
            <img className='res-image' src={IMG_URL + res?.cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating + ' Stars'}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime + ' Min'}</h4>
        </div>
    )
}

export const withLabel = (RestrauntCard) => {
    return (props) => {
        return (
            <div>
                <label className="withLabel">Cheap</label>
                <RestrauntCard {...props} />
            </div>
        )
    }

}

export default RestrauntCard