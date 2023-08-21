import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import ImagesSlider from "./components/ImagesSlider";

function Home() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navbar />
      <ImagesSlider />

      <Gallery />
    </div>
  );
}

export default Home;
