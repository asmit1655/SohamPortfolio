import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Project from "./Components/Project";
import { useEffect } from "react";
import "./style/app.scss";
import "./style/landing.scss";
import "./style/project.scss";
import "./style/footer.scss";
import "./style/experience.scss";
import "./style/misc.scss";
import Experience from "./Components/Experience";
import Misc from "./Components/Misc";
function App() {
  const dotCursor = (e) => {
    const cursor =document.querySelector(".cursor")
    console.log(e);
    cursor.style.top = `${e.pageY -14}px`;
    cursor.style.left = `${e.pageX -14}px`;
    const element = e.target;
    if(element.getAttribute("data-cursorpointer")){
      cursor.classList.add("cursorHover")
    }
    else{
      cursor.classList.remove("cursorHover")
    }
  }
  useEffect(() => {
    window.addEventListener("mousemove", dotCursor)
    return () => {
      window.removeEventListener("mousemove", dotCursor)
    }
  }, [])
  return (
    <div>
      <Landing />
      <Project />
      <Experience />
      <Footer />
      <Misc />
    </div>
  );
}

export default App;
