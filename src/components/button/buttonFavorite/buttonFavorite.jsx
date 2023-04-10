import { useEffect, useState } from 'react';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

export default function ButtonFavorite({className, favorited, ...buttonEvents}) {
    const [isFavorite, setFavorite] = useState(false);

    const handleButton = (onFunction) => {
        return function(e) {
            onFunction([isFavorite, setFavorite], e);
        }
    }

    Object.keys(buttonEvents).forEach((key) => {
        buttonEvents[key] = handleButton(buttonEvents[key]);
    });

    useEffect(() => {
        setFavorite(favorited);
    }, [favorited]);

    return(
        <button className={className} {...buttonEvents}>{(isFavorite) ? <IoHeartSharp/> : <IoHeartOutline/>}</button>
    )
}