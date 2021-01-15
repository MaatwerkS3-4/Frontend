import React from 'react';
import ReactDOM, {unmountComponentAtNode} from "react-dom";
import CreatePost from './createPost'
import PostList from './postList';
import HomeScreen from './homeScreen'

let container = null;
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