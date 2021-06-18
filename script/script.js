const cursor = document.querySelector('.cursor');
const cursorBang = document.querySelector('.cursor-bang');


document.addEventListener('mousemove', (event) => {
    cursor.style.top = `${event.pageY}px`;
    cursor.style.left = `${event.pageX}px`;
});

// document.addEventListener('click', (event) => {
//     cursor.style.opacity = 0;
//     cursorBang.style.opacity = 1;
//     document.addEventListener('mousemove', (event) => {
//         cursorBang.style.top = `${event.pageY}px`;
//         cursorBang.style.left = `${event.pageX}px`;
//     })
    
// })


const playbutton = document.querySelector('.mainpage .playbtn');

playbutton.addEventListener('click', (event) => {
    document.querySelector('.mainpage').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.menupage').style.display = "none";
    }, 100);
});


