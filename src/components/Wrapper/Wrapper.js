import { Outlet } from "react-router";
import Header from "../Header/Header";
import { CreateContextprovider } from "../../Store/ContextApi";

const Wrapper= () => {

    return(
        <CreateContextprovider>
            <Header />
            <Outlet />
        </CreateContextprovider>
    )

}
export default Wrapper;
