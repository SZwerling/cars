import { createReducer, createSlice, nanoid } from "@reduxjs/toolkit";


const carSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action){
            //assumes action.payload is an object with name and cost properties
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar(state, action){
            //assumes action.payload is id of car to remove\
            const updated = state.cars.filter((car) => car.id !== action.payload);
            state.cars = updated;
        }
    }
})

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carReducer = carSlice.reducer; 