import './Header.css'

function Header(props) {
    const { title, productCount, categoryCount } = props

    return (
        <div className="Header">
            <h1>{title}</h1>
            <p>Product Count: {productCount}</p>
            <p>Unique Categories: {categoryCount}</p>
        </div>
    )
}

export default Header