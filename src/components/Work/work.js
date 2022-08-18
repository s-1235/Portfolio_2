import "./work.css";
import ProjectCard from "../ProjectCard/projectCard";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Work = () => {
  const projects = [
    {
      title: "Propal",
      description:
        "Hello Popeye the Seller Man!! Hello Popeye the Seller Man!! Hello Popeye the Seller Man Hello Popeye the Seller Man!",
      budget: 850,
      image: "./assets/images/back1.jpg",
      info: {
        frontend: "ReactJs",
        backend: "NodeJs, Mongo DB, Express, Mongoose",
        length: "2 Months",
        link: "#",
      },
    },
    {
      title: "Lost and Found",
      description:
        "Hello Popeye the Seller Man!! Hello Popeye the Seller Man!! Hello Popeye the Seller Man Hello Popeye the Seller Man!",
      budget: 450,
      image: "./assets/images/back1.jpg",
      info: {
        frontend: "ReactJs",
        backend: "Firebase, PHP",
        length: "2 Months",
        link: "#",
      },
    },
    {
      title: "Lost and Found",
      description:
        "Hello Popeye the Seller Man!! Hello Popeye the Seller Man!! Hello Popeye the Seller Man Hello Popeye the Seller Man!",
      budget: 450,
      image: "./assets/images/back1.jpg",
      info: {
        frontend: "ReactJs",
        backend: "Firebase, PHP",
        length: "2 Months",
        link: "#",
      },
    },
    {
      title: "Lost and Found",
      description:
        "Hello Popeye the Seller Man!! Hello Popeye the Seller Man!! Hello Popeye the Seller Man Hello Popeye the Seller Man!",
      budget: 450,
      image: "./assets/images/back1.jpg",
      info: {
        frontend: "ReactJs",
        backend: "Firebase, PHP",
        length: "2 Months",
        link: "#",
      },
    },
  ];
  const slideTop = () => {
    var slider = document.getElementById("PropertySlider");
    slider.scrollTop = slider.scrollTop + 500;
  };

  const slideDown = () => {
    var slider = document.getElementById("PropertySlider");
    slider.scrollTop = slider.scrollTop - 500;
  };
  return (
    <div class="workctn" id="Work">
      <p class="header">Dig Into My Projects World</p>
      <AnimationOnScroll
        animateIn="animate__shakeY"
        animateOut="animate__bounceOutLeft"
      >
        <div class="scrolldown1" onClick={slideTop}>
          <div class="chevrons1">
            <div class="chevrondown1"></div>
            <div class="chevrondown12"></div>
          </div>
        </div>
      </AnimationOnScroll>
      {/* <ProjectCard
        title={projects[0].title}
        description={projects[0].description}
        budget={projects[0].budget}
        image={projects[0].image}
        info={projects[0].info}
      /> */}
      <div id="PropertySlider">
        {projects.map((el) => (
          <ProjectCard
            title={el.title}
            description={el.description}
            budget={el.budget}
            image={el.image}
            frontend={el.info.frontend}
            backend={el.info.backend}
            length={el.info.length}
            link={el.info.link}
          />
        ))}
      </div>
      <AnimationOnScroll
        animateIn="animate__shakeY"
        animateOut="animate__bounceOutRight"
      >
        <div class="scrolldown2" onClick={slideDown}>
          <div class="chevrons2">
            <div class="chevrondown2"></div>
            <div class="chevrondown2"></div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};
export default Work;
