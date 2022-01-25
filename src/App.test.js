// import { render, screen } from '@testing-library/react';
// import App from './App';

import renderer from 'react-test-renderer';
import Home from './Pages/Home';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Home',() => {
  test('Render home correctly',() => {
    const tree =  renderer.create(<Home/>)
    expect(tree).toMatchSnapshot();
  })
})