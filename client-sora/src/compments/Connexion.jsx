function Connexion() {
  const handleConnexion = (event) => {
    event.preventDefault();
    console.log("Connexion");
  };
  return (
    <form>
      <label htmlFor="email">Email : </label>
      <input type="text" id="email" />
      <label htmlFor="password">Password : </label>
      <input type="password" id="password" />
    </form>
  );
}

export { Connexion };
