import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BoardImage } from './assets';
import Awnser from './components/Awnser';
import Crosses from './components/Crosses';
import ScorePanel from './components/ScorePanel';
import { questions } from './data';
import { selectTeam } from './reduxState/TeamSlice';

function Board(props?: any) {
    /**
     * Setters
     */
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const team1Selector = useSelector(selectTeam(0));
    const team2Selector = useSelector(selectTeam(1));
    /**
     *
     *  Listeners & effects
     */
    const onKeyDownHandler: any = (ev: KeyboardEvent) => {
        switch (ev.key.toLocaleLowerCase()) {
            case 'r':
                console.log('reset');
                setCurrentQuestionIndex(0);
                break;
            case 'l':
                console.log('next qestion');
                currentQuestionIndex !== Awnser.length
                    ? setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
                    : console.log('nope');

                console.log(`now current index is ${currentQuestionIndex}`);
                break;

            case 'j':
                console.log('previous question');
                currentQuestionIndex !== 0
                    ? setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
                    : console.log('nope');
                console.log(`now current index is ${currentQuestionIndex}`);
                break;
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', onKeyDownHandler);
        return () => {
            window.removeEventListener('keydown', onKeyDownHandler);
        };
    }, []);

    /**
     * Board
     */
    return (
        <>
            <div
                className="BoardActive"
                style={{ backgroundImage: `url(${BoardImage})` }}
            >
                <div className="ScoreBoard">
                    <ScorePanel key="1" Score={team1Selector.score} />
                    <ScorePanel key="2" Score={0} />
                    <ScorePanel key="3" Score={team2Selector.score} />
                </div>

                <div className="AwnserGrid">
                    {questions[currentQuestionIndex].answers.map((answer) => {
                        return (
                            <Awnser
                                key={answer.title}
                                Title={answer.title}
                                Score={answer.score}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="Naviguation">
                <Crosses Team={team1Selector} />

                <div className="Question">
                    <span>{questions[currentQuestionIndex].title}</span>
                </div>

                <Crosses Team={team2Selector} />
            </div>
        </>
    );
}

export default Board;
