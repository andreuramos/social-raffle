import './App.css';
import Button from "./Shared/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p className="App-title">InstaRaffler</p>
          <p className="App-description">Description of what this application does with some fancy words that makes people want to click on the START button.</p>
      </header>
        <main className="App-main">
            <Button
                text="Start"
            />
      </main>
    </div>
  );
}

export default App;
