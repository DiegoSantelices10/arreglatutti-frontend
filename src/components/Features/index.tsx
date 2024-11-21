import Solid from "../custom/BackgroundDesign/Solid";
import SectionTitle from "../custom/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="relative py-20 pb-32"
      >
        <Solid />
        <SectionTitle
          title="Servicio garantizado"
          textClassName="text-white md:text-[36px] lg:text-[40px] "
          center
        />
        <div className="container pt-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
