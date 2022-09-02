const movie_list = document.getElementById("movie_container");

const getData = async () => {
  try {
    let input = document.getElementById("input-search").value;

    let res = await fetch(
      `https://www.omdbapi.com/?&apikey=7b9e6a84&s=${input}`
    );
    let data = await res.json();
    return data?.Search;
  } catch (e) {
    console.log(e);
  }
};

// let descriptions = document.getElementById("description");
// let image = document.querySelector(".image");

const mapData = (data) => {
  movie_list.innerHTML = null;

  data?.map((item) => {
    let p = document.createElement("p");

    p.innerText = `${item.Title} ${item.Year}`;
    movie_list.append(p);
  });

  // console.log(data);
  // const poster = document.createElement("img");
  // poster.src = data.Poster;
  // const title = document.createElement("h2");
  // title.innerText = `Title : ${data.Title}`;
  // const cast = document.createElement("h4");
  // cast.innerText = `Cast :  ${data.Actors}`;
  // const imdb = document.createElement("h4");
  // imdb.innerText = `IMDB Rating:  ${data.imdbRating}`;
  // const release = document.createElement("h4");
  // release.innerText = `Realsed On :  ${data.Released}`;
  // image.append(poster);
  // descriptions.append(title, cast, imdb, release);
  // movie_list.append(image, descriptions);
};

const main = async () => {
  let data = await getData();

  mapData(data);
};

let timer;
const debouncing = () => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    main();
  }, 1000);
};
