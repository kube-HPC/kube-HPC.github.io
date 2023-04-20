ARG BASE_PRIVATE_REGISTRY=""
FROM ${BASE_PRIVATE_REGISTRY}node:8.8 as install
ADD ./package-lock.json ./package.json /hkube/site/
WORKDIR /hkube/site
RUN npm install

ARG BASE_PRIVATE_REGISTRY=""
FROM ${BASE_PRIVATE_REGISTRY}node:8.8
LABEL maintainer="golanlia@gmail.com"
RUN mkdir /hkube
COPY . /hkube/site
COPY --from=install /hkube/site/node_modules /hkube/site/node_modules
WORKDIR /hkube/site
CMD ["/bin/sh", "-c", "/hkube/site/resources/startServer.sh"]