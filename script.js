// script.js

const prompts = [
  "Juan forgets every brown person's name",
  "Dink comments on someone's hairline",
  "Pillai dresses like a pimp",
  "LeBron James comes up organically in conversation",
  "Arjun says 'bubuuuu'",
  "Katiuska cries 🥺",
  "Raunak asks if you've heard of an obscure band",
  "Arjun makes NBA reference",
  "Sriram initiates and instigates an untimely philosophical debate",
  "Someone doesn't wake up on time for the ceremony",
  "Roopam wears all black",
  "Someone falls asleep during ceremony",
  "Hoe-Jin does namaste 🙏",
  "DJ plays Mundian Ke Bachke",
  "Mahesh and Nihal switch clothing items",
  "Arjun yells 'CAVALEEEEE'",
  "Raivat and Varun fight",
  "Mehar looks extremely handsome",
  "Divya dodges Arjun's attempt to pinch her cheeks",
  "Baby Maya Rose Ramanathan looks adorable",
  "Some aunty tries to take over wedding planning",
  "Arjun forgets dance moves on stage",
  "Someone brings up St. Lucia",
  "Mehar immediately hits it off with HTS clients"
];

const board = document.getElementById("bingoBoard");
const shuffleButton = document.getElementById("shuffleButton");

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
  board.innerHTML = "";
  const shuffled = shuffle([...prompts]);
  for (let i = 0; i < 25; i++) {
    const tile = document.createElement("div");
    tile.className = "bingo-tile";
    if (i === 12) {
      tile.textContent = "Free!";
      tile.classList.add("selected");
    } else {
      tile.textContent = shuffled.pop();
    }
    tile.addEventListener("click", () => {
      tile.classList.toggle("selected");
    });
    board.appendChild(tile);
  }
}

shuffleButton.addEventListener("click", createBoard);
window.onload = createBoard;
