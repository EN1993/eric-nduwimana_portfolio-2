import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import image1 from "../images/project-exam2Pic.jpg";
import image2 from "../images/js-frameworks-ca-pic.jpg";
import image3 from "../images/semeste-project2Pic.jpg";

function CardsGroup() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={image1} />
        <Card.Body>
          <Card.Title>Project Exam 2</Card.Title>
          <Card.Text>
            In project exam 2, I had to plan, design and code a website for a
            B&B's tourist industry. In this website, I should, among other
            things, have both an admin page and a visitor page.
            <br />
            <a href="https://greatings.netlify.app/">View Site Live</a>
            <br />
            <a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-en1993">
              Git Code Link
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={image2} />
        <Card.Body>
          <Card.Title>JS Frameworks CA</Card.Title>
          <Card.Text>
            In the Javascript Course Assignment, I was supposed to code a
            website by having found an API address on my own that had not been
            used in lessons. Among other things, I was going to create a contact
            page using the react hook form. This web page is not displayed
            online.
            <br />
            <a href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-en1993">
              Git Code Link
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={image3} />
        <Card.Body>
          <Card.Title>Semester Project 2</Card.Title>
          <Card.Text>
            In the semester 2 project I had to plan, design and code an online
            shoe store. Among other things, there was to be an admin page where
            the administrator could establish new items and edit existing items.
            This web page is not displayed online
            <br />
            <a href="https://github.com/EN1993/eric-nduwimana-semester-project-2">
              Git Code Link
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default CardsGroup;
