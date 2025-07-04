/* eslint-disable */

import '@testing-library/jest-dom'
import {configure} from '@testing-library/react'
import {configure as eConfigure} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

eConfigure({adapter: new Adapter()})
configure({testIdAttribute: 'data-testid'})

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    }
  }

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock