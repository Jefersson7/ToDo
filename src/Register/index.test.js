import React from "react"
import { shallow, mount } from "enzyme"
import Register from "./index"

describe("Register", () => {
  describe("Rendering", () => {
    it("Should match to snapshot", () => {
      const register = shallow(<Register />)
      expect(register).toMatchSnapshot()
    })
  })
})
