import { useState } from "react";

const Gig = (props) => {
    const [favourite, setFavourite] = useState(false);

    const toggleFavourite = () => {
        if (favourite) {
            setFavourite(false);
        } else {
            setFavourite(true);
        }
        
        console.log(favourite)
    }

    return (
        <>
        <h3 className="artist">{props.artist}</h3>
        <img className="logo" src={props.image} alt={props.altText}></img>
        <p className="event-description">{props.eventdescription}</p>
        <p className="date">{props.date}</p>
        <p className="location">{props.location}</p>
        <button onClick={toggleFavourite}>{favourite ? 'Unfavourite' : 'Favourite'}</button>
        {favourite && <p>Favourited!</p>}
        </>
    
    )
};

export default Gig;