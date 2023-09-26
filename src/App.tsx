import Signup from "./components/Signup";
import { FormContextProvider } from "./contexts/FormContext";
import { InputErrorContextProvider } from "./contexts/InputErrorContext";

function App() {
  return (
    <>
      <FormContextProvider>
        <InputErrorContextProvider>
          <Signup />
        </InputErrorContextProvider>
      </FormContextProvider>
    </>
  );
}

export default App;
