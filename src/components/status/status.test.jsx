import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./status";

describe("ProfileStatus component", () => {
    test("status from props should be in a state", () => {
        const button = create(<ProfileStatus status="eto status"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("eto status");
    });
});