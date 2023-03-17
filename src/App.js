import logo from './logo.svg';
import './App.css';
import YoutubeForm from './components/YoutubeForm';
import Newform from './components/Newform';
function App() {
  return (
    <div className="App">
  {/* <YoutubeForm/> */}
  <div className='container mt-3'>
<div className='row'>
    <div className='col-md-5'>
    <Newform/>  
    </div>
</div>
   </div>

    </div>
  );
}

export default App;
