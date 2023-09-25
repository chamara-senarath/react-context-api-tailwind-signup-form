import SignupForm from "./components/SignupForm";
import { FormContextProvider } from "./contexts/FormContext";

function App() {
  return (
    <>
      <FormContextProvider>
        <SignupForm />
      </FormContextProvider>
    </>
  );
}

export default App;
