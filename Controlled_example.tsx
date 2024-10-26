//Пример управляемого компонента
//состояние устанавливается с помощью useState
//в качестве функции колбэка используется setValue,
//в которую передается новое состояние

import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  return (
    <div>
      <h3>Controlled Component</h3>
      <input
        name="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => console.log(value)}>Get Value</button>
    </div>
  );
}

export default App;
