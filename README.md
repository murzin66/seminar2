# Отличие управляемых и неуправляемых компонентов в React
<b> Управляемые компоненты </b> - компоненты, состояние которых устанавливается с помощью пропсов
и изменяется при вызове колбэков, таких как например onChange. Родительский компонент 
может участвовать в управлении дочернего компонента за счет передачи начального состояния, 
а также с помощью реализации функции изменения состояния.


<b> Неуправляемые компоненты </b> - компоненты, которые содержат в себе установку первоначального состояния, 
могут изменять свое состояние через определенные колбэки и обрабатываются DOM. Доступ к состоянию осуществляется через ref.
