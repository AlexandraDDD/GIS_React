import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { CommandBar } from "./components/CommandBar";
import MapBox from "./components/MapBox";
import { Properties } from "./components/Properties";
import AppRouter from './AppRouter';
import MyNavbar from './components/navbar';

function App() {
	return (
		<BrowserRouter >
		<MyNavbar/>
		<AppRouter/>
		</BrowserRouter>
		
	);
}

export default App;
