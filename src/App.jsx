import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import Gig from "./components/Gig";
import claudeDebussy from "./assets/Claude-Debussy.webp"
import shishamo from "./assets/shishamo.jpeg"

function App() {
  return (
    <>
      <Gig 
          artist="Claude Debussy"
          image={claudeDebussy}
          eventdescription="Finally in concert for the first time this century!"
          date="April 1st, 2024"
          location="Paris, France"
          />
      <Gig 
          artist="SHISAMO"
          image={shishamo}
          eventdescription="Get ready for some cute J-Rock."
          date="April 2nd, 2024"
          location="Nippon Budokan"
          />
    </>
  );
}

export default App;
