
// Styles ImportL:
import "../styles/global.scss"

// Components Import:
import FilterBar from "../components/FilterBar"

// Sections Import:
import Hero from "../sections/Hero"
import ProductGrid from "../sections/ProductGrid"

const Main = () => {
  return (
    <div className="page">
      <Hero />
      <FilterBar />
      <ProductGrid />
    </div>
  )
}

export default Main