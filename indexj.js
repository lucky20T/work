

  // window.addEventListener('DOMContentLoaded', () => {
  //   const cleared = localStorage.getItem('cleared');
  
  //   if (!cleared) {
  //     localStorage.removeItem('resumeData');
  //     localStorage.setItem('cleared', 'true');
  //     location.reload();
  //   } else {
  //     localStorage.removeItem('cleared'); // Clear flag after reload
  //  }
  // });
              
  const sheetURL =
  "https://script.google.com/macros/s/AKfycbxncc_HqrZp0mbWaKtf0etswYiPVnNVfVfDgPrvRow9GWbxF_nrEg6jLsJcpISyshuzZg/exec";
const localData = localStorage.getItem("resumeData");
let fullData = []; // Store all data globally

function renderData(data) {
  let output = "";
  if (data.length === 0) {
    output = `<p style="color:red;">No results found.</p>`;
  } else {
    data.forEach((row) => {
      // Create a card for each row of data
      output += `
  <div class="card">
    <a href="details.html?name=${encodeURIComponent(row.name)}">
      <img class="card-img" src="${row.image}" alt="No image found">
    </a>
    <div class="card-text">
      <h6>${row.name}</h6>
      <a href="details.html?name=${encodeURIComponent(row.name)}">Watch Now</a>
    </div>
  </div>
`;

    });
  }
  document.getElementById("data").innerHTML = output;
}

// Function to filter data based on search input
function filterData() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filtered = fullData.filter((row) =>
    row.name.toLowerCase().includes(searchTerm)
  );
  renderData(filtered);
}

// Load data
if (localData) {
  fullData = JSON.parse(localData);
  renderData(fullData);
} else {
  fetch(sheetURL)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("resumeData", JSON.stringify(data));
      fullData = data;
      renderData(fullData);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
      document.getElementById("data").innerHTML = "⚠ Error loading data.";
    });
}

// Add event listener to Search button
document.getElementById("searchButton").addEventListener("click", filterData);
                                
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