import "./Movieslist.css";

const Movieslist = ({ data, suggest }) => {
    console.log(data)
    return (
        <div className="page-section">
            <div className="section-title">
                <h2>{suggest} Videos </h2>
                <a href="/View" style={{ marginLeft: "800px" }}><h2>View all {'>'} </h2></a>
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
                                            <a href="#"><img
                                                src={items.movieImg}
                                                className="d-block w-100"
                                                alt="..."
                                            /></a>
                                            <div className="card-body">
                                                <a href="/Movie"><h2 className="name">{items.movieName}</h2></a>
                                                <h6 className="des">{items.details}</h6>
                                                <a href="/Movie"><button className="watchlist-btn">add  watchlist</button></a>
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