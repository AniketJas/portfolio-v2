import { useEffect } from "react";
import Layout from "./Layout"
import { Toaster } from "react-hot-toast";

const App = () => {

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "text-sm",
          duration: 4000,
        }}
      />
      <Layout />
    </>
  )
}

export default App
