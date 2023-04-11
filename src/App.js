import './App.css';
import './styles/Main.css'
import './styles/Form.css'

function App() {
  return (
    <div className="main">
      <header className="main-header" >
      <div className = "form-box">
        <h5 className = "form-step"> Ski Check-in </h5>
        <form>
            <div className = "field1">
            <label> customer info </label>
            <input placeholder="Name"/>        
            <input placeholder="Phone 000-000-0000"/>
            <input placeholder="E-mail"/>
            <textarea placeholder="Ski info"/>
            <textarea placeholder="Boot info"/>
            <textarea placeholder="Binding info"/>
            </div>

            <button type = "submit" id= "submitBtn" className = "submitBtn"> submit</button>
        </form>

    </div>
      </header>
      
    </div>
  );
}

export default App;
