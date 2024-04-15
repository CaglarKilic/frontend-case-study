/* eslint-disable no-param-reassign */
import { useLoaderData, Form } from "react-router-dom";

export default function Offer() {
  const data = useLoaderData();

  function handleClick(event) {
    event.target.textContent = "Thank you for your message!";
    event.target.disabled = true;
  }

  return (
    <section className="offer">
      <h1>Company Letterhead</h1>
      <h4>Dear {data.name},</h4>
      <p>
        We are pleased to extend this formal offer of employment for the
        position of {data.role} at {data.organization}. We were impressed with
        your skills and experience, and we believe that you will make a valuable
        addition to our team.
      </p>
      <p>Here are the details of the offer:</p>
      <p>
        <strong>Role: </strong>
        {data.role}
      </p>
      <p>
        <strong>Team: </strong>
        {data.team}
      </p>
      <p>
        <strong>Organization: </strong>
        {data.organization}
      </p>
      <h4>Compensation Package:</h4>
      <ul>
        {data.compensation.split("\n").map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
      <h4>Benefits:</h4>
      <ul>
        {data.benefits.split("\n").map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
      <h4>Responsibilities:</h4>
      <ul>
        {data.responsibilities.split("\n").map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
      <p>
        If you accept this offer, please sign and return this letter. We look
        forward to welcoming you to the {data.organization}. We are excited
        about the contributions you will make.
      </p>
      <p>
        If you have any questions or need further clarification, please feel
        free to fill out the message form at the bottom of this letter.
      </p>
      <Form method="patch">
        <label htmlFor="message">
          Reply:
          <textarea
            name="message"
            rows="5"
            placeholder="Feel free to ask us anything..."
            defaultValue={data.message}
          />
        </label>
        <button type="submit" onClick={handleClick}>
          Send
        </button>
      </Form>
    </section>
  );
}
