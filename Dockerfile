FROM node
RUN mkdir /workspace
WORKDIR /workspace
RUN mkdir unifes
ADD . /workspace/unifes
WORKDIR unifes
RUN npm install -g
CMD DEBUG=restapi:* npm start
EXPOSE 3000
