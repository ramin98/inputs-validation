import { useState } from "react";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState({
    login: "",
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleInputs = (ev) => {
    setInputs({ ...inputs, [ev.target.name]: ev.target.value });
    console.log(inputs);
    console.log(loginChecker,nameChecker, surnameChecker, emailChecker, passwordChecker)
  };

  // let loginChecker = /^[a-z][a-z0-9._]{7,}$/;
  // let nameChecker = /^[A-Z][a-z]*$/;
  // let surnameChecker = /^[A-Z][a-z]*$/;
  // let emailChecker = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/;
  // let passwordChecker = /^[A-Z][a-z0-9._]{7,}$/;

  // let loginChecked = loginChecker.test(inputs.login);
  // let nameChecked = nameChecker.test(inputs.name);
  // let surnameChecked = surnameChecker.test(inputs.surname);
  // let emailChecked = emailChecker.test(inputs.email);
  // let passwordChecked = passwordChecker.test(inputs.password);

  let loginChecker = [
    [/^[a-z]/.test(inputs.login), 'FIRST SYBOLS MUST LOWER CASE'],
    [/[a-z0-9._]*/.test(inputs.login), 'MUST BE ONLY WORDS, NUMBRES, . AND _'],
    [/^[a-z][a-z0-9._]{7,}$/.test(inputs.login), 'MORE THAN 8']
  ];
  let nameChecker = [
    [/^[A-Z]/.test(inputs.name),'FIRST SYBOLS MUST UPPER CASE'],
    [/[a-z]*$/.test(inputs.name),'OTHER SYBOLS MUST LOWER CASE'],
  ];
  let surnameChecker = [
    [/^[A-Z]/.test(inputs.surname),'FIRST SYBOLS MUST UPPER CASE'],
    [/[a-z]*$/.test(inputs.surname),'OTHER SYBOLS MUST LOWER CASE'],
  ];
  let emailChecker = [
    [/^[a-zA-Z0-9._]+/.test(inputs.email),'MUST BE ONLY WORDS, NUMBRES, . AND _ '],
    [/@[a-zA-Z0-9.-]+/.test(inputs.email), 'HAVE TO HAS @'],
    [/\.[a-zA-Z]{2,}$/.test(inputs.email), 'MUST BE 2 LETTER AFTER DOT'],
  ];
  let passwordChecker = [
    [/^[A-Z]/.test(inputs.password), 'FIRST SYBOLS MUST UPPER CASE'],
    [/[a-z0-9._]*/.test(inputs.password), 'MUST BE ONLY WORDS, NUMBRES, . AND _'],
    [/^[A-Z][a-z0-9._]{7,}$/.test(inputs.password), 'MORE THAN 8']
  ];


  // const checkValues = () => {
  //   if (
  //     [
  //       loginChecked,
  //       nameChecked,
  //       surnameChecked,
  //       emailChecked,
  //       passwordChecked,
  //     ].every((item) => item)
  //   ) {
  //     console.log(true);
  //     return false;
  //   } else {
  //     console.log(false);
  //     return true;
  //   }
  // };

  const checkValues = () => {
    if (
      [
        loginChecker.every(item => item.includes(true)),
        nameChecker.every(item => item.includes(true)),
        surnameChecker.every(item => item.includes(true)),
        emailChecker.every(item => item.includes(true)),
        passwordChecker.every(item => item.includes(true)),
      ].every(item => item)
    ) {
      return false;
    } else {
      return true;
    }
  };

  let isActive = checkValues();

  return (
    <div>
      <form>
        <input
          onInput={handleInputs}
          type="text"
          name="login"
          placeholder="login"
        />
        <ul>{loginChecker.filter(item => !item[0]).map((item) => {
          return(
            <li>
              {item[1]}
            </li>
          )
        })}</ul>
        <input
          onInput={handleInputs}
          type="text"
          name="name"
          placeholder="name"
        />
        <ul>{nameChecker.filter(item => !item[0]).map((item) => {
          return(
            <li>
              {item[1]}
            </li>
          )
        })}</ul>

        <input
          onInput={handleInputs}
          type="text"
          name="surname"
          placeholder="surname"
        />
       <ul>{surnameChecker.filter(item => !item[0]).map((item) => {
          return(
            <li>
              {item[1]}
            </li>
          )
        })}</ul>

        <input
          onInput={handleInputs}
          type="text"
          name="email"
          placeholder="email"
        />
        <ul>{emailChecker.filter(item => !item[0]).map((item) => {
          return(
            <li>
              {item[1]}
            </li>
          )
        })}</ul>

        <input
          onInput={handleInputs}
          type="text"
          name="password"
          placeholder="password"
        />
        <ul>{passwordChecker.filter(item => !item[0]).map((item) => {
          return(
            <li>
              {item[1]}
            </li>
          )
        })}</ul>

        <button disabled={isActive}>REGISTER</button>
      </form>
      <p>{inputs.login}</p>
      <p>{inputs.name}</p>
      <p>{inputs.surname}</p>
      <p>{inputs.email}</p>
      <p>{inputs.password}</p>
    </div>
  );
}

export default App;
