function Newsletter() {
  return (
    <section className="newsletter">
      <h3>Newsletter</h3>
      <p>Stay update with our latest</p>
      <form>
        <input type="text" placeholder="Email"></input>
        <input type="submit" value="Subscribe"></input>
      </form>
    </section>
  );
}

export { Newsletter };
