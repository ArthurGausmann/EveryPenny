# Usa uma imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências primeiro (cache mais eficiente)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Constrói a aplicação para produção
RUN npm run build

# Instala um servidor web simples para servir os arquivos estáticos
RUN npm install -g serve

# Expõe a porta 3000
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["serve", "-s", "build", "-l", "3000"]