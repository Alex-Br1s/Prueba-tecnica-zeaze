import '../styles/photographer.css'
import photographer1 from '../imgs/photographer-1.webp'
import photographer2 from '../imgs/photographer-2.webp'
import photographer3 from '../imgs/photographer-3.webp'
import photographer4 from '../imgs/photographer-4.webp'


const Photographer = () => {
  return (
    <section>
        <h1 className='my-5 fs-2' style={{marginLeft: '55px'}}>Fotógrafos destacados</h1>
        {/* Fotografo-1 */}
      <main className='d-flex gap-4 my-5 mx-3 photographer-customer'>
        <aside>
          <div className='d-flex flex-column text-center bg-white shadow rounded-2 text-secondary' style={{height: '290px', width: '270px'}}>
            <img src={photographer1} alt="Paula Pérez" className='rounded-circle m-auto mt-4 mb-1' style={{width: '80px', height: '80px', objectFit: 'cover'}} />
            <p className='mb-0 fs-5 text-black fw-semibold'>Paula Pérez</p>
            <p className='mb-0'><span><i className="bi bi-pin-map"></i></span>{" "}Buenos Aires, CABA</p>
            <p className='mb-0'><span><i className="bi bi-stars"></i></span>{" "}Tienda de mascotas</p>
            <div className='d-flex justify-content-center gap-2' style={{color: '#D63415'}}>
                <p><i className="bi bi-star-fill"></i></p>
                <p><i className="bi bi-star-fill"></i></p>
                <p><i className="bi bi-star-fill"></i></p>
                <p><i className="bi bi-star-half"></i></p>
                <p><i className="bi bi-star"></i></p>
            </div>
            <p className='border border-2 rounded-2 m-auto p-1' style={{width: '115px'}}><span><i className="bi bi-eye"></i></span>{" "}Conectar</p>
          </div>
        </aside>
        {/* Fotografo-2 */}
        <aside>
          <div className='d-flex flex-column text-center bg-white shadow rounded-2 text-secondary' style={{height: '290px', width: '270px'}}>
            <img src={photographer2} alt="Paula Pérez" className='rounded-circle m-auto mt-4 mb-1' style={{width: '80px', height: '80px', objectFit: 'cover'}} />
            <p className='mb-0 fs-5 text-black fw-semibold'>Pedro Fuentes</p>
            <p className='mb-0'><span><i className="bi bi-pin-map"></i></span>{" "}Buenos Aires, CABA</p>
            <p className='mb-0'><span><i className="bi bi-stars"></i></span>{" "}Eventos</p>
            <div className='d-flex justify-content-center gap-2' style={{color: '#D63415'}}>
                <p><i className="bi bi-star-fill"></i></p>
                <p><i className="bi bi-star-fill"></i></p>
                <p><i className="bi bi-star-fill"></i></p>
                <p><i className="bi bi-star-half"></i></p>
                <p><i className="bi bi-star"></i></p>
            </div>
            <p className='border border-2 rounded-2 m-auto p-1' style={{width: '115px'}}><span><i className="bi bi-eye"></i></span>{" "}Conectar</p>
          </div>
        </aside>
        {/* Fotografo-3 */}
        <aside>
          <div className='d-flex flex-column text-center bg-white shadow rounded-2 text-secondary' style={{height: '290px', width: '270px'}}>
            <img src={photographer3} alt="Paula Pérez" className='rounded-circle m-auto mt-4 mb-1' style={{width: '80px', height: '80px', objectFit: 'cover'}} />
            <p className='mb-0 fs-5 text-black fw-semibold'>Patricio Funes</p>
            <p className='mb-0'><span><i className="bi bi-pin-map"></i></span>{" "}Buenos Aires, CABA</p>
            <p className='mb-0'><span><i className="bi bi-stars"></i></span>{" "}Fundación rescate</p>
            <div className='d-flex justify-content-center gap-2' style={{color: '#D63415'}}>
                <p><i className="bi bi-star-fill"></i></p>
                <p><i className="bi bi-star-fill"></i></p>
                <p><i className="bi bi-star-fill"></i></p>
                <p><i className="bi bi-star-half"></i></p>
                <p><i className="bi bi-star"></i></p>
            </div>
            <p className='border border-2 rounded-2 m-auto p-1' style={{width: '115px'}}><span><i className="bi bi-eye"></i></span>{" "}Conectar</p>
          </div>
        </aside>
        {/* Fotografo-4 */}
        <aside>
          <div className='d-flex flex-column text-center bg-white shadow rounded-2 text-secondary' style={{height: '290px', width: '270px'}}>
            <img src={photographer4} alt="Paula Pérez" className='rounded-circle m-auto mt-4 mb-1' style={{width: '80px', height: '80px', objectFit: 'cover'}} />
            <p className='mb-0 fs-5 text-black fw-semibold'>Macarena Ramirez</p>
            <p className='mb-0'><span><i className="bi bi-pin-map"></i></span>{" "}La Plata, GBA</p>
            <p className='mb-0'><span><i className="bi bi-stars"></i></span>{" "}Bicho feliz fundación</p>
            <div className='d-flex justify-content-center gap-2' style={{color: '#D63415'}}>
                <p><i className="bi bi-star-fill"></i></p>
                <p><i className="bi bi-star-fill"></i></p>
                <p><i className="bi bi-star-fill"></i></p>
                <p><i className="bi bi-star-half"></i></p>
                <p><i className="bi bi-star"></i></p>
            </div>
            <p className='border border-2 rounded-2 m-auto p-1' style={{width: '115px'}}><span><i className="bi bi-eye"></i></span>{" "}Conectar</p>
          </div>
        </aside>
      </main>
    </section>
  )
}

export default Photographer