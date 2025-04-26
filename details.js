const sheetURL = "https://script.google.com/macros/s/AKfycbxncc_HqrZp0mbWaKtf0etswYiPVnNVfVfDgPrvRow9GWbxF_nrEg6jLsJcpISyshuzZg/exec";

const params = new URLSearchParams(window.location.search);
const animeName = params.get("name");

function showAnimeDetail(anime) {
  const detailDiv = document.getElementById("animeDetail");

  if (!anime) {
    detailDiv.innerHTML = "<p>No anime found!</p>";
    return;
  }

  detailDiv.innerHTML = `
    <div class="card">
      <img class="card-img" src="${anime.image}" alt="No image found">
      <div class="card-text">
        <h2>${anime.name}</h2>
        <a href="${anime.link}" target="_blank">Watch Now</a>
      </div>
    </div>
  `;
}

// Load from localStorage if possible
const localData = localStorage.getItem("resumeData");

if (localData) {
  const data = JSON.parse(localData);
  const anime = data.find((item) => item.name === animeName);
  showAnimeDetail(anime);
} else {
  fetch(sheetURL)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("resumeData", JSON.stringify(data));
      const anime = data.find((item) => item.name === animeName);
      showAnimeDetail(anime);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
      document.getElementById("animeDetail").innerHTML = "⚠ Error loading data.";
    });
}
