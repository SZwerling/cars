import { useSelector, useDispatch } from "react-redux";
import { changeName, removeCar } from "../store";

function CarList() {
   const dispatch = useDispatch();

   const { cars, name } = useSelector(({ form, cars: {list, searchTerm}}) => {
    //filtering logic
      const filteredCars = list.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
      return {
        cars: filteredCars,
        name: form.name
      }
   });

 

   const handleCarDelete = (car) => {
      dispatch(removeCar(car.id));
   };

   const renderedList = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
    console.log(bold)
      return (
         <div key={car.id} className={`panel ${bold && 'bold'}`}>
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
