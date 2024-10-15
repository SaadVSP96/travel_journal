import data from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

// console.log(data);
function App() {
    const cards = data.map((item) => {
        return <Card key={item.id} {...item} />;
    });
    return (
        <>
            <Navbar />
            <div className="container">{cards}</div>
        </>
    );
}

export default App;
