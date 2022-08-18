import TopBar from "./topBar.js";
import classes from "./home.module.css";
import SideBar from "./sideBar.js";
// import navBar from "./navBar.js";
const Home = () => {
  return (
    <div className={classes.home} id="Home">
      <TopBar />
      <SideBar />
      <div className={classes.heading}>
        <h1 className={classes.heading1}>
          <p className={classes.heading4}>MF </p>
          <a className={classes.heading3}>
            <span>Programming &</span>
          </a>
        </h1>
        <br />
        <h1 className={classes.heading2}>Development Studio</h1>
      </div>
    </div>
  );
};
export default Home;
