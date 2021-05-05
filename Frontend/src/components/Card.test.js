import PostCard from "./Card";
import Enzyme from "enzyme";
import React from "react";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
describe("<App />", () => {
  it("Test 1 renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });
});
