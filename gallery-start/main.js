const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const galleryImages= ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg']
/* Looping through images */
localStorage.setItem('myObj', JSON.stringify(galleryImages));
console.log(localStorage)
    for ( image of galleryImages){
        const newImage = document.createElement('img');
        newImage.setAttribute('src', image);
        newImage.addEventListener('click', (e) =>{
            displayedImage.setAttribute('src', e.target.src);
        })
        thumbBar.appendChild(newImage); 
    }
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', ()=>{
    let tet = btn.getAttribute('class');
    if (tet === 'dark'){
        btn.setAttribute('class', 'light');
    btn.textContent = 'lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }else{
        btn.setAttribute('class', 'dark');
    btn.textContent = 'darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
console.log(tet)
localStorage.setItem('myObj', JSON.stringify(galleryImages));
console.log(localStorage)
})

