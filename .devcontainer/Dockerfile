FROM ghcr.io/dhhyi/dcc-devcontainer-javascript-pnpm

USER root

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive && apt-get -y install --no-install-recommends tmux && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN mkdir -p "/" && echo "IyEvYmluL2Jhc2gKaWYgWyAteiAiJCoiIF07IHRoZW4KICB0bXV4IG5ldy1zZXNzaW9uIC1BIC1zIHRtdXgKZmkKZXhlYyBzaCAiJEAiCg==" | base64 -d > "/tmux-or-else.sh" && chmod +rx "/tmux-or-else.sh"

USER vscode
ENV HOME=/home/vscode

RUN echo "alias nx='pnpm exec nx'" | tee -a $HOME/.bashrc $HOME/.zshrc

EXPOSE 4200
