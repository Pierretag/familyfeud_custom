import { useState } from 'react';

function Awnser(props: Props) {
    const title = props.Title;
    const score = props.Score;

    const [isVisible, setIsVisible] = useState(false);

    return isVisible ? (
        <div className="AwnserBox Visible">
            <span>{title}</span>
            <span>{score}</span>
        </div>
    ) : (
        <div
            className="AwnserBox Hidden"
            onClick={() => {
                setIsVisible(true);
            }}
        ></div>
    );
}

export default Awnser;

interface Props {
    Title: string;
    Score: number;
}
