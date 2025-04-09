FROM node:22.13.1 

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]

# docker build -t my-vue-app .
# docker run -p 5173:5173 my-vue-app


# FROM node:lts-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# FROM nginx :latest AS prod

# COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf/ /etc/nginx/nginx.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
# docker build -t my-vue-app:prod .
# docker run -p 80:80 my-vue-app:prod