// Array of video data
const videos = [
  {
    id: 1,
    title: "Vedic Maths",
    description: "Learn fast vedic maths techniques.",
    youtubeId: "9OOXyqt_YjA",
  },
  {
    id: 2,
    title: "Abacus - Level 1",
    description: "Master Abacus basics easily.",
    youtubeId: "WEM_u6x6G3E",
  },
  {
    id: 3,
    title: "Abacus - Level 2",
    description: "Practice faster calculations.",
    youtubeId: "k5F3SLZbUzU",
  },
  {
    id: 4,
    title: "Abacus - Level 3",
    description: "Advance to expert techniques.",
    youtubeId: "porZxFwN4bk",
  },
  {
    id: 5,
    title: "Abacus - Speed Mastery",
    description: "Achieve lightning-fast accuracy.",
    youtubeId: "wYpL_sZ_3jI",
  },
];

// Select video grid container
const videoGrid = document.getElementById("video-grid");

// Create video cards dynamically
videos.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("video-card");

  card.innerHTML = `
    <div class="video-container">
      <iframe
        src="https://www.youtube-nocookie.com/embed/${item.youtubeId}?rel=0&modestbranding=1&showinfo=0&controls=1"
        title="${item.title}"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <h2 class="video-heading">${item.title}</h2>
    <p class="video-description">${item.description}</p>
  `;

  videoGrid.appendChild(card);
});
