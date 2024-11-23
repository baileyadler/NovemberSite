let userWelcome = alert("Welcome! You are invited!!"); //pops up first for users to read
let userName = prompt("name of your best friend"); //writes the name of who is being celebrated
let userQuest = prompt("special occasion"); //writes a special occasion or type of celebration
let userDate = prompt("date for tomorrow?"); //writes the date of when the celebration is 
let userFood = prompt("favorite food"); //writes what food can be brought to the celebration
let userPlace = prompt("restaurant"); //writes where the celebration is taking place
let userTravel = prompt("mode of transportation"); //writes how people will get to the celebration
let userGift = prompt("birthday gift"); //writes what gifts to bring to the celebration
let userDessert = prompt("birthday dessert"); //writes the dessert being served at the celebration
let userHouse = prompt("what is your address"); //writes where to meet up before the celebration
let userTime = prompt("pick a time");//writes when the celebration is happening
console.log(userName);

let myStory = ` <p> Hello! You are invited to <b>${userName}'s </b> Birthday party on <b>${userDate}.</b> Feel free to bring <b>${userFood} </b> to the <b>${userQuest}. </b>
Have fun celebrating <b>${userName}</b> at <b>${userPlace}.</b></p>

<p> Make sure to arrive early to <b>${userPlace}. </b> At 6pm, you will leave <b>${userPlace}, </b> and travel on a <b>${userTravel}</b> to get dessert.
 After getting icecream, <b>${userName} </b> will open up her gifts and hopes to receive <b>${userGift}.</b>
When we get back to <b>${userName}'s </b> house, we will sing "HAPPY BIRTHDAY!!" and eat <b>${userDessert}</b> together. </p>

<p> So please join us on <b>${userDate} </b>to celebrate <b>${userName}!</b> Please meet us at <b>${userHouse}</b> at <b>${userTime}</b> to take pictures before dinner.

</p> `; //the paragraphs/story are written up above and will change based on input

console.log(myStory);

document.getElementById("story").innerHTML = myStory;
