import './App.css'
import Header from '/src/components/Header'
import Gallery from '/src/components/Gallery'
import Data from '/src/assets/data.json'


function App() {

  return (
    <div>
      <h1>Lab 03</h1>
           <section id="grid">
           <div id="image-grid">
        {Data.map((item) => ( 
          <div key={item._id}>
            <img src={item.image_url} alt={item.title}/>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Keyword: {item.keyword}</p>
            <p>Horns: {item.horns}</p>
          </div>
        ))};
        </div>
      </section> 
    </div> //end of top div
  );
}

export default App
