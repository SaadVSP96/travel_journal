import data from "./data";

function App() {
    const cards = data.map((item) => {
        return <Card key={item.id} {...item} />;
    });
    return <></>;
}

export default App;
