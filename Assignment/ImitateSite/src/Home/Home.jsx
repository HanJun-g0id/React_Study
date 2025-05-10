import './Home.css';
//import { useNavigate } from 'react-router-dom';

function Home() {
  //const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h2>TEST TEXT</h2>
    </div>
  );
}

export default Home;
