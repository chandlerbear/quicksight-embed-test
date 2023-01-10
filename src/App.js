import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>Embedding an iframe</h1>
      <iframe
        width="960"
        height="720"
        src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/249689120119/dashboards/8cfe38df-f60a-418b-93f1-9c47a4937916?directory_alias=bear-cognition"
      >
      </iframe>
    </>
  );
}

export default App;
