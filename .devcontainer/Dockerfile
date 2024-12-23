FROM ghcr.io/dhhyi/dcc-devcontainer-javascript-pnpm

USER root

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive && apt-get -y install --no-install-recommends tmux && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN mkdir -p "/" && echo "IyEvYmluL2Jhc2gKaWYgWyAteiAiJCoiIF07IHRoZW4KICB0bXV4IG5ldy1zZXNzaW9uIC1BIC1zIHRtdXgKZmkKZXhlYyBzaCAiJEAiCg==" | base64 -d > "/tmux-or-else.sh" && chmod +rx "/tmux-or-else.sh"

RUN mkdir -p "/usr/bin" && echo "IyEvYmluL2Jhc2gKaWYgdGVzdCAiJDEiICE9ICJyZXNldCI7IHRoZW4KICBpZiBwbnBtIGV4ZWMgbnggZGFlbW9uIHwgZ3JlcCAtcSAibm90IHJ1bm5pbmciIDsgdGhlbgogICAgcG5wbSBleGVjIG54IGRhZW1vbiAtLXN0YXJ0CiAgZmkKZmkKZXhlYyBwbnBtIGV4ZWMgbnggIiRAIgo=" | base64 -d > "/usr/bin/nx" && chmod +rx "/usr/bin/nx"

USER vscode

EXPOSE 4200
