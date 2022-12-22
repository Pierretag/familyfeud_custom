function Awnser(props: Props) {
    const title = props.Title;
    const score = props.Score;

    return (
        <div className="AnwserBox">
            <span>{title}</span>
            <span>{score}</span>
        </div>
    );
}

export default Awnser;

interface Props {
    Title: string;
    Score: number;
}