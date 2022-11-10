import "./App.css";

const batmanJson = require("./batman.json");

function App() {
  const bm = batmanJson.Search.map((batman) => {
    return (
      <div>
        <Batman batman={batman}></Batman>
      </div>
    );
  });
  return <div>{bm}</div>;
}

//component of batman ussing prop
const Batman = (props) => {
  return (
    <div className="batman_properties">
      <div>
        <span className="title">{props.batman.Title}</span>
      </div>
      <div>
        <span className="year">{props.batman.Year}</span>
      </div>
      <div>
        <span>{props.batman.imdbID}</span>
      </div>
      <div>
        <span>{props.batman.Type}</span>
      </div>
      <div>
        <img src={props.batman.Poster} alt={props.batman.Title} />
      </div>
    </div>
  );
};

export default App;
