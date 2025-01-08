import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HeaderStar from "../HederStar/HeaderStar";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  
  let imgLink = "";
  function display(e) {
    imgLink = e.target.nextElementSibling.nextElementSibling.src;
    document.getElementById("open").classList.remove("d-none");
    document.getElementById("imgOpen").src = imgLink;

    
  }

  function close(e){

    if(e.target.id !== "imgOpen"){
      document.getElementById("open").classList.add("d-none");
    }
    

  }

  return (
      <>
          <Navbar />
      <section className="pb-5 d-flex justify-content-center align-items-center flex-column text-dark portfolio">
        <div id={"open"} className="open w-100 h-100  position-fixed top-0 start-0 d-none d-flex justify-content-center align-items-center" onClick={function(e){close(e)}}>  
          <div className="container d-flex justify-content-center align-items-center">
          <img id={"imgOpen"} className="img-fluid " /> 
          </div>
        </div>

          <HeaderStar name={"portfolio component"} cls={"text-dark"}/>
              <div className="container row pb-5 g-4">
                  
                  <div className=" imgHolder col-lg-4 col-md-6 " onClick={function(e){display(e)}}>
                      <div className="innerPort overflow-hidden  text-white">
                          <div className="overly ">
                          </div>
                          <i className="fa-solid fa-plus"></i>
                      <img src={port1} id={"img"}  className=" img-fluid rounded-3" />
                      </div>
                    </div>
                  <div className=" imgHolder col-lg-4 col-md-6 " onClick={function(e){display(e)}}>
                      <div className="innerPort overflow-hidden  text-white">
                          <div className="overly ">
                          </div>
                          <i className="fa-solid fa-plus"></i>
                      <img src={port2} id={"img"}  className=" img-fluid rounded-3" />
                      </div>
                    </div>
                  <div className=" imgHolder col-lg-4 col-md-6 " onClick={function(e){display(e)}}>
                      <div className="innerPort overflow-hidden  text-white">
                          <div className="overly ">
                          </div>
                          <i className="fa-solid fa-plus"></i>
                      <img src={port3} id={"img"}  className=" img-fluid rounded-3" />
                      </div>
                    </div>
                  <div className=" imgHolder col-lg-4 col-md-6 " onClick={function(e){display(e)}}>
                      <div className="innerPort overflow-hidden  text-white">
                          <div className="overly ">
                          </div>
                          <i className="fa-solid fa-plus"></i>
                      <img src={port1} id={"img"}  className=" img-fluid rounded-3" />
                      </div>
                    </div>
                  <div className=" imgHolder col-lg-4 col-md-6 " onClick={function(e){display(e)}}>
                      <div className="innerPort overflow-hidden  text-white">
                          <div className="overly ">
                          </div>
                          <i className="fa-solid fa-plus"></i>
                      <img src={port2} id={"img"}  className=" img-fluid rounded-3" />
                      </div>
                    </div>
                  <div className=" imgHolder col-lg-4 col-md-6 " onClick={function(e){display(e)}}>
                      <div className="innerPort overflow-hidden  text-white">
                          <div className="overly ">
                          </div>
                          <i className="fa-solid fa-plus"></i>
                      <img src={port3} id={"img"}  className=" img-fluid rounded-3" />
                      </div>
                    </div>
                  
              </div>
          </section>
          <Footer/>
      </>
  )
}
