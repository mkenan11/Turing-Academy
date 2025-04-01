import { CardWrapper } from "./Components/CardWrapper/CardWrapper";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { NelerEdirik } from "./Components/NelerEdirik/NelerEdirik";
import { Ustunluk } from "./Components/Ustunluk/Ustunluk";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <CardWrapper />
      <Ustunluk />
      <NelerEdirik />
    </>
  );
}

export default App;
