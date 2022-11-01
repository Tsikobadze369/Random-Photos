let imageContainerEl = document.querySelector('.image-container')

let btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', () => {
    imageNum = 10;
    addNewImages()

});

function addNewImages() {
    for (let index = 0; index < imageNum; index++) {
        let newImgEl = document.createElement('img');
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerEl.appendChild(newImgEl);

    }
}