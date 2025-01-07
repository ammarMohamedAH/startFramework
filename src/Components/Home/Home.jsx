import avataaars from "../../assets/avataaars.svg";
import Footer from "../Footer/Footer";
import HeaderStar from "../HederStar/HeaderStar";
import Navbar from "../Navbar/Navbar";
// import reactLogo from './assets/react.svg'
export default function Home() {
  return (
      <>
          <Navbar />
          <section className="py-5 home">
          <div className="container align-items-center justify-content-center d-flex flex-column">
                  <div className="homeImg"><img src={avataaars} className=" img-fluid" alt="" /></div>
                  <HeaderStar name={"start Framework"} cls={"text-white"} />
              <div className=" text-uppercase text-center  text-white">
                  
              <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
              
          </div>
          
          </section>
          <Footer />
      </>
  )
}
