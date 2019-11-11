import Siphan from './app/export.js'

const App = new Siphan();

App.__proto__.new = function() {
	return new Siphan();
}

export default App
