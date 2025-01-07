import Footer from "../Footer/Footer";
import HeaderStar from "../HederStar/HeaderStar";
import Navbar from "../Navbar/Navbar";


export default function About() {
  return (
      <><Navbar/>
          <section className="py-5 about">
          <div className="container align-items-center justify-content-center d-flex flex-column  p-5">
              <div className="p-5">
                      <HeaderStar name={"about component"} cls={"text-white"} />
                  <div className="  text-white d-flex justify-content-center align-items-center flex-column">
                      
                      <div className="aboutText row"> 
                          <div className=" col-md-6"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                          <div className=" col-md-6"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>

                      </div>
                 </div>
              </div>
          </div>
          </section>
          <Footer/>
      </>
  )
}
