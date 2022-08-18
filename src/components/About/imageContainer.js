import classes from "./imageContainer.module.css";
const ImageContainer = () => {
  return (
    <div className={`${classes.imgcnt}`}>
      <img className={classes.img} src="./assets/images/iambyme(2).jpg" />
    </div>
  );
};
export default ImageContainer;
