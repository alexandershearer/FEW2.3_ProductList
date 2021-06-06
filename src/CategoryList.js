import { catsAndCounts } from './data'
import './CategoryList.css'

function CategoryList(props) {

    const { category } = props

    return (
        <div className="CategoryList">
            {catsAndCounts.map(obj => {
                const className = obj.name === category ? 'selected' : ''
                return (
                    <button className={className}>
                        {obj.name}
                        <span> {obj.count} </span>
                    </button>
                )
            })}
        </div>
    )
}

export default CategoryList