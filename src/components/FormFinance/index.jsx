const FormFinance = () => {
  return (
    <form>
      <input type="text" placeholder="Descrição" />
      <input type="number" placeholder="Valor   $" />
      <label>
        Categoria
        <select>
          <option value="Entrada de valor">Entrada de valor</option>
          <option value="Despesa">Despesa</option>
        </select>
        <button>Inserir</button>
      </label>
    </form>
  );
};

export default FormFinance;
