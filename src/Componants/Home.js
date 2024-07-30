import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="https://github.com/vigneshbalan-mvgs" target="_blank">
        <i class="fa-brands fa-github"></i>
      </Link>
      <Link to="https://www.linkedin.com/in/vignesh-balan-mvgs" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
      </Link>
    </div>
  );
}

export default Home;
