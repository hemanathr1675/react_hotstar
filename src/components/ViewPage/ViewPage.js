import "./ViewPage.css";
import View from "../View/View";
import { useContext } from "react";
import { CreateContextApi } from "../../Store/ContextApi";

const ViewPage = ()=>{
    const contextApi = useContext(CreateContextApi);


    return (
        <div className="page-wrapper">
            <View data={contextApi.movies} suggest="trending Videos" />
            <View data={contextApi.movies} suggest=" " />
            <View data={contextApi.movies} suggest=" " />
        </div>
    )
}

export default ViewPage;