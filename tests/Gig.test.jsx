import { screen, render } from "@testing-library/react";
import Gig from "../src/components/Gig";
import claudeDebussy from "./assets/Claude-Debussy.webp"
import shishamo from "./assets/shishamo.jpeg"

describe('Gig', () => {
    it('Should render all the bits of the debussy component', () => {
        render (<Gig 
            artist="Claude Debussy"
            image={claudeDebussy}
            altText="debussy"
            eventdescription="Finally in concert for the first time this century!"
            date="April 1st, 2024"
            location="Paris, France"
            />)
        expect(screen.getByRole("heading")).toHaveTextContent('Claude Debussy');
        expect(screen.getByText("Finally in concert for the first time this century!"));
        expect(screen.getByText("April 1st, 2024"));
        expect(screen.getByAltText("debussy"));
        expect(screen.getByText("Paris, France"));
    });
    
    it('Should render all the bits of the shisamo component', () => {
        render (<Gig 
            artist="SHISAMO"
            image={shishamo}
            altText="shishamo"
            eventdescription="Get ready for some cute J-Rock."
            date="April 2nd, 2024"
            location="Nippon Budokan"
            />)
        expect(screen.getByRole("heading")).toHaveTextContent('SHISAMO');
        expect(screen.getByText("Get ready for some cute J-Rock."));
        expect(screen.getByText("April 2nd, 2024"));
        expect(screen.getByAltText("shishamo"));
        expect(screen.getByText("Nippon Budokan"))
    });

});