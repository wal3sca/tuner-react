import { Link } from "react-router-dom";

function Song({ song }) {
  return (
    <tr>
      <td>
        {" "}
        <Link to={`/songs/${song.id}`}>{song.title}</Link>
      </td>
      <td>{song.artist}</td>
      <td>{song.length}</td>
      <td>{song.album}</td>
    </tr>
  );
}

export default Song;
