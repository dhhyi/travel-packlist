FROM ghcr.io/dhhyi/dcc-devcontainer-javascript-pnpm

USER root

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive && apt-get -y install --no-install-recommends tmux && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN mkdir -p "/usr/bin" && echo "IyEvYmluL2Jhc2gKZXhwb3J0IE5YX1RVST1mYWxzZQpleGVjIHBucG0gZXhlYyBueCAiJEAiCg==" | base64 -d > "/usr/bin/nx" && chmod +rx "/usr/bin/nx"

RUN mkdir -p "/" && echo "CiMhL2Jpbi9iYXNoCmlmIFsgLXogIiQqIiBdOyB0aGVuCiAgdG11eCBuZXctc2Vzc2lvbiAtQSAtcyB0bXV4CmZpCmV4ZWMgc2ggIiRAIgo=" | base64 -d > "/tmux-or-else.sh" && chmod +rx "/tmux-or-else.sh"

USER vscode

EXPOSE 4200
