import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vite-plus/test";

import { coveredComponentNames } from "./component-coverage";

describe("component showcase coverage", () => {
  it("assigns every published component module to a showcase screen", () => {
    const componentDirectory = fileURLToPath(
      new URL("../../../packages/ui/src/components/ui", import.meta.url),
    );
    const componentNames = readdirSync(componentDirectory)
      .filter((fileName) => fileName.endsWith(".tsx"))
      .map((fileName) => fileName.replace(/\.tsx$/, ""))
      .toSorted();

    expect(coveredComponentNames).toEqual(componentNames);
  });
});
