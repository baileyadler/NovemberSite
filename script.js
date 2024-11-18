let userWelcome = alert('Welcome and enjoy this activity')
let userName = prompt('name of your best friend')
let userQuest = prompt('special occasion')
let userDate = prompt('date for tomorrow?')
let userFood = prompt('favorite food')
let userPlace =prompt('restaurant')
console.log(userName)

let myStory = ` <p> Hello! You are invited to ${userName}'s Birthday party on ${userDate}. Feel free to bring ${userFood} for the ${userQuest}. Have fun celebrating ${userName} at ${userPlace}.</p>

<p> Make sure to arrive early to ${userPlace}. </p> `
console.log(myStory)

document.getElementById('story').innerHTML = myStory

