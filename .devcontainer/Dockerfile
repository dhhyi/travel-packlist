FROM ghcr.io/dhhyi/dcc-devcontainer-javascript-pnpm

USER root

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive && apt-get -y install --no-install-recommends exiftool imagemagick xdg-utils bc x11-utils tmux && apt-get clean && rm -rf /var/lib/apt/lists/*

USER ubuntu
ENV HOME=/home/ubuntu

RUN mkdir -p "$HOME/.config/fish/conf.d" && echo "ZnVuY3Rpb24gbngKICAgIGlmIHN0cmluZyBtYXRjaCAtcSAicnVuKiIgJGFyZ3ZbMV0KICAgICAgICBwbnBtIG54IC0tcGFyYWxsZWw9NzUlICRhcmd2CiAgICBlbHNlCiAgICAgICAgcG5wbSBueCAkYXJndgogICAgZW5kCmVuZAo=" | base64 -d > "$HOME/.config/fish/conf.d/nx.fish" && chmod +rx "$HOME/.config/fish/conf.d/nx.fish"

ENV NX_TUI=false NX_NO_CLOUD=true GIT_DIFF_IMAGE_ENABLED=1 MISE_ENV=development
ENV PATH="$HOME/.local/share/mise/shims:$PATH"
RUN git clone https://github.com/ewanmellor/git-diff-image.git /tmp/git-diff-image
RUN mise use -g 'npm:@playwright/test@1.60.0'
RUN playwright install chromium --with-deps

EXPOSE 4200 3100
