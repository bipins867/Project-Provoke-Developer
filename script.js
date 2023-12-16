const apiKey = "AIzaSyBdjjKkRla02GbohH8Egp38-KlMuctxiKM";

const videoId = "tjQIO1rqTBE";



function loadVideo() {
  const videoIdInput = document.getElementById("videoIdInput").value;

  
  if (videoIdInput.trim() !== "") {
    
    if (window.player) {
      window.player.destroy();
    }

    
    window.player = new YT.Player("video-container", {
      height: "100%",
      width: "100%",
      videoId: videoIdInput,
      playerVars: {
        modestbranding: 1,
        controls: 1,
        autoplay: 0,
        fs: 1,
        rel: 0,
        showinfo: 0,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
    function onPlayerReady(event) {
      console.log("On Ready");
    }

    function onPlayerStateChange(event) {
      console.log("Player State changed");
    }
  } else {
    alert("Please enter a valid YouTube Video ID.");
  }
}

