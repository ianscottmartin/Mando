document.addEventListener("DOMContentLoaded", () => {
  const englishToAurebesh = {
    A: "𐌰",
    B: "𐌱",
    C: "𐌲",
    D: "𐌳",
    E: "𐌴",
    F: "𐌵",
    G: "𐌶",
    H: "𐌷",
    I: "𐌸",
    J: "𐌹",
    K: "𐌺",
    L: "𐌻",
    M: "𐌼",
    N: "𐌽",
    O: "𐌾",
    P: "𐌿",
    Q: "𐍀",
    R: "𐍁",
    S: "𐍂",
    T: "𐍃",
    U: "𐍄",
    V: "𐍅",
    W: "𐍆",
    X: "𐍇",
    Y: "𐍈",
    Z: "𐍉",
  };
  const aurebeshToEnglish = {
    "𐌰": "A",
    "𐌱": "B",
    "𐌲": "C",
    "𐌳": "D",
    "𐌴": "E",
    "𐌵": "F",
    "𐌶": "G",
    "𐌷": "H",
    "𐌸": "I",
    "𐌹": "J",
    "𐌺": "K",
    "𐌻": "L",
    "𐌼": "M",
    "𐌽": "N",
    "𐌾": "O",
    "𐌿": "P",
    "𐍀": "Q",
    "𐍁": "R",
    "𐍂": "S",
    "𐍃": "T",
    "𐍄": "U",
    "𐍅": "V",
    "𐍆": "W",
    "𐍇": "X",
    "𐍈": "Y",
    "𐍉": "Z",
  };
  const englishKeys = Object.keys(englishToAurebesh);
  const aurebeshKeys = Object.values(englishToAurebesh);
  const englishKeyboardContainer = document.getElementById("englishKeyboard");
  const aurebeshKeyboardContainer = document.getElementById("aurebeshKeyboard");
  englishKeys.forEach((key) => {
    const keyElement = document.createElement("div");
    keyElement.classList.add("key");
    keyElement.textContent = key;
    keyElement.addEventListener("click", () => {
      const input = document.getElementById("englishInput");
      input.value += key;
    });
    englishKeyboardContainer.appendChild(keyElement);
  });
  aurebeshKeys.forEach((key) => {
    const keyElement = document.createElement("div");
    keyElement.classList.add("key");
    keyElement.textContent = key;
    keyElement.addEventListener("click", () => {
      const input = document.getElementById("aurebeshInput");
      input.value += key;
    });
    aurebeshKeyboardContainer.appendChild(keyElement);
  });
  document
    .getElementById("englishToAurebeshForm")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const inputText = document
        .getElementById("englishInput")
        .value.toUpperCase();
      let translatedText = "";
      for (let char of inputText) {
        translatedText += englishToAurebesh[char] || char;
      }
      document.getElementById("aurebeshOutput").textContent = translatedText;
    });
  document
    .getElementById("aurebeshToEnglishForm")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const inputText = document.getElementById("aurebeshInput").value;
      let translatedText = "";
      for (let char of inputText) {
        translatedText += aurebeshToEnglish[char] || char;
      }
      document.getElementById("englishOutput").textContent = translatedText;
    });
  // Add event listener for the reset button for English
  document.getElementById("resetEnglish").addEventListener("click", () => {
    document.getElementById("englishInput").value = ""; // Clear the English input field
    document.getElementById("aurebeshOutput").textContent = ""; // Clear the Aurebesh output
  });
  // Add event listener for the reset button for Aurebesh
  document.getElementById("resetAurebesh").addEventListener("click", () => {
    document.getElementById("aurebeshInput").value = ""; // Clear the Aurebesh input field
    document.getElementById("englishOutput").textContent = ""; // Clear the English output
  });
});
