![header](https://letmetellyaorg.files.wordpress.com/2019/06/best-books-2017-header.jpg)

# 📕 Biblioteca Zá Marinho

Projeto back-end de um sistema de gerenciamento de uma biblioteca. 

O sistema permite gerenciar contas de Leitores, Funcionários e Obras Literárias. Os Funcionários são responsáveis por Reservas e Empréstimos requeridas por um Leitor, além da Devolução. 

Cada Leitor pertence a uma categoria, que define por quantos dias ele pode manter um empréstimo. 
As Obras Literárias também possuem Categorias, que definem não apenas o número máximo de dias que aquela Obra pode ser mantida emprestada, mas também uma taxa diária de multa por atraso.

A aplicação ainda realiza a impressão em formato PDF de relatórios de empréstimos, atrasos e reservas.


----------

## 💻 Executando o projeto

```bash
# Clonar este repositório
$ git clone git@github.com:brendacq/biblioteca-za-marinho.git # para clonar via SSH [recomendado]; ou
$ git clone https://github.com/brendacq/biblioteca-za-marinho.git # para clonar via HTTPS

# Navegar até a pasta raíz do projeto
$ cd biblioteca-za-marinho

# Instalar as dependências
$ yarn 

# Executar a aplicação
$ yarn start
```
Após realizar este procedimento, o projeto pode ser acessado em `http://localhost:3000`, ou `http://localhost:3000/api` para acessar a Documentação da API.