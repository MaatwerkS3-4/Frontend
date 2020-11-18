import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import CreatePost from './createPost'
import { act } from 'react-dom/test-utils';
import ReactTestUtils from 'react-dom/test-utils';
import * as Enzyme from 'enzyme';
import { shallow, mount} from 'enzyme';
import PostList from './postList';
import HomeScreen from './homeScreen'
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
let container = null;

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("<CreatePost />", () => {
    it('renders without crashing', () => {
      ReactDOM.render(<CreatePost />, container);
    });
})
describe("<HomeScreen />", () => {
  it('renders without crashing', () => {
    ReactDOM.render(<HomeScreen />, container);
  });
})
describe("<PostList />", () => {
  it('renders without crashing', () => {
    ReactDOM.render(<PostList />, container);
  });
})