const worksheets = [
  {
    id: 1,
    subject: "Working Sheet 1",
    description:
      "Sharpen your calculation skills with focused Abacus practice.",
    link: "./workingsheets/workingsheet1.pdf",
  },
  {
    id: 2,
    subject: "Working Sheet 2",
    description: "Improve mental math speed through daily Abacus exercises.",
    link: "./workingsheets/workingsheet2.pdf",
  },
  {
    id: 3,
    subject: "Working Sheet 3",
    description: "Enhance accuracy and focus with fun Abacus challenges.",
    link: "./workingsheets/workingsheet3.pdf",
  },
  {
    id: 4,
    subject: "Working Sheet 4",
    description: "Master number visualization using interactive Abacus sheets.",
    link: "./workingsheets/workingsheet4.pdf",
  },
  {
    id: 5,
    subject: "Working Sheet 5",
    description:
      "Develop faster problem-solving through regular Abacus practice.",
    link: "./workingsheets/workingsheet5.pdf",
  },
  {
    id: 6,
    subject: "Working Sheet 6",
    description: "Strengthen your brain with engaging Abacus activities.",
    link: "assets/workingsheets/workingsheet6.pdf",
  },
  {
    id: 7,
    subject: "Working Sheet 7",
    description: "Boost confidence and focus with guided Abacus worksheets.",
    link: "./workingsheets/workingsheet7.pdf",
  },
  {
    id: 8,
    subject: "Working Sheet 8",
    description: "Learn smart calculation techniques using Abacus methods.",
    link: "assets/workingsheets/workingsheet8.pdf",
  },
  {
    id: 9,
    subject: "Working Sheet 9",
    description: "Train your mind for quick and accurate computations.",
    link: "./workingsheets/workingsheet9.pdf",
  },
  {
    id: 10,
    subject: "Working Sheet 10",
    description:
      "Transform your math skills with simple and effective Abacus practice.",
    link: "./workingsheets/workingsheet10.pdf",
  },
];

const container = document.getElementById("worksheets-container");

worksheets.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("flip-card");
  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h2>${item.subject}</h2>
        <p>${item.description}</p>
      </div>
      <div class="flip-card-back">
        <h3>${item.subject}</h3>
        <p>Click below to open the worksheet</p>
        <button class="worksheet-btn" onclick="window.open('${item.link}', '_blank')">
          Start Worksheet
        </button>
      </div>
    </div>
  `;
  container.appendChild(card);
});
