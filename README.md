# Отличие управляемых и неуправляемых компонентов в React
<b> Управляемые компоненты </b> - компоненты, состояние которых устанавливается с помощью пропсов
и изменяется при вызове колбэков, таких как например onChange. Родительский компонент
может участвовать в управлении дочернего компонента за счет передачи начального состояния,
а также с помощью реализации функции изменения состояния.


Изменение состояния компонента происходит по следующему алгоритму:


![state_flow](https://github.com/user-attachments/assets/c0faef82-10eb-4085-8c91-c35e4ad93ec6)


На первом этапе пользователь изменяет значение элемента, далее измененное значение передается обработчику события,
Обработчик события изменяет состоние компонента и далее происходит перерендеринг компонента с обновленным состоянием.


<b>Неуправляемые компоненты</b> - это компоненты, которые не используют состояние React для хранения данных и обрабатываются DOM. Для получения значений из неуправляемых компонентов в React можно использовать ref или DOM API.


<b>Преимущества контролируемых компонентов</b>  над неконтролируемыми:
* Согласованность компонентов интерфейса и состоянием компонента;
* Возможность изменения состояния компонента из родительского компонента.
* Удобство создания сложных полей, т.к. проще контролировать каждый символ. например, может быть полезно в поле ввода номера телефона

<b>Преимущества неконтролируемых компонентов</b> над контролируемыми:
* Отсутствие рендеринга родительского компонента
при изменении состоянии дочернего компонента,
которое не влияет на состояние родительского компонента
* Простая логика
