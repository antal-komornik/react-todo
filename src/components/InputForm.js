import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const InputForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Add New Task</Form.Label>
          <Form.Control type="task" placeholder="Enter new task" />
        </Form.Group>

        <Button variant="primary" type="submit">
          ADD
        </Button>
      </Form>
    </div>
  );
};

export default InputForm;
