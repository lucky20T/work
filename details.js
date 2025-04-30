// const sheetURL = "https://script.google.com/macros/s/AKfycbxncc_HqrZp0mbWaKtf0etswYiPVnNVfVfDgPrvRow9GWbxF_nrEg6jLsJcpISyshuzZg/exec";

// const params = new URLSearchParams(window.location.search);
// const animeName = params.get("name");

// function showAnimeDetail(anime) {
//   const detailDiv = document.getElementById("animeDetail");

//   if (!anime) {
//     detailDiv.innerHTML = "<p>No anime found!</p>";
//     return;
//   }

//   detailDiv.innerHTML = `
//     <div class="card">
//       <img class="card-img" src="${anime.image}" alt="No image found">
//       <div class="card-text">
//         <h2>${anime.name}</h2>
//         <a href="${anime.link}" target="_blank">Watch Now</a>
//       </div>
//     </div>
//   `;
// }

// // Load from localStorage if possible
// const localData = localStorage.getItem("resumeData");

// if (localData) {
//   const data = JSON.parse(localData);
//   const anime = data.find((item) => item.name === animeName);
//   showAnimeDetail(anime);
// } else {
//   fetch(sheetURL)
//     .then((res) => res.json())
//     .then((data) => {
//       localStorage.setItem("resumeData", JSON.stringify(data));
//       const anime = data.find((item) => item.name === animeName);
//       showAnimeDetail(anime);
//     })
//     .catch((err) => {
//       console.error("Error fetching data:", err);
//       document.getElementById("animeDetail").innerHTML = "⚠ Error loading data.";
//     });
// }
const sheetURL =
  "https://script.google.com/macros/s/AKfycbxncc_HqrZp0mbWaKtf0etswYiPVnNVfVfDgPrvRow9GWbxF_nrEg6jLsJcpISyshuzZg/exec";

// Fetch anime data
fetch(sheetURL)
  .then((res) => res.json())
  .then((data) => {
    showAnimeDetails(data);
    showRecommendations(data);
  })
  .catch((err) => {
    console.error("Error fetching data:", err);
    document.getElementById("animeDetails").innerHTML = "⚠ Error loading details.";
  });

// Show main anime details
function showAnimeDetails(data) {
  const urlParams = new URLSearchParams(window.location.search);
  const animeName = urlParams.get('name');

  const anime = data.find(item => item.name === animeName);

  if (anime) {
    document.getElementById("animeDetails").innerHTML = `
      <h2>${anime.name}</h2>
      <img src="${anime.image}" alt="${anime.name}" style="max-width: 300px;">
      <p><a href="${anime.link}" target="_blank">Watch Now</a></p>
    `;
  } else {
    document.getElementById("animeDetails").innerHTML = "Anime not found.";
  }
}

// Show recent 4 recommendations
function showRecommendations(data) {
  let output = "<h3>Recommended</h3><div class='recommend-grid'>";

  const latestAnime = data.slice(-4).reverse(); // Last 4 entries

  latestAnime.forEach(anime => {
    output += `
      <div class="rec-card">
        <a href="details.html?name=${encodeURIComponent(anime.name)}">
          <img src="${anime.image}" alt="${anime.name}" style="width:100px; height:140px;">
          <p>${anime.name}</p>
        </a>
      </div>
    `;
  });

  output += "</div>";

  document.getElementById("recommendations").innerHTML = output;
}
// Toggle dark mode
const toggleBtn = document.getElementById('themeToggle');
  const body = document.body;

  // Load theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
             
