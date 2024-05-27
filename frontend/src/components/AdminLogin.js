// import { LoginForm, NewCustomerSection } from "../components/sigin";
import { Container, Row, Col } from "react-bootstrap";
import { LoginFormAdmin } from "./LoginFormAdmin";

function AdminLogin() {
  return (
    <div className="box-container" style={{ marginTop: "80px" }}>
      <h1 className="page-heading">SIGN IN</h1>
      <Container>
        <Row>
          <Col lg={6}>
            <LoginFormAdmin />
          </Col>
          {/* <NewCustomerSection /> */}
        </Row>
      </Container>
    </div>
  );
}

export default AdminLogin;
