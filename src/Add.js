import {Modal,Button} from 'react-bootstrap'
import {useState}from 'react'
import './App.css';
function AddFilm(addF){
    
    const [show, setShow] = useState(false);
    const [newMovies, setnewMovies] = useState();

    const handlChange= (e) => {
        setnewMovies({...newMovies,[e.target.name]:e.target.value})
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{display:'flex', flexDirection:'column'}}>
              title:<input name='title' onChange={handlChange}/>
              description:<input name='description' onChange={handlChange}/>
              posterUrl:<input name='posterUrl' onChange={handlChange}/>
              rate:<input name='rate' onChange={handlChange}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>addF()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 
export default AddFilm