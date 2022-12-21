import { Heading } from '../../components/Heading';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper >
    <Heading> texto de teste</Heading>
     {/* <h1>hello</h1> */}
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
