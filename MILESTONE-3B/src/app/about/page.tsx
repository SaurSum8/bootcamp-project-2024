export default function contactMe() {
  return (
    <div>
      <h1 className="page-title">Contact Me</h1>
      <form id="contact-form" className="cform">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" required />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <br />
        <label htmlFor="select">Reason For Contact</label>
        <select id="select" name="select">
          <option value="question">Question</option>
          <option value="offer">Offer</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />
        <label htmlFor="query">Query</label>
        <textarea
          id="query"
          name="query"
          placeholder="Type Here"
          required
        ></textarea>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
