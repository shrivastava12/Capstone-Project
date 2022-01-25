import {cleanup, render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../Components/Footer'
afterEach(cleanup);


it('creating snapShot of Footer',() => {
    const tree =  renderer.create(<Footer/>).toJSON();
    expect(tree).toMatchSnapshot();
})

it('Render footer service text correctly',() => {
    const {getByTestId} =  render(<Footer/>);
    expect(getByTestId('service')).toHaveTextContent('Service')
})

it('Render footer contact text correctly',() => {
    const {getByTestId} =  render(<Footer/>);
    expect(getByTestId('contact')).toHaveTextContent('Contact Us')
})