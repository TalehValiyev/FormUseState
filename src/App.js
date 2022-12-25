import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [Info, setInfo] = useState({
    name: "",
    id: "",
    gender: "",
    age: "",
    email: "",
    tel: "",
    textarea: "",
    isactive: false,
  });

  const { name, id, gender, age, email, tel, textarea, isactive } = Info;

  const getData = (e) => {
    e.preventDefault();

    setInfo({
      ...Info,
      [e.target.name]: e.target.value,
      isactive: true,
    });
  };
  const click = (e) => {
    e.preventDefault();
    console.log(Info);
  };
  return (
    <form>
      <label htmlFor="NameSurname">
        {" "}
        Pasiyentin adi ve soyadi:
        <br />
        <input
          onChange={getData}
          value={name}
          name="name"
          id="nameSurname"
          type="text"
        />
      </label>
      <br />
      <label htmlFor="idNumb">
        {" "}
        Şəxsiyyət vəsiqəsinin seriya və nömrəsi:
        <br />
        <input
          onChange={getData}
          value={id}
          name="id"
          id="idNumb"
          type="text"
        />
      </label>
      <br />
      <label htmlFor="Cinsiyyet">
        Cinsiyyət:
        <br />
        <select name="gender" value={gender} onChange={getData} id="Cinsiyyet">
          <option value="cinsiyeet"></option>
          <option value="Kişi"> Kişi</option>
          <option value="Qadın"> Qadın</option>
        </select>
      </label>
      <br />

      <br />
      <label>
        Yaşı:
        <br />
        <input name="age" value={age} onChange={getData} type="number" />
      </label>
      <br />
      <label>
        Email:
        <br />
        <input value={email} onChange={getData} name="email" type="Email" />
      </label>
      <br />
      <label>
        Telefon:
        <br />
        <input value={tel} onChange={getData} name="tel" type="text" />
        <br />
      </label>
      <br />
      <label htmlFor="textarea">
        Simptomları qeyd edin:
        <br />
        <textarea
          onChange={getData}
          value={textarea}
          name="textarea"
          id="textarea"
        ></textarea>
      </label>
      <br />
      <label htmlFor="">
        Tekrar Qebul:
        <input
          onChange={getData}
          checked={isactive}
          name="checkbox"
          id="checkbox"
          type="checkbox"
        />
      </label>
      <br />
      <br />

      <button onClick={click} name="button" id="btn">
        {" "}
        Əlavə edin
      </button>
    </form>
  );
}

export default App;
