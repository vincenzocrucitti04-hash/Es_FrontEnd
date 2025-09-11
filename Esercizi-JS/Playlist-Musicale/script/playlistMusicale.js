const playlist = [
  { title: "Lo Que Tiene", artist: "Morad", genre: "Trap", duration: 4 },
  {
    title: "Take Money",
    artist: "ASC AllSideConnection",
    genre: "Hip-Hop",
    duration: 3,
  },
  { title: "What Did I Miss?", artist: "Drake", genre: "Hip-Hop", duration: 5 },
  { title: "DEA", artist: "Tatho", genre: "Trap", duration: 6 },
  {
    title: "Ridere",
    artist: "Pinguini Tattici Nucleari",
    genre: "Pop rock",
    duration: 4,
  },
];

function addSongsToPlaylist(NuovalPlaylist, ...newSongs) {
  // creo una nuova playlist copiando quella originale e aggiungendo le nuove
  const updatedPlaylist = [...NuovalPlaylist, ...newSongs];
  return updatedPlaylist;
}

// esempio di nuove canzoni
const updated = addSongsToPlaylist(
  playlist,
  {
    title: "Nonono",
    artist: "Pinguini Tattici Nucleari",
    genre: "Pop rock",
    duration: 3,
  },
  { title: "Per due come noi", artist: "Artist Y", genre: "Pop", duration: 5 }
);

const container = document.getElementById("playlistContainer");

updated.forEach((song) => {
  const songDiv = document.createElement("div");
  songDiv.textContent = `${song.title} - ${song.artist} (${song.genre}, ${song.duration} min)`;
  container.appendChild(songDiv);
});
