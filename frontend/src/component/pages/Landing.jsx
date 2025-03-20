
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1A3636, #264747);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;
`;

export default function Landing() {
  return (
    <Container>
      <Title>Find Your Dream Job with Jobify!</Title>
      <p>Sign up to explore jobs, track trends, and build skills.</p>
    </Container>
  );
}
