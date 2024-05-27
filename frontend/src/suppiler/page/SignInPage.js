import { LoginForm, NewCustomerSection } from "../Components/LoginForm";
import { Container, Row, Col } from 'react-bootstrap';

function SignInPage() {
    return (
      <div className="box-container">
        <h1 className="page-heading">SIGN IN</h1>
        <Container>
          <Row>
            <Col lg={6}>
              <LoginForm />
            </Col>
            <NewCustomerSection />
          </Row>
        </Container>
      </div>
    );
  }
  
  export default SignInPage;