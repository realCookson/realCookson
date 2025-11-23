const footballTeam = {
  team: "Poland",
  year: 2025,
  headCoach: "Jan Urban",
  players: [
    { name: "Marcin Bułka", position: "goalkeeper", isCaptain: false },
    { name: "Bartosz Mrozek", position: "goalkeeper", isCaptain: false },
    { name: "Łukasz Skorupski", position: "goalkeeper", isCaptain: false },
    { name: "Mateusz Kochalski", position: "goalkeeper", isCaptain: false },
    { name: "Jakub Kiwior", position: "defender", isCaptain: false },
    { name: "Jan Bednarek", position: "defender", isCaptain: false },
    { name: "Sebastian Walukiewicz", position: "defender", isCaptain: false },
    { name: "Mateusz Skrzypczak", position: "defender", isCaptain: false },
    { name: "Paweł Dawidowicz", position: "defender", isCaptain: false },
    { name: "Mateusz Wieteska", position: "defender", isCaptain: false },
    { name: "Matty Cash", position: "defender", isCaptain: false },
    { name: "Przemysław Frankowski", position: "defender", isCaptain: false },
    { name: "Bartosz Bereszyński", position: "defender", isCaptain: false },
    { name: "Maxi Oyedele", position: "midfielder", isCaptain: false },
    { name: "Bartosz Slisz", position: "midfielder", isCaptain: false },
    { name: "Oskar Repka", position: "midfielder", isCaptain: false },
    { name: "Jakub Moder", position: "midfielder", isCaptain: false },
    { name: "Piotr Zieliński", position: "midfielder", isCaptain: true },
    { name: "Jakub Piotrowski", position: "midfielder", isCaptain: false },
    { name: "Nicola Zalewski", position: "midfielder", isCaptain: false },
    { name: "Sebastian Szymański", position: "midfielder", isCaptain: false },
    { name: "Mateusz Bogusz", position: "midfielder", isCaptain: false },
    { name: "Jakub Kamiński", position: "forward", isCaptain: false },
    { name: "Krzysztof Piątek", position: "forward", isCaptain: false },
    { name: "Adam Buksa", position: "forward", isCaptain: false },
    { name: "Karol Świderski", position: "forward", isCaptain: false },
  ],
};

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");

team.innerText = footballTeam["team"];
year.innerText = footballTeam["year"];
headCoach.innerText = footballTeam["headCoach"];

const playerCards = document.querySelector(".cards");

//Makes all teammates visible when the page is loaded
playerCards.innerHTML = handleFilterTeammates("all");

const filterTeammates = document.getElementById("players");

function handleFilterTeammates(positionCategory) {
  //target the proper data from footballTeam object
  const cards =
    positionCategory === "all"
      ? footballTeam["players"]
      : footballTeam["players"].filter(
          ({ position }) => position === positionCategory
        );

  return cards.map(({ name, position, isCaptain }) => {
    return `
      <div class="player-card">
        <h2>${isCaptain === true ? `(Captain) ` : ``}${name}</h2>
        <p>Position: ${position}</p>
      </div>
    `;
  });
}

filterTeammates.addEventListener("change", () => {
  playerCards.innerHTML = handleFilterTeammates(filterTeammates.value);
});
