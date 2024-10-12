

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center px-3 px-md-5">
        <div className="navbar-brand px-2 text-light fw-medium fs-4" style={{backgroundColor: '#D63415'}}>LOGO</div>
  
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a className="nav-link text-body-tertiary" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body-tertiary" href="#">Quiénes somos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body-tertiary" href="#">Ayuda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body-tertiary" href="#">Mis compras</a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center ms-auto gap-4">
          <button className="navbar-toggler d-lg-none border-0 bg-transparent p-0" type="button">
            <i className="bi bi-list fs-3 "></i> 
          </button>

          <div className="d-lg-none rounded-5 px-1 " style={{backgroundColor:'#EFAEA1'}}>
            <span className="fw-semibold text-danger">DS</span>
          </div>

          <div className="d-none d-lg-flex align-items-center">
            <p className="rounded-5 text-danger fs-6 ms-3 px-1 mt-3" style={{backgroundColor:'#EFAEA1'}}>DS </p><span className="text-body-tertiary ms-1">Delfina <i className="bi bi-chevron-down"></i></span>
          </div>

          <i className="bi bi-cart2 fs-5 text-body-tertiary"></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar