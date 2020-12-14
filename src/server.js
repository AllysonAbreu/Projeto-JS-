import express from 'express';
import nunjucks from 'nunjucks';
import dataVideos from '../dataVideos.json';

const server = express();
server.use(express.static('public'));
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.set('view engine', 'njk');

nunjucks.configure('src/views', {
    express:server,
    autoescape:false,
    noCache:true
});

server.get('/', (request, response) => {
    const dadosUsuarios = {
        avatar_url:"https://avatars2.githubusercontent.com/u/60551389?s=400&u=7abf5a1ff3adb6fc9cdd7301ed80fbe97a98e201&v=4",
        name:"Allyson Oliveira de Abreu",
        profession: "Advogado",
        description: "Recém formado em Direito, entusiasta a Ciência de Dados",
        links:[
            {name:"Github", url:"https://github.com/AllysonAbreu"},
            {name:"Twitter", url:"https://twitter.com/AllysonAbreu"},
            {name:"Linkedin", url:"https://www.linkedin.com/in/allyson-oliveira-de-abreu-23590b152/"}
        ]
    }
    response.render('index',{dados:dadosUsuarios});
});

server.get('/classes', (request, response) => {
    console.log(dataVideos);
    response.render('classes', {dados:dataVideos});
});

server.listen(5000, () => {
    console.log('server running');
});
