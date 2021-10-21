import Nav from "./../components/Nav";

const Home = ({ children }) => {
  return (
    <section>
      <Nav />
      {children}
    </section>
  );
};

export default Home;
