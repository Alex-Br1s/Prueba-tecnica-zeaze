import imageProfile from "../imgs/smart.webp";
import imageBanner from "../imgs/diana-macesanu.webp";

const AlbumFotografo = () => {
  return (
    <section className="text-center position-relative w-100 bg-light">
      <div
        className="position-relative d-inline-block"
        style={{ width: "98%" }}
      >
        <img
          src={imageBanner}
          alt="image-banner"
          className="rounded"
          style={{ width: "100%", height: "150px", objectFit: "cover" }}
        />

        <img
          src={imageProfile}
          alt="image-profile"
          className="rounded-circle position-absolute border border-2 border-white"
          style={{
            objectFit: "cover",
            width: "100px",
            height: "100px",
            bottom: "-50px", 
            left: "50%",
            transform: "translateX(-50%)", 
          }}
        />
      </div>

      <aside className="mt-6" style={{ marginTop: "70px" }}>
        <h3 className="mb-1">Expo mascotas 2024</h3>
        <p className="mt-4 mb-0">
          <span><i className="bi bi-camera text-secondary"></i></span>{" "}
          Juan Bianchi
        </p>
        <p className="text-secondary mb-1">
          <span><i className="bi bi-pin-map"></i></span>{" "}
          Centro de convenciones, Bariloche
        </p>
        <div className="d-flex justify-content-center" style={{ gap: "50px" }}>
          <p className="text-secondary">
            <span><i className="bi bi-copy"></i></span>{" "}
            12 fotos
          </p>
          <p className="text-danger">Exp. 15/06/2024</p>
        </div>
        <div className="d-flex justify-content-center align-items-center" style={{gap: '50px'}}>
          <p className="bg-light d-inline-block px-2"><span><i className="bi bi-star"></i></span>{" "} Calificar</p>
          <p style={{backgroundColor: '#EC3F1E'}} className="px-4 py-2 text-white rounded-1"><span><i className="bi bi-cart2"></i></span>{" "} Agregar todo</p>
        </div>
      </aside>
    </section>
  );
};

export default AlbumFotografo;
