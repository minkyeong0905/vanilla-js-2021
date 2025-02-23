const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);
//document.body.prepend(bgImage);

const imgUrl = `img/${chosenImage}`;
document.body.style.backgroundImage = `url(${imgUrl})`;
document.body.style.backgroundPosition = "top";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed";