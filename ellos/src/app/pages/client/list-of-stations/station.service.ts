import { Injectable } from '@angular/core';

import { Station } from '../../../model/station.model';


@Injectable()
export class StationService {

  stations = Array<Station>();

  constructor() {
    this.stations = this.generateStations();
  }

  getStations(): Station[] {
    return this.stations;
    
  }

  private generateStations(): Station[] {
    return [
      new Station(
        'Inatel - Instituto Nacional de Telecomunicações',
        'Fundado em 1965, o Instituto Nacional de Telecomunicações - Inatel - é um centro de excelência em ensino e pesquisa na área de Engenharia, e tem se consolidado cada vez mais, no Brasil e no exterior, como um celeiro de grandes talentos. Foi a primeira instituição de ensino do país a oferecer um curso superior de Engenharia tendo as telecomunicações como foco.',
        'https://bit.ly/2N0HapX'),

      new Station(
        'ETE - Escola Técnica de Eletrônica',
        'Fundada por Luzia Rennó Moreira - Dona Sinhá Moreira - a ETE FMC iniciou suas atividades educacionais em março de 1959, sendo a primeira escola de eletrônica de nível médio da América Latina.',
        'https://bit.ly/2wf6jWD'),

      new Station(
        'Praça Santa Rita',
        'Um dos ambientes mais bonitos e atrativos da cidade. Local preferido dos moradores, é ali que está localizado o Santuário de Santa Rita de Cássia, com uma capela onde está exposta uma réplica da padroeira, em tamanho natural. É lá, também, que guardam uma relíquia da santa e a imagem trazida pelos fundadores do povoado. A praça possui duas fontes. A mais antiga, foi construída na primeira metade do século XX. A segunda, foi concluída no início dos anos 90.',
        'https://bit.ly/2L2wTrr')
    ]
  }

}