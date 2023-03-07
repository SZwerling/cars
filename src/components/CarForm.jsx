import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm(){
    const dispatch = useDispatch();
    const {name, cost} = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    })

    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value))
    }
    const handleCostChange = (e) => {
        const carCost = parseFloat(e.target.value) || 0;
        dispatch(changeCost(carCost))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addCar({name, cost}))
        dispatch(changeCost(0))
        dispatch(changeName(''))
    }

    return(
        <div className="car-form panel">
            <h3 className="subtitle is-3">add car</h3>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">name</label>
                        <input className="input is-expanded" value={name} onChange={handleNameChange} type="text" />
                    </div>
                    <div className="field">
                        <label className="label">cost</label>
                        <input className="input is-expanded" value={cost || ''} onChange={handleCostChange} type="number" />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">submit</button>
                </div>
            </form>
        </div>
    )
}

export default CarForm;