import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Footer from './Footer'

function App() {

 


  return (
    <div className="app">
      <Header/>

    
        <div className="app_body">
          <Sidebar/>
          <Feed/>
          <Widgets/>
          <Footer/>
        </div>
      

      </div>

        
  );
}

export default App;
