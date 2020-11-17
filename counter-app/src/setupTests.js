// this file tells Jest and Enzyme which adapters we are planning to use

import '@testing-library/jest-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });