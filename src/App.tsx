import Signup from "./components/Signup";
import { FormContextProvider } from "./contexts/FormContext";

function App() {
  return (
    <>
      <FormContextProvider>
        <Signup />
      </FormContextProvider>
    </>
  );
}

export default App;
