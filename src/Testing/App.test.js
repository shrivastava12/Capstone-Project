import {cleanup, render} from '@testing-library/react';
import Home from '../Pages/Home';
import renderer from 'react-test-renderer';
import Contact from '../Pages/Contact';

afterEach(cleanup);

it('Creating home Snapshot',() => {
  const tree =  renderer.create(<Home/>).toJSON();
  expect(tree).toMatchSnapshot();
})

it('Creating Contact SnapShot',() => {
  const tree =  renderer.create(<Contact/>).toJSON();
  expect(tree).toMatchSnapshot();
})


