const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Ingredientes: {ingredients.join(", ")}</p>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <div className="card-buttons">
          <button className="btn btn-primary">Ver más</button>
          <button className="btn btn-success">Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
