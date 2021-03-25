import "./App.css";

function Box(props) {
  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
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
        <Box name="Ron Weasly" age="16" title="Student" />
        <Box name="Harry Potter" age="15" title="Student" />
        <Box name="Hermion Granger" age="16" title="Student" />
      </main>
      <footer>
        <p>copyright</p>
      </footer>
    </div>
  );
}

export default App;
