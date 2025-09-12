const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODBiMTMyYjZjOWIwNzIxNThhMDhhMWI4OTQ1NDdkMiIsIm5iZiI6MTc1NzY4MDEwOS42NzgwMDAyLCJzdWIiOiI2OGM0MTFlZDI4ZDNlOTI4MTJiYWM5ZTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.eVe5MczfdH1ohy2bKkj314DHLDegtG8kKBDPTUNsbX4";
const IMG_BASE = "https://image.tmdb.org/t/p/w200";

let currentPage = 1;
let totalPages = 1;
let currentQuery = "";
let currentGenre = "";

// --- Funzione per chiamare l'API ---
async function fetchAPI(endpoint) {
  const res = await fetch(`https://api.themoviedb.org/3${endpoint}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  if (!res.ok) throw new Error("Errore API");
  return await res.json();
}

// --- Carica generi e popola select ---
async function loadGenres() {
  const data = await fetchAPI("/genre/movie/list?language=it");
  const select = document.getElementById("genreSelect");
  data.genres.forEach((g) => {
    const opt = document.createElement("option");
    opt.value = g.id;
    opt.textContent = g.name;
    select.appendChild(opt);
  });
}

// --- Mostra film ---
async function loadMovies() {
  let endpoint = "";
  if (currentQuery) {
    endpoint = `/search/movie?query=${encodeURIComponent(
      currentQuery
    )}&page=${currentPage}&language=it`;
  } else if (currentGenre) {
    endpoint = `/discover/movie?with_genres=${currentGenre}&page=${currentPage}&language=it`;
  } else {
    endpoint = `/discover/movie?page=${currentPage}&language=it`;
  }

  const data = await fetchAPI(endpoint);

  totalPages = data.total_pages;
  document.getElementById(
    "pageInfo"
  ).textContent = `${currentPage} / ${totalPages}`;

  const container = document.getElementById("movies");
  container.innerHTML = "";

  data.results.forEach((movie) => {
    const div = document.createElement("div");
    div.style.margin = "10px";
    div.innerHTML = `
          <h3>${movie.title}</h3>
          <img src="${
            movie.poster_path ? IMG_BASE + movie.poster_path : ""
          }" alt="${movie.title}">
          <p>Data uscita: ${movie.release_date || "N/A"}</p>
          <p>Voto: ${movie.vote_average}</p>
        `;
    container.appendChild(div);
  });
}
