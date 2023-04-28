import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const InputForm = () => {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const t = event.target.taskField.value;
    setTask( task=t );

    // event.target.reset();
    // console.log(task);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Add New Task</Form.Label>
          <Form.Control
            id="taskField"
            type="task"
            placeholder="Enter new task"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          ADD
        </Button>
      </Form>

      <h1>{task} </h1>
    </div>
  );
};

export default InputForm;
