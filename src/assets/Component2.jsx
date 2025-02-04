import React from 'react';

function Component2() {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ height: "100vh", alignItems: "center" }}>
          
          <div className="col d-block justify-content-center align-items-center">
           
          <iframe id='gify' src="https://giphy.com/embed/8bJcgB2fS3LBjVqqPZ" width="600" height="600" frameborder="2"  className="giphy-embed" allowFullScreen></iframe>
        <br />
        <div className='testdrivebtn'>
          <a href="https://www.bmw-kunexclusive-bengaluru.in/test-drive?model=2-series-2-Gran-Coupe" target="_blank" rel="noopener noreferrer"><button  className='btn btn-success mt-0  ms-4'>Book A Test Drive</button></a>  
          </div>
          </div>
          

          
          <div className="col d-flex flex-column justify-content-center align-items-end" style={{ paddingLeft: "100px", margin: "auto", marginBottom: "350px" ,marginRight:"80px"}}>
            <h1 className="greetings" id="greet">Welcome.</h1>
            <div className="d-flex input-group searching">
              <input
                className="form-control me-0 inpts"
                type="search"
                placeholder="Search Any BMW Cars"
                aria-label="Search"
              />
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-search"></i>
              </span>
            </div>
            <div className="d-flex" style={{ marginTop: "50px", gap: "100px", paddingLeft: "60px" }}>
            <a href="https://www.bmw.in/en/index.html" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary free">Free Trial</button></a>

              <a href="https://shop.bmw.in/#/" target="_blank" rel="noopener noreferrer"> <button className="btn btn-primary see">See More</button></a>
            </div>
          </div>
        </div>
       
      </div>
     
    </>
  );
}

export default Component2;
