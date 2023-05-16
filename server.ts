import app from './src/app'; //Importar o app.ts da pasta source

const PORT = Number(process.env.PORT || '3000') //A porta de acesso da aplicação

app.listen(PORT as number, () => console.log(`App listening on port ${PORT}`)); //Porta da aplicação que o servidor está escutando/lendo