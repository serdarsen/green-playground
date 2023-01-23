import FormView from './FormView';
import HelloView from './HelloView';

const App: React.FC = () => {
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center">
			<HelloView />
			<FormView />
		</div>
	);
};

export default App;
