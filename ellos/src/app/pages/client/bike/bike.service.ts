import { Injectable } from '@angular/core';

import { BikeClient } from '../../../model/bike-client.model';


@Injectable()
export class BikeService {

  bikes = Array<BikeClient>();

  constructor() {
    this.bikes = this.generateBikes();
  }

  getBikes(relativeUrl: string = null): BikeClient[] {
    if (relativeUrl === null) {
      return this.bikes;
    } else {
      var auxBikes = this.bikes;
      auxBikes.forEach( item => item.imageName = (relativeUrl + item.imageName));
      return auxBikes;
    }
    
  }

  getBike(id: string, relativeUrl: string = null): BikeClient {
    let bike = this.bikes.find(item => item.id === id);
    bike.imageName = relativeUrl ? (relativeUrl + bike.imageName) : bike.imageName;
    return bike;
  }

  private generateBikes(): BikeClient[] {
    return [
      new BikeClient('coach', 
      'Coach', 
      'A bicicleta era a forma que eu usava para me aproximar do meu pai, pois era um dos únicos momentos que tínhamos a sós.', 
      'bike-0.jpg', 
      'Minha história com bicicletas começa de uma forma meio trágica, quando eu era mais novo, eu e mais dois amigos estávamos andando de bike em um clube de campo, e resolvemos descer o morro sem freiar, um deles entrou na minha frente e para não acontecer uma tragédia, eu me joguei no chão e consegui quebrar os dois braços, e aquela bicicleta virou um oito. Mas, como meu pai e eu andávamos sempre juntos de bicicleta, antes de ele falecer esse ano, compramos a Coach. A maioria das fotos com meu pai era com essa bicicleta, pois era o único momento que a gente tinha para ficarmos juntos sozinhos, pegávamos um dia que não tínhamos nada para fazer, e íamos por ai fazer alguma trila. Após o falecimento dele, trouxe a bicicleta para aqui para Santa Rita para utilizar como meio de transporte no dia a dia e tenho sempre boas lembranças.',
      'Esta bicicleta pertence ao André Bertolacini.'),

      new BikeClient('amarelinha',
      'Amarelinha',
      'Quando roubaram minha primeira bicicleta, parece que o destino colocou minha mãe em um jogo de bingo, o qual fez ela ganhar essa bicicleta de agora.',
      'bike-1.jpg',
      'Eu era apaixonada na minha primeira bicicleta, era aquelas de criança, e eu caia muito, pois eu morava na descida de um morro e adorava descer com meu irmão. Mas um dia, alguém simplesmente roubou ela e ela sumiu. Mas minha mãe sempre foi apaixonada por bingos, e uma semana depois, em um bingo, ela ganhou essa bicicleta ai que você está usando agora. Passei a ser mais cuidadosa com ela, sempre trancava ela, não gostava mais que as pessoas andassem, fiquei com mais cuidado. Utilizava ela para ir visitar meu avô junto com meu pai e também durante meu ensino médio todos os dias, o tempo todo, mas quando entrei para a faculdade, eu parei de andar, por ser do lado de casa, e então aposentei ela. Mas agora quis compartilhar com você um pedacinho dessa história.',
      'Esta bicicleta pertence a Jamile de Cassia.'),

      new BikeClient('charlene',
      'Charlene',
      'Essa bicicleta me ajuda a ter momentos de qualidade com a minha filha.',
      'bike-2.jpg',
      'Essa bicicleta é um verdadeiro quebra-galho, faz 5 anos que ela me acompanha desde o meu tempo em São Paulo até aqui. Utilizo ela tanto para facilitar minha vida quanto para me exercitar. As vezes eu vou para o trabalho e a parte que pega é a subida do morro. Também tenho costume de levar minha filha na cadeirinha da bike para a aula de esportes, mas ela está ficando maior e tive que encontrar outra magrela para ela, são bons momentos. Houve um dia que estava com a Charlene presa na parte de cima do carro e quando fui entrar na garagem só escutei um barulhão, mas como minha filha que tinha aberto o portão, já pensei: “ela apertou para fechar antes”, aí acelerei, nessa só vi a bicicleta caindo no chão e o portão quebrando. Resultado: Arranhei o teto do carro, quebrei o portão e danifiquei um pouco a bike. Porém a Charlene sobreviveu e estou com ela até hoje.',
      'Esta bicicleta pertence ao Ronaldo Carluci.'),

      new BikeClient('amante-fiel',
      'Amante Fiel',
      'Quando minha mãe me deu minha primeira bike, eu desmontei ela inteirinha e foi assim que eu me apaixonei pelo negócio.',
      'bike-3.jpg',
      'Desde de quando eu me conheço por gente, eu uso bicicleta. Uso minha bike todos os dias. Estou tão acostumado a andar de bicicleta que quando vou do lado de casa, na padaria, eu já pego a minha Amante Fiel. Pelas contas que eu fiz, ando por mês 180km com essa guerreira aqui. Minha mãe me deu minha primeira bike, mas eu aprendi a andar sozinho. Teve um dia que eu peguei a bicicleta, e desmontei ela inteirinha, aí que eu peguei gosto de verdade e me apaixonei pela coisa. Para mim, ela é uma companheira. Com isso, sempre quando meus amigos precisam de algum ajuste na bike deles, eles falam comigo, pois sabem que eu do conta do serviço.',
      'Esta bicicleta pertence ao Thiago Nasser.'),

      new BikeClient('marcia-odette',
      'Marcia Odette',
      'Ela já me levou para muitos lugares bons, para conhecer pessoas boas, para casa de pessoas boas, já me proporcionou muitos encontros incríveis, além dela ser o maior quebra-galho da minha rep.',
      'bike-.jpg',
      'A Marcia Odette surgiu de uma amiga que eu amo muito e sempre está em um lugar diferente. Essa minha amiga comprou a bicicleta e usou por um tempo, mas depois ficou encostada quando ela foi para o Peru. Ai eu acabei propondo de fazer negócio e ela me vender, pois eu sempre fui apaixonada nessa lindeza. Quando eu vi a bicicleta, eu me apaixonei por essas cores estilosas, que são fora do comum e diferente das outras. Um momento especial foi ensinar minha outra amiga que não sabia andar de bike e teve sua primeira experiência com a Odette aos 21 anos, foi muito especial.',
      'Esta bicicleta pertence a Karina Andrade.'),

      /*
      new BikeClient('id',
      'name',
      'aqui fica a historia de cada...',
      'bike-.jpg',
      'descricao',
      's'),

      new BikeClient('id',
      'name',
      'aqui fica a historia de cada...',
      'bike-.jpg',
      'descricao',
      's'),

      new BikeClient('id',
      'name',
      'aqui fica a historia de cada...',
      'bike-.jpg',
      'descricao',
      's'),

      new BikeClient('id',
      'name',
      'aqui fica a historia de cada...',
      'bike-.jpg',
      'descricao',
      's'),

      new BikeClient('id',
      'name',
      'aqui fica a historia de cada...',
      'bike-.jpg',
      'descricao',
      's'),

      new BikeClient('id',
      'name',
      'aqui fica a historia de cada...',
      'bike-.jpg',
      'descricao',
      's'),

      new BikeClient('id',
      'name',
      'aqui fica a historia de cada...',
      'bike-.jpg',
      'descricao',
      's'),

      new BikeClient('id',
      'name',
      'aqui fica a historia de cada...',
      'bike-.jpg',
      'descricao',
      's'),

      new BikeClient('id',
      'name',
      'aqui fica a historia de cada...',
      'bike-.jpg',
      'descricao',
      's')
      */
      
    ]
  }

}