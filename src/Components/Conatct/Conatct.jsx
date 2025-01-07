import Footer from "../Footer/Footer";
import HeaderStar from "../HederStar/HeaderStar";
import Navbar from "../Navbar/Navbar";


export default function Conatct() {
  return (
      <>
          <Navbar />
          <HeaderStar name={"conatct section"} cls={"text-dark"} />
          <div className="container py-5 d-flex align-items-center justify-content-center">
              <form className="contact pb-5 w-50">
                  <div className="row g-4">
                  <div className=" col-12">
                  <input type="text" name="userName" id="userName" className="form-control" placeholder="userName" />
                  </div>
                  <div className=" col-12">
                  <input type="number" name="userAge" id="userAge" className="form-control" placeholder="userAge" />
                  </div>
                  <div className=" col-12">
                  <input type="email" name="userMail" id="userMail" className="form-control" placeholder="userMail" />
                  </div>
                  <div className=" col-12">
                  <input type="password" name="userPassword" id="userPassword" className="form-control" placeholder="userPassword" />
                      </div>
                      <div className="col-12">
    <button type="submit" className="btn btn-aqua">Send Message</button>
  </div>
  </div>
                 
          </form>
            </div>
          <Footer />
      </>
  )
}
