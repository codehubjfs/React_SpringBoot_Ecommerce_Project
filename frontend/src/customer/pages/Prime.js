import { Container } from "react-bootstrap";
import PrimeHeroModule from "../components/prime";
import PrimeOptions from "../components/primeOptions";
import PrimeBenefit from "../components/primebenefit";
import FeatureCard from "../components/primecard";
import PrimeFeatures from "../components/primefeatures";
import BadgePrime from "../components/badgeprime";
import "../prime.css";

function Prime() {
  return (
    //       <PrimeHeroModule />
    //       <PrimeFeatures />
    //       <hr></hr>
    //       <PrimeBenefit />
    //       <hr></hr>
    //       <PrimeOptions />
    //       <hr></hr>
    //       <FeatureCard />
    <Container id="content" style={{ marginTop: "80px" }}>
      <div>
        <BadgePrime isPrimeMember={false} />

        <PrimeHeroModule />
        <hr></hr>
        <PrimeFeatures />
        <hr></hr>
        <PrimeBenefit />
        <hr></hr>
        <PrimeOptions />
        <hr></hr>
        <FeatureCard />
      </div>
    </Container>
  );
}
export default Prime;
