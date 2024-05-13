import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex ">
        <Header name="John Carlo Yhapon" />
        <Navbar navbar={["Overview", "Skills", "Projects", "Contact"]} />
      </div>
    </>
  );
}

export default App;
