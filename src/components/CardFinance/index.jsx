const CardFinance = ({ finance }) => {
  return (
    <div id={finance.type} className="boxCard">
      <div className="data">
        <p id="desc">{finance.description}</p>
        <p id="price">
          R$ {Number(finance.value).toFixed(2).replace(".", ",")}
        </p>
        <p id="type">{finance.type}</p>
      </div>
      <button className="remover">Remover</button>
    </div>
  );
};

export default CardFinance;
