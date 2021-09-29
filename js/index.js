const myImage = document.querySelector ('img')
fetch('teddy_1.jpg')
.then (function (response) {
    return response.blob();
})
.then (function (myBlob) {
    const objectURL = URL.createObjectURL (myBlob);
    myImage.src = objectURL;
});