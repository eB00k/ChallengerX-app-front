import { ContextProvider } from "./context/ContextProvider";
import Routes from "./routes/Routes";

function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}

export default App;
