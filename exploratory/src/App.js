import './App.css';
import AddUser from './components/AddUser';
import DisplayContainer from './containers/DisplayContainer';

function App() {
  const addUserToDb = function(user){
    console.log(user)
  };

  return (
    <div className="App">
      <AddUser addUserToDb={addUserToDb}/>
      <DisplayContainer/>
    </div>
  );
}

export default App;
