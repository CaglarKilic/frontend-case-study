import { Form } from "react-router-dom";

export default function CreateOffer() {
  return (
    <Form method="post" action="/offers" className="form">
      <label htmlFor="name">
        Candidate&apos;s Name
        <input type="text" name="name" />
      </label>
      <label htmlFor="role">
        Role
        <input type="text" name="role" />
      </label>
      <label htmlFor="team">
        Team
        <input type="text" name="team" />
      </label>
      <label htmlFor="organization">
        Organization
        <input type="text" name="organization" />
      </label>
      <label htmlFor="compensation">
        Compensation
        <textarea name="compensation" rows="5" />
      </label>
      <label htmlFor="benefits">
        Benefits
        <textarea name="benefits" rows="5" />
      </label>
      <label htmlFor="responsibilities">
        Responsibilities
        <textarea name="responsibilities" rows="5" />
      </label>
      <button type="submit">Create Offer</button>
    </Form>
  );
}
