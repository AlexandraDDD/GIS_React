import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { CommandBar } from "./components/CommandBar";
import MapBox from "./components/MapBox";
import { Properties } from "./components/Properties";
import AppRouter from './AppRouter';
import MyNavbar from './components/navbar';
import { SidebarContextProvider } from './context/SidebarContext';

function App() {
	return (
		<SidebarContextProvider>
			  <BrowserRouter >
				<MyNavbar />
				<AppRouter />
			</BrowserRouter>
			  </SidebarContextProvider>
	);
}

export default App;
