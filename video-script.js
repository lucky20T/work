// Get video details from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const videoSrc = urlParams.get("src");
const videoTitle = urlParams.get("title");
const videoChannel = urlParams.get("channel");
const videoViews = urlParams.get("views");
const videoUploaded = urlParams.get("uploaded");
const videoDescription = urlParams.get("description") || "No description available.";

// Update video player and details
document.getElementById("videoPlayer").src = videoSrc;
document.getElementById("videoTitle").textContent = videoTitle;
document.getElementById("videoChannel").textContent = videoChannel;
document.getElementById("videoStats").textContent = `${videoViews} • ${videoUploaded}`;
document.getElementById("videoDescription").textContent = videoDescription;
