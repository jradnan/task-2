import { FormEvent, useState } from "react";
import UI from "./UI";


export interface formData {
  name: string;
  email: string;
  number: number;
  password: number;
  id: number;
}
const Form = () => {
  const [data, setData] = useState<formData[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const password = form.password.value;
    const id = form.Id.value;
    const dataArray: formData[] = [
      {
        name,
        email,
        number,
        password,
        id,
      },
    ];

    setData(dataArray);
  };
  return (
    <div className="w-64 mx-auto p-8 mt-10 bg-red-300 lg:flex">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="border mb-3 border-black rounded"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </label>
        <br />
        <label>
          <input
            className="border mb-3 border-black rounded"
            type="text"
            name="email"
            placeholder="Enter your email"
            required
          />
        </label>
        <br />
        <label>
          <input
            className="border mb-3 border-black rounded"
            type="text"
            name="number"
            placeholder="Enter your Number"
            required
          />
        </label>
        <br />
        <label>
          <input
            className="border mb-3 border-black rounded"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </label>
        <br />
        <label>
          <input
            className="border mb-3 border-black rounded"
            type="text"
            name="Id"
            placeholder="Enter your id"
            required
          />
        </label>
        <br />

        <div className="px-3 py-2 rounded text-center flex justify-center w-24 bg-teal-950 text-white">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="lg:ml-[120px] bg-orange-300 md:p-10 lg:p-20 p-5">
        <UI data={data}></UI>
      </div>
    </div>
  );
};

export default Form;
