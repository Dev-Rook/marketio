
// Styles ImportL:
import "../styles/global.scss"

// Components Import:
import FilterBar from "../components/FilterBar"

// Sections Import:
import Hero from "../sections/Hero"
import ProductGrid from "../sections/ProductGrid"
import Other from "../sections/Other"

const Main = () => {
  return (
    <div className="page">
      <Hero />
      <FilterBar />
      <ProductGrid />
      <Other />
    </div>
  )
}

export default Main