import { Modal, Form, Button, Card, Toast, ToastContainer } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updatePrimeStatus } from "../slices/CustomerSlice"; 
import { useState } from "react";

function PackageCard({ label, id, onSelectPackage }) {
  return (
    <Card
      style={{
        flexBasis: "calc(33.33% - 10px)",
        marginBottom: "10px",
        backgroundSize: "cover",
        color: "black",
      }}
    >
      <Card.Body>
        <Form.Check
          type="radio"
          label={<span style={{ fontWeight: "bold" }}>{label}</span>}
          name="package"
          id={id}
          onChange={() => onSelectPackage(id)}
          style={{ color: "black" }}
        />
      </Card.Body>
    </Card>
  );
}

function GetPrimeModal(props) {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const customer = useSelector((state) => state.customers.customer); // Get customer from store
  const dispatch = useDispatch(); // Initialize dispatch

  const packageDetails = {
    primeMonthly: { label: "Prime Monthly - Rs399/mo.", amount: 39900 },
    primeAnnual: { label: "Prime Annual - Rs1599/yr.", amount: 159900 },
    primeAccess: { label: "Prime Access - Rs599/mo.", amount: 59900 },
  };

  const handleSelectPackage = (id) => {
    setSelectedPackage(packageDetails[id]);
  };

  const completePayment = async () => {
    setShowToast(true);
    props.onHide();
  };

  const proceedToPayment = async () => {
    if (!selectedPackage) {
      alert("Please select a package");
      return;
    }

    const { amount } = selectedPackage;

    const options = {
      key: "rzp_test_s9a7uBWwg11rpX",
      amount: amount, // Amount should be in paise
      currency: "INR",
      name: "Horizon",
      description: "Product Purchase",
      prefill: {
        name: "Sivasankar",
        email: "2k20eee34@kiot.ac.in",
        contact: "8248452359",
      },
      notes: {
        address: "kumaran street",
      },
      theme: {
        color: "#3399cc",
      },
      handler: async (response) => {
        // Handle success
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        dispatch(updatePrimeStatus({ id: customer.id, prime: true }));

        await completePayment();
      },
      modal: {
        ondismiss: () => {
          // Handle payment dismissal
          alert("Payment dismissed!");
        }
      }
    };

    if (window.Razorpay) {
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } else {
      alert("Razorpay SDK failed to load. Are you online?");
    }
  };

  return (
    <>
      <Modal show={true} centered onHide={props.onHide}>
        <Modal.Header>
          <Modal.Title>Get Prime Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="packageRadio">
              <Form.Label>Choose Package</Form.Label>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {Object.keys(packageDetails).map((key) => (
                  <PackageCard
                    key={key}
                    label={packageDetails[key].label}
                    id={key}
                    onSelectPackage={handleSelectPackage}
                  />
                ))}
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={proceedToPayment}>
            Proceed to Payment
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" className="p-3">
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={10000} autohide>
          <Toast.Header>
            <strong className="me-auto">Payment Success</strong>
          </Toast.Header>
          <Toast.Body>Prime membership activated successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default GetPrimeModal;
