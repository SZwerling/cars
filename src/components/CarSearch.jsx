import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {
    const dispatch = useDispatch()
    const handleSearchTermChange = (e) => {
        dispatch(changeSearchTerm(e.target.value))
    }
    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm
    })
   
   return (
      <div className="list-header">
         <h3 className="title is-3">My Cars</h3>
         <div className="search field is-horizonatl">
            <label className="label">Search</label>
            <input
               onChange={handleSearchTermChange}
               className="input"
               value={searchTerm}
               type="text"
            />
         </div>
      </div>
   );
}

export default CarSearch;
