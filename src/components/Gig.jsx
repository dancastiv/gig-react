import claudeDebussy from "../assets/Claude-Debussy.webp"
const Gig = (props) => {
    return (
        <>
        <h3 className="artist">{props.artist}</h3>
        <img className="logo" src={props.image} alt={props.altText}></img>
        <p className="event-description">{props.eventdescription}</p>
        <p className="date">{props.date}</p>
        <p className="location">{props.location}</p>
        </>
    
    )
};

export default Gig;