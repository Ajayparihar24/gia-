import Banner from "../_components/Landing/Banner";
import WhoWeAre from "../_components/Landing/WhoWeAre";
import WhoWeServe from "../_components/Landing/WhoWeServe";
import WhereWeServe from "../_components/Landing/WhereWeServe";
import Team from "../_components/Landing/Team";
import Pricing from "../_components/Landing/Pricing";

export default function Home() {
  return (
    <>
      <Banner />
      <Pricing />
      <WhoWeAre />
      <WhoWeServe />
      <WhereWeServe />
      <Team />
    </>
  );
}
