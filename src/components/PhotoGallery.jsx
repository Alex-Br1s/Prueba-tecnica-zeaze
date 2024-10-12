import PropTypes from "prop-types"
import { useState } from "react"


const PhotoGallery = ({ images }) => {
  const [gridColumn, setGridColumn] = useState(4);

  const handleGridChange = (event) => {
    setGridColumn(parseInt(event.target.value));
  };

  const getImageStyle = () => {
    switch (gridColumn) {
      case 4:
        return { width: '100%', height: '200px' }; 
      case 3:
        return { width: '125%', height: '250px' }; 
      case 2:
        return { width: '150%', height: '320px' };
      case 1:
        return { width: '100%', height: 'auto' }; 
      default:
        return { width: '100%', height: '200px' };
    }
  };

  return (
    <section className="bg-light">
      <div className="d-flex justify-content-between align-items-center bg-white px-4 rounded-3 mx-3 mx-md-5">
        <div className="mt-3">
          <p>Seleccionados 0</p>
        </div>

        <select onChange={handleGridChange} className="form-select " style={{ width: '15%' }}>
          <option value="4">||||</option>
          <option value="3">|||</option>
          <option value="2">||</option>
          <option value="1">|</option>
        </select>
      </div>

      <div className={`row row-cols-${gridColumn} g-3 text-center mx-2 mx-md-5 mt-2`}>
        {images.map((img, index) => (
          <div className="col" key={index}>
            <div className="position-relative border border-2 border-light shadow">
              <img
                src={img.url}
                alt=""
                className="img-fluid"
                style={getImageStyle()}
              />
              {!img.acquired && (
              <div>
              <div
                className="position-absolute top-0 start-0 end-0 d-flex align-items-center justify-content-center"
                style={{ height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}
              >
                <span className="text-white">Marca de agua</span>
              </div>
              <div className="position-absolute top-0 end-0 px-2 z-2">
                <span><i className="bi bi-cart2 fs-5 text-white"></i></span>
              </div>
            </div>
            
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

PhotoGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      acquired: PropTypes.bool.isRequired
    })
  ).isRequired
}

export default PhotoGallery