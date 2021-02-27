import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="box">
        <Movies
          title="The Cotton Club"
          releaseYear="1984"
          director="Francis Ford Coppola"
          actor="Richard Gere, Gregory Hines, Diane Lane, Lonette McKee"
          image="https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
          plot="The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous."
        />
        <Movies
          title="Crocodile Dundee"
          releaseYear="1986"
          director="Peter Faiman"
          actor="Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil"
          image="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
          plot="An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City."
        />
        <Movies
          title="Ratatouille"
          releaseYear="2007"
          director="Brad Bird, Jan Pinkava"
          actor="Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy"
          image="https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
          plot="A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant."
        />
      </div>
      <div className="box">
        <Movies
          title="City of God"
          releaseYear="2002"
          director="Fernando Meirelles, Kátia Lund"
          actor="Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva"
          image="https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"
          plot="Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer."
        />
        <Movies
          title="Stardust"
          releaseYear="2007"
          director="Matthew Vaughn"
          actor="Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly"
          image="https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
          plot="In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm."
        />
        <Movies
          title="Apocalypto"
          releaseYear="2006"
          director="Mel Gibson"
          actor="Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead"
          image="https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"
          plot="As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate."
        />
      </div>
      <div className="box">
        <Movies
          title="No Country for Old Men"
          releaseYear="2007"
          director="Ethan Coen, Joel Coen"
          actor="Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson"
          image="https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"
          plot="Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande."
        />
        <Movies
          title="The Third Man"
          releaseYear="1949"
          director="Carol Reed"
          actor="Joseph Cotten, Alida Valli, Orson Welles, Trevor Howard"
          image="https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg"
          plot="Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime."
        />
        <Movies
          title="The Beach"
          releaseYear="2000"
          director="Danny Boyle"
          actor="Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen"
          image="https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jp"
          plot="Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it."
        />
      </div>
    </div>
  );
}
export default App;
