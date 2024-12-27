FROM gcr.io/distroless/nodejs22-debian12

COPY index.mjs /

EXPOSE 80

ARG VERSION=dev

ENV VERSION=$VERSION

CMD ["/index.mjs"]
