

export default function HeaderStar({name,cls}) {
  return (
      <>
          <h2 className={`text-uppercase text-center ${cls} fs-1 fw-bold mt-5`}>{name}</h2>
                      <div className="w-50 mx-auto">
                            <div className={`my-2 homeIcon position-relative text-center ${cls}`}>
                                <i className="fa-solid fa-star "></i>
                            </div>
                        </div>
      </>
  )
}
