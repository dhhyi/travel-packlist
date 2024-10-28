FROM ghcr.io/dhhyi/dcc-devcontainer-javascript-pnpm

USER vscode
ENV HOME=/home/vscode

RUN npm i -g @angular/cli@latest
RUN echo "source <(ng completion script)" | tee -a $HOME/.bashrc $HOME/.zshrc

EXPOSE 4200
