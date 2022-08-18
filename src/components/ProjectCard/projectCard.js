import "./projectCard.css";
const ProjectCard = (props) => {
  return (
    <div id="container">
      <div class="product-details">
        <h1>{props.title}</h1>
        <span class="hint-star star">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-o" aria-hidden="true"></i>
        </span>
        <p class="information">{props.description}</p>
        <div class="control">
          <button class="btn">
            <span class="price">Budget</span>
            <span class="shopping-cart">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            <span class="buy">${props.budget}</span>
          </button>
        </div>
      </div>

      <div class="product-image">
        <img src={props.image} alt="" />

        <div class="info">
          <h2>Project Details</h2>
          <ul>
            <li>
              <strong>Frontend :</strong>
              {props.frontend}{" "}
            </li>
            <li>
              <strong>Backend : </strong>
              {props.backend}
            </li>
            <li>
              <strong>Project Length: </strong>
              {props.length}
            </li>
            <li>
              <strong>Github Repository: </strong>
              <a class="link" href={props.link}>
                Open Code
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
