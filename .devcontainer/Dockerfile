FROM ghcr.io/dhhyi/dcc-devcontainer-javascript-pnpm

USER root

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive && apt-get -y install --no-install-recommends tmux && apt-get clean && rm -rf /var/lib/apt/lists/*

USER vscode
ENV HOME=/home/vscode

RUN echo "alias ng='pnpm ng'" | tee -a $HOME/.bashrc $HOME/.zshrc

EXPOSE 4200
