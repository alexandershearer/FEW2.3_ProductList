import data from './data.json' // imports data from data.json

export default data

const allCategories = data.map(obj => obj.category)

// const categorySet = new Set(allCategories)
// const categoryUnique = Array.from(categorySet)
const cats = allCategories.reduce((acc, cat) => {
    acc[cat] = 0 // {Toys: 0, Music: 0}
    return acc
}, {})
const categoryUnique = Object.keys(cats)

const categoriesAndCounts = allCategories.reduce((acc, cat) => {
    if (acc[cat] === undefined) {
        acc[cat] = 1
    } else {
        acc[cat] += 1
    }
    return acc
}, {})

const catsAndCounts = categoryUnique.map(name => {
    return { name, count: categoriesAndCounts[name] } // { name: "toys" }
})

catsAndCounts.push({ name: 'All', count: data.length })

export {
    allCategories,
    categoryUnique,
    categoriesAndCounts,
    catsAndCounts
}
