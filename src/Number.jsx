export default function Number(props) {
    const updateFunction = props.updateFunction;
    const value = props.value;
    const numberCompRepresented = props.number;
    return (
        <>
            <button className={numberCompRepresented == "0" ? "zero" : "number"} onClick={() => updateFunction(value + numberCompRepresented)}>{numberCompRepresented}</button>
        </>
    )
}