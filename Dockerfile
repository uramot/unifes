FROM node
RUN mkdir /workspace
WORKDIR /workspace
RUN mkdir unifes
ADD . /workspace/unifes
WORKDIR unifes
RUN npm install
ENV PATH $PATH:/workspace/unifes/node_modules/.bin/
CMD DEBUG=unifes:* npm start
EXPOSE 3000
