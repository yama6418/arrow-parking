FROM mcr.microsoft.com/devcontainers/base:ubuntu

USER vscode
RUN curl -sSfL -O https://raw.githubusercontent.com/aquaproj/aqua-installer/v3.1.1/aqua-installer \
    && chmod +x aqua-installer \
    && ./aqua-installer -v v2.37.2 \
    && rm aqua-installer
USER root

ENV PATH="/home/vscode/.local/share/aquaproj-aqua/bin:${PATH}"
