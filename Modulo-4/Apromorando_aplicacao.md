FUNDAMENTOS DO TYPESCRIPT

O que é o typescript ?
É um conjunto de ferramentas que foi criado em cima da linguagem JavaScript que permite adicionar tipagem estática em cima de uma linguagem que é o JavaScript que tem tipagem dinâmica.

Dinâmico X Statico

Dinâmica - Permite mudar o TIPO da informação armazenada em um varíavel 
ex: Mudar o tipo de um varíavel que era string para um number
const name = 'Thayna'
name = 3

Statico - Não permite que o TIPO de uma variável mude. Isso impede que cometamos erros por tentar mudar o tipo de valor de uma variável. Se ela for dor tipo number, ela sempre vai ser number
ex:
const idade:number = 27
idade = 'Thayna' xxxxxx
idade = 27

RESOLVENDO ERROS 

Usamos ! para indicar para o typescript que um elemnto vai existir com certeza.

Quando uma função recebe props, precisamos definir qual é o tipo dessas props, pra isso, usamos as interfaces que não como moldes que indicam o formato daquela variável. Ela pode ser string, number, boolean e date.