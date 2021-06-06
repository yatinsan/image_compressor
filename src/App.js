import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page">
        <h3>IMAGE COMPRESS</h3>
        <form action="" className="input">
          <input className="fullwid" type="number" placeholder="quality of image" name="" id="" min='10' max='100' step='10' />
          <input className="fullwid" type="number" placeholder="width resolution" name="" id="" min='10' max='100' step='10' />
          <input className="fullwid" type="number" placeholder="height resolution" name="" id="" min='10' max='100' step='10' />
          <input className="form-control" type="file" name="" id="" />
          <div className="center"><button className='sb-Btn'><i class="bi bi-box-arrow-in-down"></i></button></div>
        </form>
      </div>
    </div>
  );
}

export default App;
