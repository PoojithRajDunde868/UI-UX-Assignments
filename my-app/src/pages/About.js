import { useMatch } from 'react-router-dom';

const About = () => {
  const match = useMatch('/about');
  return (
    <>
      <h2>About This App</h2>
      {match && <p>You are exactly on the /about page</p>}
    </>
  );
};
export default About;
