let greetingMessage = 'Good Morning!';

let greetPeople = () => console.log(greetingMessage);

let changeGreetingMessage = newMessage => greetingMessage = newMessage;

changeGreetingMessage('Good Evening');
greetPeople();