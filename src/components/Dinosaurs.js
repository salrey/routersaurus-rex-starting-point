import dataDinos from "../data/dinosaurs";
import "./Dinosaurs.css";

const Dinosaurs = () => {
  const dinos = dataDinos.map((dinosaur) => {
    const { name, weight, image, carnivore } = dinosaur;
    return (
      <div key={name}>
        <img className="dino-image" src={image} alt={name} />
        <div>Name: {name}</div>
        <div>Weight: {weight} tons</div>
        <div>{carnivore ? "Carnivore" : "Herbivore"}</div>
      </div>
    );
  });

  return <div className="dinosaur-item-container">{dinos}</div>;
};

export default Dinosaurs;
