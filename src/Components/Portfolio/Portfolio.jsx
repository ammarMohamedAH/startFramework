import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HeaderStar from "../HederStar/HeaderStar";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  return (
      <>
          <Navbar />
          <section className="pb-5 d-flex justify-content-center align-items-center flex-column text-dark portfolio">
          <HeaderStar name={"portfolio component"} cls={"text-dark"}/>
              <div className="container row pb-5 g-4">
                  
                  <div className=" imgHolder col-lg-4 col-md-6 ">
                      <div className="innerPort overflow-hidden  text-white">
                          <div className="overly ">
                          
                          </div>
                          <i className="fa-solid fa-plus"></i>
                      <img src={port1} alt="" className=" img-fluid rounded-3" />
                      </div>
                    </div>
                  <div className=" imgHolder col-lg-4 col-md-6 ">
                      <div className="innerPort overflow-hidden  text-white">
                          <div className="overly ">
                          
                          </div>
                          <i className="fa-solid fa-plus"></i>
                      <img src={port2} alt="" className=" img-fluid rounded-3" />
                      </div>
                    </div>
                  <div className=" imgHolder col-lg-4 col-md-6 ">
                      <div className="innerPort overflow-hidden  text-white">
                          <div className="overly ">
                          
                          </div>
                          <i className="fa-solid fa-plus"></i>
                      <img src={port3} alt="" className=" img-fluid rounded-3" />
                      </div>
                    </div>
                  <div className=" imgHolder col-lg-4 col-md-6 ">
                      <div className="innerPort overflow-hidden  text-white">
                          <div className="overly ">
                          
                          </div>
                          <i className="fa-solid fa-plus"></i>
                      <img src={port1} alt="" className=" img-fluid rounded-3" />
                      </div>
                    </div>
                  <div className=" imgHolder col-lg-4 col-md-6 ">
                      <div className="innerPort overflow-hidden  text-white">
                          <div className="overly ">
                          
                          </div>
                          <i className="fa-solid fa-plus"></i>
                      <img src={port2} alt="" className=" img-fluid rounded-3" />
                      </div>
                    </div>
                  <div className=" imgHolder col-lg-4 col-md-6 ">
                      <div className="innerPort overflow-hidden  text-white">
                          <div className="overly ">
                          
                          </div>
                          <i className="fa-solid fa-plus"></i>
                      <img src={port3} alt="" className=" img-fluid rounded-3" />
                      </div>
                    </div>
                  
                  
                  
                  
                
              </div>
          </section>
          <Footer/>
      </>
  )
}
