import React from "react"
import { shallow, mount } from "enzyme"
import Auth from "./index"

describe("Auth", () => {
  describe("Rendering", () => {
    it("Should match to snapshot", () => {
      const auth = shallow(<Auth />)
      expect(auth).toMatchSnapshot()
    })
  })
})
