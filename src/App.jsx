import { useEffect } from "react";
import Layout from "./Layout"

const App = () => {

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <Layout />
    </>
  )
}

export default App
