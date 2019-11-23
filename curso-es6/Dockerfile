FROM node:12
LABEL version="1.0"
LABEL Author="Robson Locatelli" 
ENV UBUNTU_ENV=development
COPY . /var/wwww
VOLUME /var/wwww

# Install dependencies
WORKDIR /var/wwww
RUN npm install

# Expose the app port
EXPOSE "3000:3000"