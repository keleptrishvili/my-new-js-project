function handleHover() {
    const selectionBoxes = document.querySelectorAll('.selection-box');
    selectionBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#091c34';
        });
    
        box.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
}

function handleClick() {
    const playBtn = document.getElementById('play');
    playBtn.addEventListener('click', function() {
        this.innerHTML = 'PLAYING...';
        this.style.backgroundColor = '#4e5a74'; 

        setTimeout(() => {
            this.innerHTML = 'PLAY ON';
            this.style.backgroundColor = '#3a4e7a'; 
        }, 3000); 
    });
}


function handleImageZoom() {
    const images = document.querySelectorAll('.filmbox2 img');
    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)'; 
            this.style.transition = 'transform 0.3s ease'; 
            this.style.filter = 'blur(5px)';
        });
    
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)'; 
            this.style.filter = 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    handleHover();
    handleClick();
    handleImageZoom();
});
document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.image-container');
    const prevSlideBtn = document.getElementById('prevSlide');
    const nextSlideBtn = document.getElementById('nextSlide');

    nextSlideBtn.addEventListener('click', function() {
        imageContainer.scrollBy({
            left: 350, 
            behavior: 'smooth' 
        });
    });

    prevSlideBtn.addEventListener('click', function() {
        imageContainer.scrollBy({
            left: -350, 
            behavior: 'smooth' 
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const imageContainer1 = document.querySelector('.image-container1');
    const prevSlideBtn1 = document.getElementById('prevSlidedubbed');
    const nextSlideBtn1 = document.getElementById('nextSlidedubbed');

    nextSlideBtn1.addEventListener('click', function() {
        imageContainer1.scrollBy({
            left: 350, 
            behavior: 'smooth' 
        });
    });

    prevSlideBtn1.addEventListener('click', function() {
        imageContainer1.scrollBy({
            left: -350, 
            behavior: 'smooth' 
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const topAiringContainer = document.querySelector('.filmbox2:nth-of-type(2) .image-container');
    const mostWatchedContainer = document.querySelector('.filmbox2:nth-of-type(3) .image-container');
    const dubbedContainer = document.querySelector('.filmbox2:nth-of-type(4) .image-container1');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.topAiringAnime.forEach(anime => {
                const img = document.createElement('img');
                img.src = anime.src;
                img.alt = anime.alt;
                img.style.width = '300px';
                topAiringContainer.appendChild(img);
            });

            data.mostWatchedAnime.forEach(anime => {
                const img = document.createElement('img');
                img.src = anime.src;
                img.alt = anime.alt;
                img.style.width = '300px';
                mostWatchedContainer.appendChild(img);
            });

            data.dubbedAnime.forEach(anime => {
                const img = document.createElement('img');
                img.src = anime.src;
                img.alt = anime.alt;
                img.style.width = '300px';
                dubbedContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
