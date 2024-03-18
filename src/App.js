import './App.css';
import Home from '../src/Components/Home/Home'
import About from './Components/About/About'
import FAQSection from './Components/FAQS/faqs'
import Team from './Components/Team/Team'
import NavBar from './Components/navbar/navbar'
// import Sponsor from './Components/Sponsors/Sponsors' 
import Footer from './Components/footer/footer'
import Contact from './Components/contact/contact'
import Roadmap from "./Components/Roadmap/Roadmap"
import Chatbot from './Components/Chatbot/Chatbot';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About />
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <FAQSection/>
      <Team />
      
      {/* <Sponsor/> */}
      <Contact/>
     
      <Footer/>
    </div>
  );
}

export default App;
