function wait(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    })
}

function createImage(imgPath) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        img.src = `img/${imgPath}.jpg`;

        img.addEventListener('load', () => {
            imagesContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', () => {
            reject(new Error('Image not found!'));
        })
    })

}

let img;
const imagesContainer = document.querySelector('.images');

createImage('img-1').then(data => {
    img = data;
    return wait(2);
}).then(() => {
    img.style.display = 'none';
    return createImage('img-2');
}).then(data => {
    img = data;
    return wait(2);
}).then(() => {
    img.style.display = 'none';
}).catch(err => console.error(`Something went wrong! ${err.message}`))