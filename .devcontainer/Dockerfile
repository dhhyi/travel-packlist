FROM ghcr.io/dhhyi/dcc-devcontainer-javascript-pnpm

USER root

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive && apt-get -y install --no-install-recommends exiftool imagemagick xdg-utils bc x11-utils tmux && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN mkdir -p "/usr/bin" && echo "IyEvYmluL2Jhc2gKZXhlYyBwbnBtIGV4ZWMgbnggLS1wYXJhbGxlbD03NSUgIiRAIgo=" | base64 -d > "/usr/bin/nx" && chmod +rx "/usr/bin/nx"

USER ubuntu
ENV HOME=/home/ubuntu

ENV NX_TUI=false NX_NO_CLOUD=true GIT_DIFF_IMAGE_ENABLED=1 MISE_ENV=development
ENV PATH="$HOME/.local/share/mise/shims:$PATH"
RUN git clone https://github.com/ewanmellor/git-diff-image.git /tmp/git-diff-image
RUN mise use -g 'npm:@playwright/test@1.58.2'
RUN playwright install chromium --with-deps

EXPOSE 4200 3100
