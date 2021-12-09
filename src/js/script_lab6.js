var btn = document.getElementById("btn").addEventListener('click',getPost);
var con = 0;
var div = document.getElementById("CardDiv");

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>{
            return res.json();
        })
        .then((post)=>{
            for(let index = 0; index < 1; index++){
                div.innerHTML +=`
           <div class = "card">
           <img class="card-img" src="${post[con].thumbnailUrl}">
           <div class="card-body">
           <h5 class="card-title">${post[con].id}</h5>
           <p class="card-text">${post[con].title}</p>
           </div>
           </div>
           `
                con = con+1;
            }
        })
        .catch((error)=>{
            console.log(error);
        })

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//   $('.button').on('click', function() {
// 	$('.preloader').addClass('active')

// 	$.get('/echo/json', function(data) {
//     sleep(2000).then(function() {
//       $('.preloader').removeClass('active')
//     })
//   })
// })