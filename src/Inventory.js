import data from './data'

const total = data.reduce((acc, obj) => {
    return acc + parseFloat(obj.price.slice(1))
}, 0).toFixed(2)

const totalUnits = data.reduce((acc, obj) => {
    return acc + obj.units
}, 0)

function Inventory() {
    return (
        <div className="Inventory">
            <p>Total cost of inventory: ${total}</p>
            <p>Total Units: {totalUnits}</p>
        </div>
    )
}

export default Inventory