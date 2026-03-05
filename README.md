# Atividade Guiada - Angular + API Pública + Rotas Dinâmicas
# Ana Julya Borges - DTA 2026

✅ O que é rota dinâmica?

É uma rota que muda de acordo com um parâmetro, como um id.

![Exemplo](src/assets/exemplo-rota.png)

O que muda é o id.
Esse ":id" é o parâmetro dinâmico da rota.

✅ O que é ParamMap?

O ParamMap é um recurso do Angular que serve para pegar os parâmetros da rota.

![Exemplo](src/assets/exemplo-parammap.png)

O Angular guarda o parâmetro, como no exemplo ele irá guardar o valor do id.

- paramMap → acessa os parâmetros da rota

- get('id') → pega o valor do parâmetro chamado id

✅ Onde foi usado o Observable e por quê.

Foi utilizado no retorno de duas funções do service

![Exemplo](src/assets/exemplo-observable1.png)

e

![Exemplo](src/assets/exemplo-observable2.png)

Por que o Observable foi utilizado?

O Observable serve para que o Angular espere a resposta da API e entregue os dados quando eles estiverem prontos.

Depois, no componente, usamos subscribe() para receber esses dados e mostrar na tela.

Prints das Telas:

![Exemplo](src/assets/print-user.png)

![Exemplo](src/assets/user-detail.png)
