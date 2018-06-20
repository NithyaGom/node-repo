FROM node
RUN mkdir -p /usr/src/app
COPY index.js /usr/src/app
EXPOSE 8086
CMD [ "node", "/usr/src/app/index" ]
