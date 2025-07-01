function ProductCard() {
    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card card col-4 border-black rounded-3 shadow">
                <img src="../src/assets/ghost.png" className="card-img-top" alt="ghost-of-tsushima" />
                <div className="card-body">
                    <h4 className="card-title">Ghost of Tsushima</h4>
                    <p className="card-text pb-2">Ghost of Tsushima è un videogioco d'avventura dinamica e stealth sviluppato da Sucker Punch Productions.</p>
                    <button className="btn mt-4 fw-bold">SCOPRI</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard