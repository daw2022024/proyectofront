# Utilizamos una imagen base de httpd (Apache HTTP Server)
FROM httpd:latest
RUN apt update && apt install -y curl gnupg git && curl -fsSL https://deb.nodesource.com/setup_17.x | bash - && apt install -y nodejs npm && npm install -g @angular/cli

# Exponemos el puerto 80 para acceder al servidor HTTP
EXPOSE 4200
