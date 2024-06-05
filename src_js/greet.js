function generateGreeting(name) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Guten Morgen " + name;
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Guten Nachmittag " + name;
  } else if (currentHour >= 17 && currentHour < 21) {
    greeting = "Guten Abend " + name;
  } else {
    greeting = "Gute Nacht " + name;
  }

  return greeting;
}

// Set the greeting in the HTML element with the id "greeting"
const name = "Michael"; // Replace with the desired name
const greetingElement = document.getElementById("greeting");
greetingElement.textContent = generateGreeting(name);
