import { useState } from 'react';
import { GreyCrossImage, RedCrossImage } from '../assets';
import { Team } from '../Board';

function Crosses(props: { Team: Team }) {
    const id = props.Team.id;
    const [strikes, setStrikes] = useState(0);

    const updateState = () => {
        if (strikes <= 2) {
            setStrikes(strikes + 1);
        } else {
            setStrikes(0);
        }
    };

    return (
        <>
            <div>
                {[0, 1, 2].map((crossNumber) => {
                    return (
                        <img
                            src={id >= strikes ? GreyCrossImage : RedCrossImage}
                            id={`team${id}cross${crossNumber}`}
                            key={`team${id}cross${crossNumber}`}
                            onClick={updateState}
                            alt={`img team ${id} number ${crossNumber}`}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Crosses;
