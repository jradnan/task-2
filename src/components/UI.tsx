import { formData } from "./Form";

const UI = ({data}) => {
  return (
    <div >
        <h1>Data Table</h1>
      {data.map((item: formData) => (
        <div key={item.id}>
          <h1>Name:{item.name}</h1>
          <p>Email:{item.email}</p>
          <h1>Number:{item.number}</h1>
        </div>
      ))}
    </div>
  );
};

export default UI;
