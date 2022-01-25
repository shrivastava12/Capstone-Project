import { render, cleanup } from '@testing-library/react';
import KuchBhi from '../Components/KuchBhi';
import Banner from '../Components/Banner';
import Features from '../Components/Features/Features';
import Navs from '../Components/Nav/Navs';

afterEach(cleanup);

it('Loading correctly',() => {
    const { getByText } = render(<KuchBhi />);
    expect(getByText(/music is what tells us that the human race is greater than we realize/i)).toHaveTextContent('Music is what tells us that the human race is greater than we realize');
});

it('Render banner text correctly',() => {
    const {getByTestId} = render(<Banner/>);
    expect(getByTestId('heading1')).toHaveTextContent('MUSIQUE')
})

it('Render feature create text correctly',() => {
    const {getByTestId} = render(<Features/>);
    expect(getByTestId('create')).toHaveTextContent('Create Playlist')
})


it('Render feature Share text correctly',() => {
    const {getByTestId} = render(<Features/>);
    expect(getByTestId('share')).toHaveTextContent('Share')
})


it('Render feature manage text correctly',() => {
    const {getByTestId} = render(<Features/>);
    expect(getByTestId('manage')).toHaveTextContent('Manage Songs')
})

