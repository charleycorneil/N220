let ticketNum = 3,
  ticketCost = 14;
document.getElementById("ttCost").innerHTML = `Total: $${
  ticketNum * ticketCost
}`;

let bankBalance = 235.87,
  shirt = 35,
  pants = 75,
  shoes = 60;
let balanceAfterOutfit = bankBalance - (shirt + pants + shoes);
document.getElementById(
  "bank"
).innerHTML = `After purchasing the outfit, my bank account balance is $${balanceAfterOutfit.toFixed(
  2
)}`;
document.getElementById("addJacket").innerHTML = `Add Jacket: ${
  balanceAfterOutfit >= 70
}`;

let pizzas = 4,
  slicesPerPizza = 8,
  slicesPerStudent = 2.5;
let totalSlices = pizzas * slicesPerPizza;
document.getElementById("profPizza").innerHTML = `Students: ${Math.floor(
  totalSlices / slicesPerStudent
)}, Rector: ${totalSlices % slicesPerStudent}`;

let totalMealCost = 2 * 12 + 6 + 3 * 1.5;
document.getElementById("Monty").innerHTML = `$${totalMealCost}`;

let week1 = 202.45,
  week2 = 134.97,
  week3 = 256.63,
  week4 = 178.22;
let totalTips = week1 + week2 + week3 + week4;
let avgTips = totalTips / 4;
document.getElementById("tips").innerHTML = `Weekly Tip Average: $${avgTips}`;
