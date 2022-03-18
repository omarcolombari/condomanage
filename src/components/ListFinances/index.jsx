import { useFinances } from "../../providers/Finance";

const ListFinances = () => {
  const { newFinances } = useFinances();

  return (
    <div>
      {newFinances.length > 0 ? (
        <div>
          {newFinances.map((finance, index) => (
            <li key={index}>
              <p>{finance.name}</p>
              <p>{finance.value}</p>
              <p>{finance.status}</p>
            </li>
          ))}
        </div>
      ) : (
        <h1>Lista vazia</h1>
      )}
    </div>
  );
};

export default ListFinances;
