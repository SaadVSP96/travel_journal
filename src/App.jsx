import data from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Card />
            </div>
        </>
    );
}

export default App;
