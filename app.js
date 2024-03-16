// document.addEventListener("DOMContentLoaded", function () {
 
//     var mediaData = [
//         { imageSrc: "images/stree.jpg", videoSrc: "videos/stree.mp4" },
//         { imageSrc: "images/stree2.jpg", videoSrc: "videos/stree2.mp4" },
 
//     ];

//     var galleryContainer = document.getElementById("gallery-container");


//     mediaData.forEach(function (media) {
//         var cardContainer = document.createElement("div");
//         cardContainer.className = "video-card";

//         var image = document.createElement("img");
//         image.src = media.imageSrc;
//         image.className = "video-card-image";
//         image.alt = "";

//         var video = document.createElement("video");
//         video.autoplay = true;
//         video.src = media.videoSrc;
//         video.muted = true;
//         video.loop = true;
//         video.className = "card-video";

//         cardContainer.appendChild(image);
//         cardContainer.appendChild(video);

//         galleryContainer.appendChild(cardContainer);
//     });
// });



const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})
