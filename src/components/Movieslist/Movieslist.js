import "./Movieslist.css";

const Movieslist = ({data, suggest}) =>{
    console.log(data)
    return (
        <div className="page-section">
            <div className="section-title">
                <h2>{suggest} Videos</h2>
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

export default Movieslist;