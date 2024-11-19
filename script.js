let userWelcome = alert("Welcome! You are invited!!");
let userName = prompt("name of your best friend");
let userQuest = prompt("special occasion");
let userDate = prompt("date for tomorrow?");
let userFood = prompt("favorite food");
let userPlace = prompt("restaurant");
let userTravel = prompt("mode of transportation");
let userGift = prompt("birthday gift");
let userDessert = prompt("birthday dessert");
let userHouse = prompt("what is your address");
let userTime = prompt("pick a time");
console.log(userName);

let myStory = ` <p> Hello! You are invited to <b>${userName}'s </b> Birthday party on <b>${userDate}.</b> Feel free to bring <b>${userFood} </b> to the <b>${userQuest}. </b>
Have fun celebrating <b>${userName}</b> at ${userPlace}.</p>

<p> Make sure to arrive early to <b>${userPlace}. </b> At 6pm, you will leave <b>${userPlace}, </b> and travel on a <b>${userTravel}</b> to get dessert.
 After getting icecream, <b>${userName} </b> will open up her gifts and hopes to receive <b>${userGift}.</b>
When we get back to <b>${userName}'s </b> house, we will sing "HAPPY BIRTHDAY!!" and eat <b>${userDessert}</b> together. </p>

<p> So please join us on <b>${userDate} </b>to celebrate <b>${userName}!</b> Please meet us at <b>${userHouse}</b> at <b>${userTime}</b> to take pictures before dinner.

</p> `;

console.log(myStory);

document.getElementById("story").innerHTML = myStory;
