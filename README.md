# 2017.1 Presence - Framework de ponto

## Sobre o Projeto

<p align="justify">O "Presence" tem a finalidade de ser um framework de registro de ponto, podendo ser configurado de acordo com as peculiaridades de cada contexto, desde uma empresa fazendo o registro de seus funcionários à um colégio que faz o controle de seus alunos</p>

## Instalação

Faça clone ou download do repositório.

```console
$ git clone https://github.com/DSW-20171-Grupo3/GestaoEscolar
```

Entre no arquivo clonado e navegue até a pasta 'framework', dentro da pasta execute o comando 'npm run start-prod'

```console
$ npm run start-prod
```

O comando acima executa o respectivo script configurado no seu package.json, depois de atualizar as depêndencias o projeto deverá estar rodando

Abra seu navegador em localhost:3000

## Principais Features

* Autenticação
* Cadastro de Usuários Gerenciáveis
* Criação de Grupos
* Registro de Frequência
* Emissão de Relatórios


## Documentação do Projeto

Visualize a documentação na nossa [wiki](https://github.com/DSW-20171-Grupo3/GestaoEscolar/wiki).

## Utilização

As configurações gerais podem ser feitas no arquivo 'Config', dentro das pasta 'lib'

As opções disponíveis são as seguintes:

**adminEmail**: Email default para administrador
**homeColor**: Cor para a página home
\*cores disponíveis: Navy, black, teal, maroon, yellow, red, orange, blue, green

**adminColor**: Cor para a página admin
**name**: Nome da aplicação
**groups**: Grupos de Usuários Gerenciáveis
Para criar novos grupos lembre de criar a classe correspondente:
```
class RhPrototype extends Group {
  constructor(Nome, Cpf) {
    super();
    this.Name = Nome,
    this.Cpf = Cpf
  }
}

Rh = RhPrototype;
```

**groupLabel**: Conjunto de Grupos

**Relatórios**: Para customizar os relatórios basta alterar os parâmetros passados ao construtor da classe RelatórioProxy

```
new Relatorio(presences, faltas, name)
```

presences: Query para retornar as presenças
faltas: Query para retornar as faltas
name: Nome do relatoório














<p align="center">Grupo 3 - Desenho de Software <br /><br />
<a href="https://fga.unb.br" target="_blank"><img width="200"src="https://4.bp.blogspot.com/-0aa6fAFnSnA/VzICtBQgciI/AAAAAAAARn4/SxVsQPFNeE0fxkCPVgMWbhd5qIEAYCMbwCLcB/s1600/unb-gama.png"></a>
</p>
