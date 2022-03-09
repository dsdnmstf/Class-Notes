import Card from "react-bootstrap/Card";
const CourseCard = ({ data }) => {
  return (
    <div className="container-fluid d-flex  bg-dark  gap-4 p-5 ">
    
      {data.map((item) => {
        const { id, name, text, img } = item;
        return (
          <Card className="col text-center" key={id} style={{ width: "180px" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{text}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default CourseCard;
