import './carousel.css'

function Carousel() {
    return (
        <div className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-caption d-none d-md-block h-75 pt-5">
                        <h1 className="mb-3">Dúvidas</h1>
                        <p className="carousel-text line1">Listamos aqui algumas dúvidas frequentes, </p>
                        <p className="carousel-text">caso a sua dúvida não esteja aqui você pode</p>
                        <p className="carousel-text">entrar em contato <a className="carousel-link" href="#">clicando aqui</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;