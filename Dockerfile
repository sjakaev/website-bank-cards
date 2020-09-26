FROM node:12-alpine
ENV APP_ROOT /src`Z

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}
RUN yarn
RUN yarn build

CMD ["sh", "-c", "yarn start"]
