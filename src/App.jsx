import AiFeature from "./components/AiFeature";
import FeatureCorausel from "./components/FeatureCorausel";
import CarouselWords from "./components/CarouselWords";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav"

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <FeatureCorausel />
        <CarouselWords />
        <AiFeature />
        <Footer />
      </main>
    </>
  );
};

export default App;
