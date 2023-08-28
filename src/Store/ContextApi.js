import { createContext, useEffect, useReducer, useState } from "react";
import { MOVIEDATA } from "../moviesdata";
const INITIALDATA = {
    movies: []
}

const CreateContextApi = createContext(INITIALDATA);

const itemReducer = (state, action) => {
    if (action.type === "MOVIES") {
        return { ...state, movies: action.payload }
    }

    return state;

}


const CreateContextprovider = ({ children }) => {
    const [itemData, dispatchData] = useReducer(itemReducer, INITIALDATA)
    const [isLoad, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true);
        dispatchData({ type: "MOVIES", payload: [...MOVIEDATA] })
    }, [])

    const initialItem = {
        movies: itemData.movies
    }

    return isLoad && <CreateContextApi.Provider value={initialItem}>{children}</CreateContextApi.Provider>
}

export { CreateContextApi, CreateContextprovider };