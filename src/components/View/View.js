import "./View.css";
import React from "react";

const View = ({data, suggest}) =>{
    console.log(data)
    return (
        <div className="page-section">
            <div className="section-title">
                <h2>{suggest}  </h2>
            </div>
            {data.length > 0 && 
                <div className="container-fluid">

                    <div className="row">
                        
                        {

                            data.map((items, indx) =>{
                                return (
                                    items.userSuggest === suggest && 
                                    <div className="col owl" key={items.id}>
                                        <div className="card">
                                           <a href="#"><img
                                                src={items.movieImg}
                                                className="d-block w-100"
                                                alt="..."
                                            /></a>
                                            <div className="card-body">
                                               <a href="#"><h2 className="name">{items.movieName}</h2></a> 
                                                <h6 className="des">{items.details}</h6>
                                                <a href="#"><button className="watchlist-btn">add  watchlist</button></a> 
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

export default View;