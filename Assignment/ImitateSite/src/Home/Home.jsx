import './Home.css';
import HomeHeader from '../Header/HomeHeader';

function Home({profileImg}) {
  
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
        <HomeHeader profileImg={profileImg} />
        <h2 className="home-h4">DEV RACE를 이용해서</h2>
        <h1 className="home-h2">친구들과 함께 백준 문제를 풀어봐요!</h1>
        <button className="home-start-btn">시작하기</button>
    </div>
  );
}

export default Home;
