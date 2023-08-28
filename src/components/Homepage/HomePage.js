import "./HomePage.css";
import React from "react";
import Banner from "../Banner/Banner";
import Movieslist from "../Movieslist/Movieslist";
/*import VideoCardContainer from '../VideoCardContainer';*/
import { useContext } from "react";
import { CreateContextApi } from "../../Store/ContextApi";

const HomePage = () => {
    const contextApi = useContext(CreateContextApi);


    return (
        <div className="page-wrapper">
            <Banner />
            <Movieslist data={contextApi.movies} suggest="trending" />
            <Movieslist data={contextApi.movies} suggest="recommended" />
            <Movieslist data={contextApi.movies} suggest="popular" />

        </div>
    )
}

export default HomePage;