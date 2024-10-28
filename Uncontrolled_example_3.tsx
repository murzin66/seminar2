//В данном примере осуществляется доступ к элементам коллекции элементов формы, 
//происходит обращение к элементам формы имеющим имена login и password полученные значения выводятся в консоль
const TextInput = () => {
  
  //функция обработчик отправки формы 
  const onSubmit = (e) => {    
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    // Получаем значения из полей формы
    const login = e.target.elements.login.value; 
    const password = e.target.elements.password.value; 

    // Выводим полученные значения
    console.log('Login:', login);
    console.log('Password:', password); 
  };

  return (
    <form onSubmit={onSubmit}> // вызов функции - обработчика отправки формы
      <input name="login" /> 
      <input name="password" type="password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TextInput;
