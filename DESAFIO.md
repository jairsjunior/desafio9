# Vamos realizar os desafios?

A Maratona Behind the Code, realizada pela IBM, foi dividida em nove desafios. Mais de 26 mil pessoas participaram e os cem melhores foram premiados com a oportunidade de resolver uma última provocação – que foi proposta pelo Banco do Brasil.

**Como propusemos o último desafio aos maratonistas, por que não resolvê-lo internamente para testar os nossos conhecimentos?**

Conhecimentos prévios: Docker, Python, MQTT, Jupyter Notebook.

## Pré-requisitos

Para realizar o desafio, você deve fazer um clone/fork do repositório [desafio9](https://github.com/jairsjunior/desafio9). Também é necessário ter o Docker instalado em sua máquina.

## Desafio – Parte 1 – Cálculos com IoT

Na primeira etapa, o desafio a ser realizado é: manipular os dados coletados pelo NodeMCU e publicados no broker [MQTT](https://mqtt.org) (Message Queuing Telemetry Transport) e disponibilizá-los em em endpoint de uma API desenvolvida utilizando a linguagem de programação Python e e framework Flask.
Os dados coletados são: temperatura, umidade do ar e umidade do solo.

## Realizando o Desafio 1

Execute o comando abaixo dentro da pasta principal do repositório:

```
docker-compose up
```

Após efetuar o build inicial das imagens, você pode acessar o endereço *localhost:8080*, que haverá uma página com as instruções para realização do desafio.
Essa página disponibilizada no endereço acima está na pasta nodemcu-api, que é o projeto onde devem ser codificadas as features solicitadas no desafio.
Você pode verificar as leituras dos sensores também na interface visual que criei para esse fim acessando *localhost:2015*.

## Desafio – Parte 2 – Desenvolver um modelo deep learning de computer vision

A segunda parte do desafio utiliza um notebook Jupyter para efetuar o treinamento de uma rede para classificação de uma plantação como doente ou sadia. Para realizar o treinamento, utilizamos várias imagens retiradas com um drone lá mesmo no local do evento. Essas imagens foram classificadas como clean ou dirty para simular plantações com pragas e sem pragas.

Neste desafio, são utilizadas duas ferramentas além do notebook:
[Tensorflow](https://www.tensorflow.org/guide) – é uma plataforma para se trabalhar com aprendizado de máquina.
[Keras](https://keras.io/why-use-keras) – é uma API de alto nível para trabalhar com redes neurais em Python. O foco do desenvolvimento dela foi o de permitir uma rápida experimentação, que roda em cima do Tensorflow ou outras plataformas.

## Realizando o Desafio 2

Para realizar este desafio, eu recomendo utilizar a plataforma do Google [Colaboratory](https://colab.research.google.com/). Ao acessar a plataforma, você pode fazer o upload do notebook Jupyter, disponibilizado no repositório que você clonou para o Desafio 1, dentro da pasta deep-learning.

## Respostas dos Desafios

Se você realizou os 2 desafios, faça uma issue aqui na repositório com o payload disponibilizado em seu endpoint iot e o resultado da classificação do arquivo teste.

Para quem não conseguiu e quer ver como ficou a implementação, abra uma issue pedindo a solução.

Espero que vocês tenham gostado tanto quanto eu de realizar os desafio da maratona. Se você tiver mais dúvidas quanto as implementações disponibilizadas ou quiser trocar uma ideia sobre desenvolvimento, pode entrar em contato comigo. Valeu!