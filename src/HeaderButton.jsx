export default function UtilityButton(props) {
    const task = props.task;
    const optional = props.optParam;
    const char = props.char;

    return (
        <>
            <button className="header-button" onClick={() => task(optional)}>{char}</button>
        </>
    )
}