import claudeDebussy from "../assets/Claude-Debussy.webp"
const Gig = () => {
    return (
        <>
        <h3>Claude Debussy</h3>
        <img className="logo" src={claudeDebussy}></img>
        <p className="event-description">Finally in concert for the first time this century!</p>
        <p className="date">April 1st, 2024</p>
        <p className="location">Paris, France</p>
        </>
    
    )
};

export default Gig;