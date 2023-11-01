let username = prompt('What is your name?')

let greeting = document.getElementById('greeting')

greeting.innerHTML = `Welcome back, ${username}!`;