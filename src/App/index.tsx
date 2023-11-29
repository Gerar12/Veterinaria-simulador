import UI from "./UI";
import { AppProvider } from "../Logic/AppContext";
const App = () => {
  return (
    <>
      <AppProvider>
        <UI />
      </AppProvider>
    </>
  );
};

export default App;
