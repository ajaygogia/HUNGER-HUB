import ItemList from "./ItemList"

function RestrauntCategory({data, showList, setShowIndex}) {
    function showIndex () {
        if (showList) {
            !showList
        } else {
            setShowIndex()
        }
    }
    return (
        <div className="accordian">
            <div className="accordian-header" onClick={showIndex}>
                <span>{data?.card.card?.title} ({data?.card?.card?.itemCards?.length})</span>
                <span>{showList ? '⬆️' : '⬇️'}</span>
            </div>
            <div className="itemList">
                {showList && <ItemList res={data.card.card} />}
            </div>
        </div>
    )
}

export default RestrauntCategory