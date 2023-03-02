function greeting (greetingHandler, name){
    greetingHandler(name);
}
// const name = "Humaion Kobir";
// const number = [45, 85, 87];
// const laptop = {price: 45000, brand: 'dell', genaration: 10};
// greeting(laptop);

function greetingHandler(name){
    console.log('good morning', name)
}

function greetEvening(name){
    console.log('Good Evening', name);
}
function greetNight(name){
    console.log('Good Night', name);
}
greeting(greetingHandler, 'Humaion Kobir');
greeting(greetingHandler, 'Tanvir islam');
greeting(greetEvening, 'Prince mahmud');
greeting(greetNight, 'Limon mahmud');