import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="main">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;