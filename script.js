const moviesData = [

{
    id: 1,
    title: "Avengers Endgame",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIgAQCQ7Dm0PYyIa-mSeiPUXYxp8D-VBWxr3CVJZEZw&s=10",
    description: "Biệt đội Avengers chống lại Thanos.",
    videoUrl: "endgame.mp4"
},

{
    id: 2,
    title: "Mai",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXhz41iuVEnJ4QIBwtZ9_Y4sXCQxzt7afRjy8idECsyQ&s",
    description: "Phim điện ảnh của Trấn Thành.",
    videoUrl: "videos/mai.mp4"
},

{
    id: 3,
    title: "Mưa Đỏ",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ViFpD1bPjn82zUElEtNnIR4HvNq9tuZdQg_N7jUrow&s=10",
    description: "Bộ phim chiến tranh Việt Nam.",
    videoUrl: "videos/muado.mp4"
},

{
    id: 4,
    title: "Naruto",
    poster: "https://i.ebayimg.com/images/g/Or8AAOSwEDBdtMUc/s-l1200.jpg",
    description: "Anime nổi tiếng của Nhật Bản.",
    videoUrl: "videos/naruto.mp4"
},

{
    id: 5,
    title: "Spirited Away (Vùng Đất Linh Hồn)",
    poster: "https://thumb.wikimedia.org/wikipedia/vi/thumb/3/30/Spirited_Away_poster.JPG/250px-Spirited_Away_poster.JPG",
    description: "Anime nổi tiếng của Nhật Bản.",
    videoUrl: "videos/vungdatlinhhon.mp4"
},

{
    id: 6,
    title: "The Dark Knight",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    description: "Anime nổi tiếng của Nhật Bản.",
    videoUrl: "videos/batman.mp4"
},

{
    id: 8,
    title: "Thanh gươm diệt quỷ",
    poster: "https://tse1.mm.bing.net/th/id/OIP.oL-beT6qzWkaFtQNmxon7AHaKV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Anime nổi tiếng của Nhật Bản.",
    videoUrl: "videos/thanhguomdietquy.mp4"
},

];

const movieGrid =
document.getElementById("movieGrid");

const modal =
document.getElementById("movieModal");

const modalTitle =
document.getElementById("modalTitle");

const modalDescription =
document.getElementById("modalDescription");

const movieSource =
document.getElementById("movieSource");

const moviePlayer =
document.getElementById("moviePlayer");

const searchInput =
document.getElementById("searchInput");

function renderMovies(list){

movieGrid.innerHTML = list.map(movie=>`

<div
 class="movie-card"
 onclick="openMovie(${movie.id})">

<img src="${movie.poster}">

<h3>${movie.title}</h3>

<p>${movie.description}</p>

</div>

`).join("");

}

function openMovie(id){

const movie =
moviesData.find(m=>m.id===id);

modalTitle.textContent =
movie.title;

modalDescription.textContent =
movie.description;

movieSource.src =
movie.videoUrl;

moviePlayer.poster =
movie.poster;

moviePlayer.load();

modal.classList.remove("hidden");

}

document
.getElementById("closeModal")
.onclick=()=>{

moviePlayer.pause();

modal.classList.add("hidden");

};

searchInput.addEventListener(
"input",
function(){

const keyword =
this.value.toLowerCase();

const filtered =
moviesData.filter(movie=>
movie.title.toLowerCase()
.includes(keyword)
);

renderMovies(filtered);

}
);

renderMovies(moviesData);