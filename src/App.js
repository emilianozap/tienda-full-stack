
import { Footer } from "./components/Footer/Footer";
import { Layout } from "./components/layout/Layout";
import { NavBar } from "./components/navBar/NavBar";
import Routes from "./routes/Routes";

function App() {
  return (
    <Layout>
    <NavBar/>
    <Routes/>
    <Footer></Footer>
    </Layout>
  );
}

export default App;
