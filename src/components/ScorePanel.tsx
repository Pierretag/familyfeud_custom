function ScorePanel(props: Score) {
    const score = props.Score;
    return <div className="ScorePanel">{score}</div>;
}

export default ScorePanel;
interface Score {
    Score: number;
}
