
// const sheetURL =
//         "https://script.google.com/macros/s/AKfycbxncc_HqrZp0mbWaKtf0etswYiPVnNVfVfDgPrvRow9GWbxF_nrEg6jLsJcpISyshuzZg/exec";
//       const localData = localStorage.getItem("resumeData");

//       function renderData(data) {
//         let output = "";
//         data.forEach((row) => {
//           output += `
                
//                 <div class="card">
//                   <a href="${row.link}" target="_blank" rel="noopener noreferrer">
//                     <img class="card-img" src="${row.image}" alt="No image found">
//                   </a>

//                   <div class="card-text">
//                     <h6>${row.name}</h6>
//                       <a href="${row.link}" target="_blank">Watch Now</a>
//                   </div>
//                 </div>
                
 
//             `;
//         });
//         document.getElementById("data").innerHTML = output;
//       }

//       if (localData) {
//         renderData(JSON.parse(localData));
//       } else {
//         fetch(sheetURL)
//           .then((res) => res.json())
//           .then((data) => {
//             localStorage.setItem("resumeData", JSON.stringify(data));
//             renderData(data);
//           })
//           .catch((err) => {
//             console.error("Error fetching data:", err);
//             document.getElementById("data").innerHTML =
//               "⚠ Error loading data.";
//           });
//       }
          // window.addEventListener('DOMContentLoaded', () => {
          //   const cleared = localStorage.getItem('cleared');
          
          //   if (!cleared) {
          //     localStorage.removeItem('resumeData');
          //     localStorage.setItem('cleared', 'true');
          //     location.reload();
          //   } else {
          //     localStorage.removeItem('cleared'); // Clear flag after reload
          //   }
          // });
                      //   function searchData() {
                      //     const input = document.getElementById("searchInput").value.toLowerCase();
                      //     const resultsDiv = document.getElementById("results");
                      //     resultsDiv.innerHTML = ""; // Clear previous results
                      
                      //     const filteredData = data.filter(item => item.name.toLowerCase().includes(input));
                      
                      //     if (filteredData.length > 0) {
                      //         filteredData.forEach(row => {
                      //             resultsDiv.innerHTML += `
                      //                 <div class="card">
                      //                     <img class="card-img" src="${row.image}" alt="Image not found">
                      //                     <div class="card-text">
                      //                         <h6>${row.name}</h6>
                      //                         <a href="${row.link}" target="_blank">View More</a>
                      //                     </div>
                      //                 </div>
                      //             `;
                      //         });
                      //     } else {
                      //         resultsDiv.innerHTML = "<p>No results found!</p>";
                      //     }
                      // }
  //   const sheetURL =
  //   "https://script.google.com/macros/s/AKfycbxncc_HqrZp0mbWaKtf0etswYiPVnNVfVfDgPrvRow9GWbxF_nrEg6jLsJcpISyshuzZg/exec";
  // const localData = localStorage.getItem("resumeData");
  // let fullData = [];

  // function renderData(data) {
  //   let output = "";
  //   data.forEach((row) => {
  //     output += `
  //       <div class="card">
  //         <a href="${row.link}" target="_blank" rel="noopener noreferrer">
  //           <img class="card-img" src="${row.image}" alt="No image found">
  //         </a>
  //         <div class="card-text">
  //           <h6>${row.name}</h6>
  //           <a href="${row.link}" target="_blank">Watch Now</a>
  //         </div>
  //       </div>
  //     `;
  //   });
  //   document.getElementById("data").innerHTML = output;
  // }

  // function filterData() {
  //   const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  //   const filtered = fullData.filter((row) =>
  //     row.name.toLowerCase().includes(searchTerm)
  //   );
  //   renderData(filtered);
  // }

  // if (localData) {
  //   fullData = JSON.parse(localData);
  //   renderData(fullData);
  // } else {
  //   fetch(sheetURL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       localStorage.setItem("resumeData", JSON.stringify(data));
 //       fullData = data;
  //       renderData(fullData);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching data:", err);
  //       document.getElementById("data").innerHTML = "⚠ Error loading data.";
  //     });
  // 
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
      // output += `
      //   <div class="card">
      //     <a href="${row.link}" target="_blank" rel="noopener noreferrer">
      //       <img class="card-img" src="${row.image}" alt="No image found">
      //     </a>
      //     <div class="card-text">
      //       <h6>${row.name}</h6>
      //       <a href="${row.link}" target="_blank">Watch Now</a>
      //     </div>
      //   </div>
        
      // `;
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
                                
                                                