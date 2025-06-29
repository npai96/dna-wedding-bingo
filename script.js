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
  "Sriram initiates then instigates an untimely philosophical debate",
  "Someone doesn't wake up on time for the wedding ceremony",
  "Roopam wears all black",
  "Someone falls asleep during the wedding ceremony",
  "Hoe-Jin does namaste 🙏",
  "DJ plays Mundian Ke Bachke",
  "Mahesh and Nihal switch clothing items",
  "Arjun yells 'CAVALEEEEE'",
  "Raivat and Varun fight",
  "Mehar looks extremely handsome",
  "Divya dodges Arjun's attempt to pinch her cheeks",
  "Baby Maya Rose Ramanathan looks adorable",
  "Arjun's clean shaven face is an absolute banger",
  "Arjun forgets dance moves on stage",
  "Someone brings up St. Lucia",
  "Someone asks who/what 'Dink' is",
  "Mehar immediately hits it off with HTS clients",
];

const board = document.getElementById("bingoBoard");
const shuffleButton = document.getElementById("shuffleButton");

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function saveState() {
  const tiles = document.querySelectorAll(".bingo-tile");
  const boardOrder = [];
  const selectedTexts = [];
  
  tiles.forEach((tile) => {
    boardOrder.push(tile.textContent);
    if (tile.classList.contains("selected")) {
      selectedTexts.push(tile.textContent);
    }
  });
  
  localStorage.setItem("bingoBoardOrder", JSON.stringify(boardOrder));
  localStorage.setItem("bingoSelections", JSON.stringify(selectedTexts));
}

function createBoard(useExistingOrder = false) {
  board.innerHTML = "";
  
  let boardOrder;
  const savedOrder = localStorage.getItem("bingoBoardOrder");
  const savedSelections = JSON.parse(localStorage.getItem("bingoSelections") || "[]");
  
  if (useExistingOrder && savedOrder) {
    boardOrder = JSON.parse(savedOrder);
  } else {
    const shuffled = shuffle([...prompts]);
    boardOrder = shuffled.slice(0, 25);
  }
  
  boardOrder.forEach(tileText => {
    const tile = document.createElement("div");
    tile.className = "bingo-tile";
    tile.textContent = tileText;
    
    // Restore selection if this text was previously selected
    if (savedSelections.includes(tileText)) {
      tile.classList.add("selected");
    }
    
    tile.addEventListener("click", () => {
      tile.classList.toggle("selected");
      saveState();
    });
    board.appendChild(tile);
  });
  
  // Save the current board order
  if (!useExistingOrder) {
    saveState();
  }
}

shuffleButton.addEventListener("click", () => {
  localStorage.removeItem("bingoSelections");
  localStorage.removeItem("bingoBoardOrder");
  createBoard(false);
});
window.onload = () => createBoard(true);
