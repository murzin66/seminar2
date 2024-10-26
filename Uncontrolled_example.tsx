//В данном примере используется хук useRef
//inputRef хранит ссылку на элемент, к которому необходимо сделать привязку
//Получить текущее значение можно с помощью inputRef.current
//При нажатии на кнопку происходит вывод в консоль строки, которая была введена в текстовое поле

import {React, useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  return (
    <div className="App">
      <h3>Uncontrolled Component</h3>
      <input type="text" name="name" ref={inputRef} />
      <button onClick={() => console.log(inputRef.current.value)}>Get Value</button>
    </div>
  );
}