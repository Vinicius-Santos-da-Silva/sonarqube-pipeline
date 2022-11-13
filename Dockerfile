FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm install typescript -g
RUN tsc


EXPOSE 3002

CMD [ "node" , "./dist/src/main"]