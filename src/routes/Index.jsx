// Styles ImportL:
import "../styles/global.scss";

// Components Import:
import FilterBar from "../components/FilterBar";

// Sections Import:
import Hero from "../sections/Hero";
import ProductGrid from "../sections/ProductGrid";
import Other from "../sections/Other";
import ServiceGrid from "../sections/ServiceGrid";

const Index = () => {
  const Fb_text1 = "Shop & Trade At Your Own Risk";
  const Fb_text2 = "Hire Services At Your Own Risk";
  return (
    <div className="page">
      <Hero />
      <FilterBar text={Fb_text1} />
      <ProductGrid />
      <Other />
      <FilterBar text={Fb_text2} />
      {/* <ServiceGrid /> */}
    </div>
  );
};

export default Index;
