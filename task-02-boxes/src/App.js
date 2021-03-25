import "./App.css";

function Box() {
  return (
    <div className="box">
      <h2>Name: component</h2>
      <p>Age: some age</p>
      <p>Title: some title</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Logo</h1>
      </header>
      <main>
        <Box />
        <Box />
        <Box />
      </main>
      <footer>
        <p>copyright</p>
      </footer>
    </div>
  );
}

export default App;
