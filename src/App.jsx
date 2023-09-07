import './App.scss';
import 'normalize.css';
import axios from 'axios';

function SampleButton() {
  const sample = async () => {
    // const response = await axios.get('http://localhost:8080/hello');
    const response = await axios.get('/hello');
    console.log(response.data);
  };

  return (
    <div>
      <button type="button" onClick={sample}>
        {' '}
        API 테스트 샘플
      </button>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{process.env.REACT_APP_SAMPLE}</p>
        <SampleButton />
      </header>
    </div>
  );
}

export default App;
