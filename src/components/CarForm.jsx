import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

function CarForm(){
    const dispatch = useDispatch();
    const name = useSelector((state) => {
        console.log(state)
        return state.form.name
        
    })
    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value))
    }

    return(
        <div className="car-form panel">
            <h3 className="subtitle is-3">add car</h3>
            <form>
                <div className="field-group">
                    <div className="field">
                        <label className="label">name</label>
                        <input className="input is-expanded" value={name} onChange={handleNameChange} type="text" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CarForm;