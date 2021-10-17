import './App.css';
import HomeInit from "./components/home/homeInit";
import {useDispatch} from "react-redux";
import {setThemePage} from "./redux/reducers/themefunctions";

function App() {
    const dispatch = useDispatch();
    setThemePage(dispatch)
  return (
    <div>
      <HomeInit/>
    </div>
  );
}

export default App;
