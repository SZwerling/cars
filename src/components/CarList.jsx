import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
   const dispatch = useDispatch();

   const cars = useSelector(({ cars: {list, searchTerm}}) => {
    //filtering logic
      return list.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
   });

   const handleCarDelete = (car) => {
      dispatch(removeCar(car.id));
   };

   const renderedList = cars.map((car) => {
      return (
         <div key={car.id} className="panel">
            <p>
               {car.name} - ${car.cost}
            </p>
            <button
               onClick={() => handleCarDelete(car)}
               className="button is-danger"
            >
               delete
            </button>
         </div>
      );
   });

   return (
      <div className="car-list">
         {renderedList}
         <hr />
      </div>
   );
}

export default CarList;
