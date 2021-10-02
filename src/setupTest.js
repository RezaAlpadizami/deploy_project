<<<<<<< HEAD
import Enzyme from "enzyme";
=======
import Enzyme, { configure, shallow, mount } from 'enzyme';
>>>>>>> 610f33eb54901b2490a726933ef5638d57d44b1a

import Adapter from "enzyme-adapter-react-16";

<<<<<<< HEAD
Enzyme.configure({ adapter: new Adapter() });
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
module.exports = {
  setupTestFrameworkScriptFile: "./enzyme.setup.js",
};
=======
configure({ adapter: new Adapter() });
export { shallow, mount};
export default Enzyme;
>>>>>>> 610f33eb54901b2490a726933ef5638d57d44b1a
