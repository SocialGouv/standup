# standup

[![Build Status](https://travis-ci.com/SocialGouv/standup.svg?branch=master)](https://travis-ci.com/SocialGouv/standup)

Reprise de l'outil [standup de beta.gouv](https://github.com/betagouv/standup)

👉 https://standup.fabrique.social.gouv.fr/

## Editer

Editer le fichier [startups.yml](./src/startups.yml)

Les commits de la branche master sont automatiquement publiés sur https://standup.fabrique.social.gouv.fr/

## Running in Minikube

We are a [`.helm/local.yml`](`.helm/local.yml`) chart config to enable a local kube deployment <3

You will need [kubectl](https://kubernetes.io/fr/docs/tasks/tools/install-kubectl/) and [helm](https://helm.sh/docs/using_helm/#installing-helm) to be installed in your machine and initialized with a local cluster like [minikube](https://kubernetes.io/fr/docs/tasks/tools/install-minikube/) :

```sh
$ minikube status
host: Running
kubelet: Running
apiserver: Running
kubectl: Correctly Configured: pointing to minikube-vm at 192.168.99.101

$ minikube addons enable ingress
💥  addon ingress was already enabled

$ kubectl version
Client Version: version.Info{Major:"1", Minor:"15", GitVersion:"v1.15.2", GitCommit:"f6278300bebbb750328ac16ee6dd3aa7d3549568", GitTreeState:"archive", BuildDate:"2019-08-29T18:43:18Z", GoVersion:"go1.12.9", Compiler:"gc", Platform:"linux/amd64"}
Server Version: version.Info{Major:"1", Minor:"15", GitVersion:"v1.15.2", GitCommit:"f6278300bebbb750328ac16ee6dd3aa7d3549568", GitTreeState:"clean", BuildDate:"2019-08-05T09:15:22Z", GoVersion:"go1.12.5", Compiler:"gc", Platform:"linux/amd64"}

$ helm version
Client: &version.Version{SemVer:"v2.14.3", GitCommit:"0e7f3b6637f7af8fcfddb3d2941fcc7cbebb0085", GitTreeState:"clean"}
Server: &version.Version{SemVer:"v2.14.3", GitCommit:"0e7f3b6637f7af8fcfddb3d2941fcc7cbebb0085", GitTreeState:"clean"}
```

The [`.helm/local.yml`](`.helm/local.yml`) config is expecting a local `socialgouv/standup:local` to exist.

```sh
$ yarn build
$ docker build . -t socialgouv/standup:local
```

Now that the image is built, let's deploy it through helm with :

```sh
$ helm upgrade --install --wait --namespace standup --values .helm/local.yml --set ingress.hosts={standup.$(minikube ip).nip.io} standup-frontend-local socialgouv/webapp
# or
$ helm install socialgouv/webapp --name standup-frontend-local --values .helm/local.yml --set ingress.hosts={standup.$(minikube ip).nip.io} --namespace standup

# If the given url `http://standup.192.168.99.10x.nip.io/` can be accessible,
# you can forward directly to the service port with
$ kubectl port-forward service/standup-frontend-local 8080:80 --namespace standup


# When you done, you can remove the whole `local` release with
$ helm delete --purge standup-frontend-local
```
