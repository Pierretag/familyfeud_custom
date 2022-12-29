import { useSelector } from 'react-redux';
import { GreyCrossImage, RedCrossImage } from '../assets';
import { useAppDispatch } from '../reduxState/Store';
import { Team, StrikesIncrement, selectTeam } from '../reduxState/TeamSlice';

function Crosses(props: { Team: Team }) {
    const id: number = props.Team.id;
    const team = useSelector(selectTeam(id));
    const dispatch = useAppDispatch();
    const updateState = () => {
        dispatch(StrikesIncrement(id));
    };

    return (
        <>
            <div>
                {[0, 1, 2].map((crossNumber) => {
                    return (
                        <img
                            src={
                                crossNumber >= team.strikes
                                    ? GreyCrossImage
                                    : RedCrossImage
                            }
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
