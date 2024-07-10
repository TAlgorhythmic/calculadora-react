export default function OperatorButton(props) {
    const task = props.task;
    const operator = props.operator;

    return (
        <>
            <button className="operator" onClick={() => task(operator)}>{operator}</button>
        </>
    )
}