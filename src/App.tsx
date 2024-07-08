import { BrowserRouter } from 'react-router-dom';
import './App.css';

import AppRouter from './AppRouter';
import MyNavbar from './components/navbar';
import { SidebarContextProvider } from './context/SidebarContext';



function App() {
	return (
		<div className='App'>
			 <SidebarContextProvider>
			  <BrowserRouter >
				<MyNavbar />
				<AppRouter />
			</BrowserRouter>
			  </SidebarContextProvider>
		
		</div>
	);
}

export default App;
