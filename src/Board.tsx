import React, { useEffect, useState } from 'react';
import { BoardImage } from './assets';
import Awnser from './components/Awnser';
import Crosses from './components/Crosses';
import ScorePanel from './components/ScorePanel';
import { questions } from './data';

const onKeyDownHandler: any = (ev: KeyboardEvent) => {
    if (ev.key.toLocaleLowerCase() === 'r') {
        console.log('reset');
    } else {
        console.log('press');
    }
};

function Board(props?: any) {
    const [teams, setTeams]: [Team[], (teams: Team[]) => void] = useState([
        {
            id: 1,
            strikes: 0,
            currentScore: 0,
        },
        {
            id: 2,
            strikes: 0,
            currentScore: 0,
        },
    ]);

    useEffect(() => {
        document.addEventListener('keydown', onKeyDownHandler);
    });

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
                    {questions[0].answers.map((answer) => {
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

                <Crosses Team={teams[0]} />
            </div>
        </>
    );
}

export default Board;

export interface Team {
    id: number;
    strikes: number;
    currentScore: number;
}
