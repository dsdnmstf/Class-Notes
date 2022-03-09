import { Card,ListGroupItem, ListGroup } from "react-bootstrap";
const Students = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-success">
      <h2 className="text-danger text-center">Our Students</h2>
      <div className="container-fluid  mb-5 d-flex justify-content-center text-center gap-3">
        {data.map((item) => {
          const { id, name, job, company, img } = item;
          return (
            <Card key={id} style={{ width: "15rem" }}>
              <Card.Img
                style={{ width: "100%", height: "18rem" }}
                variant="top"
                src={img}
              />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>JOB: {job}</ListGroupItem>
                <ListGroupItem>He works at {company}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">About him</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Students;
