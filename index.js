let natureImgs = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",  
];

const displayImages = () => {
  let feedUpdate = document.getElementById("feed");

  for (let i = 0; i < natureImgs.length; i++) {
    let createImg = document.createElement("img");
    createImg.src = randomLink();
    feedUpdate.appendChild(createImg);
  }
}

const randomLink = () => {
  let randomIndex = Math.floor(Math.random() * natureImgs.length);
  let link = natureImgs[randomIndex];
  return link;
}

const scroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    displayImages();
  }
}
