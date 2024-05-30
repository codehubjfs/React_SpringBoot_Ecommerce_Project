import { Modal, Button } from 'react-bootstrap';
// import Lottie from 'react-lottie';
import approvedGif from '../../../assets/approve.gif'
const SuccessModal = ({ show, handleClose }) => {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="text-center">
        <img src={approvedGif} alt="Approved GIF" style={{ width: '100%', maxHeight: '100px', objectFit: 'contain' }} />
          <h4>Details saved successfully!</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  export default SuccessModal;