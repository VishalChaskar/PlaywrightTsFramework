# Keep this tag equal to your @playwright/test version
ARG PLAYWRIGHT_TAG=v1.57.0-noble
FROM mcr.microsoft.com/playwright:${PLAYWRIGHT_TAG}

WORKDIR /work

# Optional: avoid re-downloading browsers during npm install (image already has browsers)
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Default command; override with `docker run ... <cmd>` if desired
CMD ["npx", "playwright", "test", "tests/AutomationPractice.spec.ts"]