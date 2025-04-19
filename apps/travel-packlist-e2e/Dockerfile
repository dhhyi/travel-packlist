FROM node:lts

RUN apt-get update && apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh && bash nodesource_setup.sh && apt-get install -y nodejs
RUN curl -fsSL https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -
ENV PNPM_HOME="/root/.local/share/pnpm" HUSKY=0 PLAYWRIGHT_HTML_OPEN=never
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /ws

COPY package.json pnpm-lock.yaml .
RUN pnpm install --frozen-lockfile
RUN pnpm playwright install chromium --with-deps

COPY . .

ENTRYPOINT [ "pnpm", "nx", "run" ]
