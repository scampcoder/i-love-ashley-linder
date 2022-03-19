import './App.css';
import Compliment from './components/ComplimentComponent';
import blueborder from './bluetopborder.png'

function App() {
  return (
    <div className="App">
    <img src={blueborder} alt="" className='blue-border'/>
      <div className='body-box'>
      <Compliment />
      </div>
    </div>
  );
}

export default App;
