const countryButtonElement = document.querySelector("button");
countryButtonElement.addEventListener("click", function (amebo) {
  const randomIndex = Math.floor(Math.random() * countryWithImages.length);
  const randomIndex1 = Math.floor(Math.random() * countryWithImages.length);
  const randomIndex2 = Math.floor(Math.random() * countryWithImages.length);
  const randomIndex3 = Math.floor(Math.random() * countryWithImages.length);
  const selectedCountry = countryWithImages[randomIndex];
  window.selectedCountry = selectedCountry;
  const selectedCountry1 = countryWithImages[randomIndex1];
  const selectedCountry2 = countryWithImages[randomIndex2];
  const selectedCountry3 = countryWithImages[randomIndex3];
  const countries = [
    selectedCountry,
    selectedCountry1,
    selectedCountry2,
    selectedCountry3,
  ];
  let options = document.getElementById("options");
  let verified = document.getElementById("answer");
  verified.innerHTML = "";
  let seconds;
  let intervaliId;
  const gameDuration = 49;
  function startTimer(seconds) {
      intervalId = setInterval(countDown, 1000);
      function countDown() {
          document.getElementById("timer").innerHTML = `Time: ${seconds}`;
          if (seconds === 0) {
              clearInterval(intervalId);
              finishGame();
            } else if (seconds === 10) {
                document.getElementById("timer").style.color = "red";
                document.getElementById("timer").classList.add("flashing");
                { seconds = seconds -= 1;
                }
            } else {
                seconds = seconds -= 1;
            }
        }
    }
    options.innerHTML = "";
    for (let i = 0; i < countries.length; ) {
        const countryIndex = Math.floor(Math.random() * countries.length);
        const randomccountry = countries[countryIndex];
        options.innerHTML += ` <div>
        <input id="firstOption${countries.length}" onclick="verifyOption(this)" type="radio" name="country" value="${randomccountry.name}"/>
        <label for="firstOption${countries.length}">${randomccountry.name}</label>
        </div>`;
        countries.splice(countryIndex, 1);
        startTimer(gameDuration);
    }

document
.querySelector("img")
.setAttribute("src", `https:${selectedCountry.file_url}`);

});

const verifyOption = (element) => {
    let verified = document.getElementById("answer");
    if (element.value === window.selectedCountry.name) {
        verified.innerHTML = "CORRECT";
        verified.style.color = "green";
    } else {
        verified.innerHTML = "WRONG";
        verified.style.color = "red";
    }
};
