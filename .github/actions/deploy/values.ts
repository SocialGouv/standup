import generate from "@socialgouv/env-slug"
import yaml from "js-yaml"

const env = process.env

const {
  SOCIALGOUV_PRODUCTION,
  SOCIALGOUV_PREPRODUCTION,
  SOCIALGOUV_PRODUCTION_NAMESPACE,
  SOCIALGOUV_BASE_DOMAIN,
  GITHUB_REPOSITORY,
  GITHUB_REF,
  GITHUB_SHA,
  KEEP_ALIVE,
  RANCHER_PROJECT_ID,
} = env

const repository = GITHUB_REPOSITORY ?? ""
const gitBranch = GITHUB_REF ?? ""

const isProduction = Boolean(SOCIALGOUV_PRODUCTION)
const isPreProduction = Boolean(SOCIALGOUV_PREPRODUCTION)

const keepAlive = Boolean(KEEP_ALIVE)

const branchName = gitBranch
  .replace("refs/heads/", "")
  .replace("refs/tags/", "")

const isDev = !isPreProduction && !isProduction
const isRenovate = branchName.startsWith("renovate")
const isDestroyable = isDev && !keepAlive

const ttl = isDestroyable ? (isRenovate ? "1d" : "7d") : ""

const sha = GITHUB_SHA ?? ""
// const shortSha = sha.slice(0, 7)
const imageTag = gitBranch.startsWith("refs/tags/")
  ? (gitBranch.split("/").pop() ?? "").substring(1)
  : `sha-${sha}`

const projectName = SOCIALGOUV_PRODUCTION_NAMESPACE || repository.split("/")[1]

const productionNamespace = SOCIALGOUV_PRODUCTION_NAMESPACE || projectName
const preProductionNamespace = `${projectName}-preprod`
const devNamespace = generate(`${projectName}-${branchName}`)

const namespace = isProduction
  ? productionNamespace
  : isPreProduction
  ? preProductionNamespace
  : devNamespace

const subdomain = isProduction
  ? projectName
  : isPreProduction
  ? `${projectName}-preprod`
  : devNamespace

const MAX_HOSTNAME_SIZE = 53
const shortenHost = (hostname: string): string =>
  hostname.slice(0, MAX_HOSTNAME_SIZE).replace(/-+$/, "")

const domain = SOCIALGOUV_BASE_DOMAIN ?? ""

const host = `${shortenHost(subdomain)}.${domain}`

const registry = `ghcr.io/socialgouv/${projectName}`

const rancherProjectId = RANCHER_PROJECT_ID

const values = {
  isProduction,
  isPreProduction,
  ttl,
  namespace,
  host,
  registry,
  gitBranch,
  imageTag,
  rancherProjectId,
}

// const dump = JSON.stringify(values, null, 2)
const dump: string = yaml.dump(values)

console.log(dump)
