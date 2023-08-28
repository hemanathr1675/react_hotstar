import "./Search.css"
import React from "react";

const Navbar = () => {
    return (
        <div className="container" style={{ paddingTop: '2%', marginLeft: '35px' }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand searchbox" href="#"><i className="fa fa-search"></i></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li>
                            <input className="boxinput rounded" type="search" placeholder="Movies, shows and more" aria-label="Search" />
                        </li>
                    </ul>
                </div>
            </nav>
            <br />
        </div>
    );
};


const Search = ({ data, suggest }) => {
    console.log(data)
    return (
        <div className="page-section">
            <div className="section-title ">
                <h2>{suggest} searches</h2>
            </div>
            {data.length > 0 &&
                <div className="container-fluid">

                    <div className="row">

                        {

                            data.map((items, indx) => {
                                return (
                                    items.userSuggest === suggest &&
                                    <div className="col owl" key={items.id}>
                                        <div className="card">
                                            <img
                                                src={items.movieImg}
                                                className="d-block w-100"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <a href="#"> <h2 className="name">{items.movieName}</h2></a>
                                                <h6 className="des">{items.details}</h6>
                                                <a href="#"> <button className="watchlist-btn">add  watchlist</button></a>
                                            </div>
                                        </div>

                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}



const Search1 = ({ data, suggest }) => {
    console.log(data)
    return (
        <div className="page-section">
            <div className="section-title">
                <h2>{suggest} </h2>
            </div>
            {data.length > 0 &&
                <div className="container-fluid">

                    <div className="row">

                        {

                            data.map((items, indx) => {
                                return (
                                    items.userSuggest === suggest &&
                                    <div className="col owl" key={items.id}>
                                        <div className="card">
                                            <img
                                                src={items.movieImg}
                                                className="d-block w-100"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <h2 className="name">{items.movieName}</h2>
                                                <h6 className="des">{items.details}</h6>
                                                <button className="watchlist-btn">add  watchlist</button>
                                            </div>
                                        </div>

                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}


export { Navbar, Search, Search1 };
