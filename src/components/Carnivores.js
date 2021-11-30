import dataDinos from "../data/dinosaurs";
import "./Dinosaurs.css";

const Carnivores = () => {
  const dinos = dataDinos
    .filter((dino) => dino.carnivore)
    .map((dinosaur) => {
      const { name, weight, image, carnivore } = dinosaur;
      return (
        <div>
          <img className="dino-image" src={image} alt={name} />
          <div>Name: {name}</div>
          <div>Weight: {weight} tons</div>
          <div>{carnivore ? "Carnivore" : "Herbivore"}</div>
        </div>
      );
    });

  return <div className="dinosaur-item-container">{dinos}</div>;
};

export default Carnivores;
