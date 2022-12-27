import { renderTheme } from '../../styles/render-theme';
import Home from './App';


describe('<Home/>',()=>{
  it('should render home', () => {
    renderTheme(<Home />);
  })

});
