window.onload = function () {
    var imageContainer = document.getElementById("main-content");
    var imageUrl = "./IMG_1002.png";
    var imageAlt = "doogle";

    var imageHTML = `<img src="${imageUrl}" alt="${imageAlt}">`;

    imageContainer.innerHTML = imageHTML;
}