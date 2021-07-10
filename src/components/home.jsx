import Header from "./header";
import Hotels from "./front";
import Slider from "./slider";

function  Home() {
    return(
        <div>
            <Header/>
            <Slider/>
            <div className='container-fluid'></div>
            <div className="row " >
               
                    <div className="col-md-4 d-flex">                  
                        <input type="text" className="form-control" placeholder="Search by Name" style={{width:"210px"}}/>
                        <button className="btn btn-dark mx-1" >Search</button>
                    </div>
                   
                    <div className="col-md-4 d-flex">
                        <input type="text" className="form-control" placeholder="Search by Price" style={{width:"210px"}}/>
                        <button className="btn btn-dark mx-1">Search</button>
                    </div>
                    
                    <div className="col-md-4 d-flex">
                        <input type="text" className="form-control" placeholder="Search by Rooms" style={{width:"210px"}}/>
                        <button className="btn btn-dark mx-1">Search</button>
                    </div>
                </div>
            <Hotels/>
        </div>
    )
}
export default Home