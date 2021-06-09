import path from "path"
import util from "util"
import { project } from "@socialgouv/kosko-charts/testing/fake/github-actions.env"

const exec = util.promisify(require('child_process').exec);

jest.setTimeout(1000 * 60)

test("deploy dev", async () => {
  Object.assign(process.env, project("standup").dev)
  process.env.SOCIALGOUV_CONFIG_PATH = path.join(__dirname, "../config.json");
  const { stdout: manifest } = await exec("npx @socialgouv/k8s@1.9.0-alpha.20 --env dev", { env: process.env })
  expect(manifest).toMatchSnapshot()
})

test("deploy preprod", async () => {
  Object.assign(process.env, project("standup").preprod)
  process.env.SOCIALGOUV_CONFIG_PATH = path.join(__dirname, "../config.json");
  const { stdout: manifest } = await exec("npx @socialgouv/k8s@1.9.0-alpha.20 --env preprod", { env: process.env })
  expect(manifest).toMatchSnapshot()
})

test("deploy prod", async () => {
  Object.assign(process.env, project("standup").prod)
  process.env.SOCIALGOUV_CONFIG_PATH = path.join(__dirname, "../config.json");
  const { stdout: manifest } = await exec("npx @socialgouv/k8s@1.9.0-alpha.20 --env prod", { env: process.env })
  expect(manifest).toMatchSnapshot()
})
