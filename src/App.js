import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from "./components/EventsCreate/Events";
import Foods from "./FoodOrder/Foods";

function App() {
 
  return (
    <div className="container-fluid">
      {/* <Events/> */}
      <Foods/>
      {/* <Calender /> */}
    </div>
  );
}

export default App;
