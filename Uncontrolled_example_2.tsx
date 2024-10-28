//В данном примере продемонстрирован доступ к полям неуправляемого компонента с помощью DOM
//Создается простая форма, при отправке формы происходит вызов обработчика handleSubmit, через DOM происходит доступ к значению формы, значение вводится в консоль
export function Uncontrolled(){
  function handleSubmit(event){
    event.preventDefault();
    const inputValue = event.target[0].value; // Получаем значение первого поля ввода, пользуемся при этом DOM
    console.log(inputValue); // Выводим значение в консоль
  }
  return (
    <form onSubmit={handleSubmit} className = "uncontrolledForm">
      <h1>Uncontrolled form</h1>
      <input type = "submit" value = "submit"/>
    </form>
  )
}
