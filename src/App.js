import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Dashboard from "./layouts/Dashboard"
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div> 
      {/* <div className="App">
        <Navi/>
      </div>        */}
      <Container className="main">  
        <Dashboard/>    
      </Container>   
    </div>
  );
}

export default App;
