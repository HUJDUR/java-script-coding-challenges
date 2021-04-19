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

const imagesContainer = document.querySelector('.images');

(async function() {
    try {
        let img = await createImage('img-1');
        await wait(2);
        img.style.display = 'none';
        img = await createImage('img-2');
        await wait(2);
        img.style.display = 'none';
    } catch(err) {
        console.log(err.message);
    }
})()

async function loadAll(imgArr) {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);
    const images = await Promise.all(imgs);
    console.log(images);
}

loadAll(['img-1', 'img-2', 'img-3'])