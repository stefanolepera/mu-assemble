import { BrowserRouter as Router } from "react-router-dom";
import { MainWrapper, GlobalStyle } from './App.style';
import Routes from "./Router/Routes";

const App = () => {
  return (
	<MainWrapper>
		<GlobalStyle />
		<Router>
			<Routes />
		</Router>
	</MainWrapper>
  );
}

export default App;
