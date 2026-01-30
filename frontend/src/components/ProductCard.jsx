import { useNavigate } from "react-router-dom";
import "../style/card.css";

function ProductCard(){
    const navigate = useNavigate();

    return (
        <div className="card">
            <img
            src="https://picsum.photos/300/200"
            alt="Producto"
            className="card-image"
            />
            
            <div className="card-body">
                <h2>Producto Prueba</h2>
                <p>Descripción simple del producto de muestra.</p>
                <button
                className="card-button"
                onClick={() => navigate("/form")}>
                    Comprar
                </button>
            </div>
        </div>
    );
}
export default ProductCard;