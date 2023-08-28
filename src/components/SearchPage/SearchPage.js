import "./SearchPage.css";
import { Navbar, Search, Search1 } from "../Search/Search";
import { useContext } from "react";
import { CreateContextApi } from "../../Store/ContextApi";

const SearchPage = () => {
    const contextApi = useContext(CreateContextApi);


    return (
        <div className="page-wrapper">
            <Navbar />
            <Search data={contextApi.movies} suggest="popular " />
            <Search1 data={contextApi.movies} suggest=" " />
            <Search1 data={contextApi.movies} suggest=" " />
        </div>
    )
}

export default SearchPage;