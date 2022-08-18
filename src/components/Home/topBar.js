import classes from "./topBar.module.css";
const TopBar = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.logo}>MF Studios</h3>
      <div className={classes.navctn}></div>
    </div>
  );
};
export default TopBar;
