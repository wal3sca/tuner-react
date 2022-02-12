import { useState, useEffect } from "react";
import axios from "axios";
import Song from "./Song";

const Songs = () => {
  const API = process.env.REACT_APP_API_URL;
  const [allSongs, setAllSongs] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => setAllSongs(response.data))
      .catch((error) => console.warn(error));
  }, [API]);

  console.log(allSongs);

  return (
    <div className="allSongs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Length of Song</th>
              <th>Album</th>
            </tr>
          </thead>
          <tbody>
            {allSongs.map((eachSong) => {
              return <Song key={eachSong.id} song={eachSong} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Songs;
