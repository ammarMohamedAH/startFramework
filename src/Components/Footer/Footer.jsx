

function Footer() {
  return (
      <footer className="mainBanck text-center text-white">
          <div className="container">
          <div className="row  text-center g-5">
          <div className="col-md-4">
                  <div className="inner my-5">
                      <h3>LOCATION</h3>
              <p>2215 John Daniel Drive Clark, MO 65243</p>
              </div>
          </div>
          <div className="col-md-4">
                  <div className="inner my-5">
                  <h3>AROUND THE WEB</h3>
                          <div className="footerIcons d-flex justify-content-center align-items-center ">
                                <div className="icon ms-4 "><i className="fab fa-facebook-f"></i></div>
                                <div className="icon ms-4 "><i className="fab fa-twitter"></i></div>
                                <div className="icon ms-4 "><i className="fab fa-linkedin-in"></i></div>
                                <div className="icon ms-4 "><i className="fab fa-dribbble"></i></div>
                  </div>
              </div>
          </div>
          <div className="col-md-4">
                  <div className="inner my-5">
                  <h3>ABOUT FREELANCER</h3>
                  <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
          </div>
          </div>
          </div>
          <div className="repon py-4">Copyright © Your Website 2021</div>
      </footer>
  )
}

export default Footer