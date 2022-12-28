import React, { useEffect, useState } from 'react';
import { BoardImage } from './assets';
import Awnser from './components/Awnser';
import Crosses from './components/Crosses';
import ScorePanel from './components/ScorePanel';
import { questions } from './data';

function Board(props?: any) {
    /**
     * Setters
     */
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [teams, setTeams]: [Team[], (teams: Team[]) => void] = useState([
        {
            id: 1,
            currentScore: 0,
            strikes: 0,
        },
        {
            id: 2,
            currentScore: 0,
            strikes: 0,
        },
    ]);

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
                    <ScorePanel key="1" Score={teams[0].currentScore} />
                    <ScorePanel key="2" Score={0} />
                    <ScorePanel key="3" Score={teams[1].currentScore} />
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
                <Crosses Team={teams[0]} />

                <div className="Question">
                    <span>Quelle est la taille ?</span>
                </div>

                <Crosses Team={teams[1]} />
            </div>
        </>
    );
}

export default Board;
export interface Team {
    id: number;
    currentScore: number;
    strikes: number;
}
