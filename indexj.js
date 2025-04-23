const sheetURL =
        "https://script.google.com/macros/s/AKfycbxncc_HqrZp0mbWaKtf0etswYiPVnNVfVfDgPrvRow9GWbxF_nrEg6jLsJcpISyshuzZg/exec";
      const localData = localStorage.getItem("resumeData");

      function renderData(data) {
        let output = "";
        data.forEach((row) => {
          output += `
            
                <div class="card">
                <div class="card-content">
                        <a href="${row.link}" target="_blank" rel="noopener noreferrer">
                            <img class="im" src="${row.image}" alt="no image found" >
                        </a>
                    </div>
                <div class="card-text">
                    <h6>${row.name}</h6>
                    
                    <a href="${row.link}" target="_blank" >Watch Now</a>
                </div>
                </div>  
            `;
        });
        document.getElementById("data").innerHTML = output;
      }

      if (localData) {
        renderData(JSON.parse(localData));
      } else {
        fetch(sheetURL)
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("resumeData", JSON.stringify(data));
            renderData(data);
          })
          .catch((err) => {
            console.error("Error fetching data:", err);
            document.getElementById("data").innerHTML =
              "⚠ Error loading data.";
          });
      }