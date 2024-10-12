import '../styles/footer.css'


const Footer = () => {
  return (
    <footer className="d-flex align-items-center justify-content-between px-2 px-md-5 footer-customer">
        <h3 className="d-none d-md-block">LOGO</h3>
        <ul className="list-unstyled d-none d-md-block">
            <li>Inicio</li>
            <li>Quiénes somos</li>
            <li>Mi perfíl</li>
            <li>Mis compras</li>
            <li>Ayuda</li>
        </ul>
        <div className="d-flex d-none d-md-block align-items-center gap-3">
            <p>
              <span>Protegido por </span>
              <span className="text-decoration-underline">reCAPTCHA Privacidad Condiciones</span>
              <i className="bi bi-instagram fs-4 mx-3 "></i>
              <i className="bi bi-facebook fs-4"></i>
            </p>
        </div>

        <div className="d-md-none text-left">
        <p>
          <span className="text-decoration-underline text-black">Cómo cuidamos tu privacidad</span> 
          <span className="text-decoration-none text-secondary"> Copyright <i className="bi bi-c-circle"></i> 1999-2024 Photeala S.R.L</span>
        </p>

          <p>
            <span className='text-secondary'>Protegido por </span>
            <span className="text-black text-decoration-underline">reCAPTCHA Privacidad Condiciones</span></p>
        </div>

    </footer>
  )
}

export default Footer