// Array of video details
const videos = [
    {
        thumbnail: "C:/WORK/git/web/asset/proi0.jpeg",
        icon: "C:/WORK/git/web/asset/proi0.jpeg",
        title: "How to Code a YouTube Clone",
        channelName: "Coding Master",
        views: "1M views",
        uploaded: "2 days ago",
        link: "#"
    },
    {
        thumbnail: "C:/WORK/git/web/asset/proi0.jpeg",
        icon: "C:/WORK/git/web/asset/proi0.jpeg",
        title: "JavaScript Tricks",
        channelName: "JS Guru",
        views: "500K views",
        uploaded: "5 days ago",
        link: "#"
    },
    {
        thumbnail: "C:/WORK/git/web/asset/proi0.jpeg",
        icon: "C:/WORK/git/web/asset/proi0.jpeg",
        title: "JavaScript Tricks",
        channelName: "JS Guru",
        views: "500K views",
        uploaded: "5 days ago",
        link: "#"
    },
    {
        thumbnail: "C:/WORK/git/web/asset/proi0.jpeg",
        icon: "C:/WORK/git/web/asset/proi0.jpeg",
        title: "JavaScript Tricks",
        channelName: "JS Guru",
        views: "500K views",
        uploaded: "5 days ago",
        link: "#"
    },
    {
        thumbnail: "C:/WORK/git/web/asset/proi0.jpeg",
        icon: "C:/WORK/git/web/asset/proi0.jpeg",
        title: "JavaScript Tricks",
        channelName: "JS Guru",
        views: "500K views",
        uploaded: "5 days ago",
        link: "#"
    },
    {
        thumbnail: "C:/WORK/git/web/asset/proi0.jpeg",
        icon: "C:/WORK/git/web/asset/proi0.jpeg",
        title: "JavaScript Tricks",
        channelName: "JS Guru",
        views: "500K views",
        uploaded: "5 days ago",
        link: "#"
    },
    {
        thumbnail: "C:/WORK/git/web/asset/proi0.jpeg",
        icon: "C:/WORK/git/web/asset/proi0.jpeg",
        title: "JavaScript Tricks",
        channelName: "JS Guru",
        views: "500K views",
        uploaded: "5 days ago",
        link: "#"
    },
    {
        thumbnail: "C:/WORK/git/web/asset/proi0.jpeg",
        icon: "C:/WORK/git/web/asset/proi0.jpeg",
        title: "JavaScript Tricks",
        channelName: "JS Guru",
        views: "500K views",
        uploaded: "5 days ago",
        link: "#"
    },
    {
        thumbnail: "C:/WORK/git/web/asset/proi0.jpeg",
        icon: "C:/WORK/git/web/asset/proi0.jpeg",
        title: "JavaScript Tricks",
        channelName: "JS Guru",
        views: "500K views",
        uploaded: "5 days ago",
        link: "#"
    },
    // Add more video objects here as needed
];

// Function to create video cards dynamically
const videoGrid = document.getElementById("video-grid");

videos.forEach(video => {
    const videoCard = document.createElement("div");
    videoCard.className = "video-card";
    videoCard.innerHTML = `
        <a href="${video.link}" class="thumbnail">
            <img src="${video.thumbnail}" alt="Video Thumbnail">
        </a>
        <div class="video-info">
            <img src="${video.icon}" alt="Channel Icon" class="channel-icon">
            <div class="details">
                <h3 class="title">${video.title}</h3>
                <p class="channel-name">${video.channelName}</p>
                <p class="video-stats">${video.views} • ${video.uploaded}</p>
            </div>
        </div>
    `;
    videoGrid.appendChild(videoCard);
});

