import './App.css';
import {useState} from "react";

const App = () => {
  const [size, setSize] = useState({
    row: 0,
    column: 0,
  });
  const [show, setShow] = useState({
    row: 0,
    column: 0,
      start: 0,
  });
  const [radio, setRadio] = useState(0);

  const handleInput = (e) => {
    setSize({
      ...size, [e.target.name]: e.target.value
    })
  }

  const onClickButton = () => {
    setShow({
      row: parseInt(size.row),
      column: parseInt(size.row),
        start: radio
    })
  }

  const changeBgColor = (i, j) => {
    const el = document.getElementById(`${i}${j}`);
    el.classList.toggle('bg')
  }


  return(
      <div>
          <div>
              <div>Index start</div>
              0 <input type="radio"
                       checked={radio === 0} onChange={() => setRadio(0)}/>
              1 <input type="radio"
                       checked={radio === 1} onChange={() => setRadio(1)}
          />
          </div>
        <div>
          <input type="text" name="row" placeholder="Rows" onChange={handleInput}/>
        </div>
        <div>
          <input type="text" name="column" placeholder="Columns" onChange={handleInput}/>
        </div>
        <div>
          <button onClick={onClickButton} className="go">Go</button>
        </div>
        <div>
          {Array.from({ length: show.row}).map((_, i) => {
            return (
                <div className="row" key={i}>
                  {Array.from({ length: show.column}).map((_, j) => {
                    return (
                        <span onClick={() => changeBgColor(show.start+i, show.start+j)} className="column" id={`${show.start+i}${show.start+j}`} key={j}>
                          {i+show.start}{show.start+j}
                        </span>
                    )
                  })}
                </div>
            )
          })}
        </div>
      </div>
  );
}

export default App;
