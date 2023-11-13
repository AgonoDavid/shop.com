import "./App.css";
import Layout from "./components/Layout";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Layout />
      </div>
    </ChakraProvider>
  );
}

export default App;
