# LOVE Token DApp

Esta aplicação descentralizada (DApp) foi desenvolvida para permitir que os usuários mintem o token **LOVE** diretamente através de uma interface simples e intuitiva. Utilizando a MetaMask, os usuários podem interagir com a blockchain para criar novos tokens **LOVE** em sua carteira, respeitando um mecanismo de **time lock** que impede o abuso de solicitações consecutivas.

## Descrição

A DApp é construída em **React** e utiliza a **MetaMask** para facilitar a interação com contratos inteligentes na blockchain. O processo de mintagem é gerenciado através da biblioteca **Web3.js**, e os usuários podem criar tokens **LOVE** de maneira controlada, com um tempo de espera entre as transações para evitar abusos. O saldo dos tokens mintados é visualizado diretamente na carteira MetaMask do usuário.

### Funcionalidades principais:

- **Conexão com MetaMask**: Os usuários se conectam à sua carteira MetaMask para interagir com a aplicação.
- **Mintagem de Tokens**: Geração de novos tokens **LOVE**, limitada por um **time lock** para evitar múltiplos saques em um curto período.
- **Verificação de Saldo**: O saldo de tokens **LOVE** é visto diretamente na MetaMask, e não na interface da DApp.
- **Interface amigável**: Desenvolvida em React para proporcionar uma experiência de usuário simples e responsiva.

### Fluxo de uso:

1. **Conectar a MetaMask**: O usuário conecta sua carteira MetaMask à DApp.
2. **Mintar tokens**: Após a conexão, o usuário pode mintar tokens **LOVE** e precisa aguardar o período do time lock antes de realizar outra transação.

## Tecnologias Utilizadas

- **React**: Utilizado para construir a interface de usuário.
- **MetaMask**: Utilizada para gerenciar a carteira e transações dos usuários.
- **Web3.js**: Utilizado para a comunicação com a blockchain e interação com o contrato inteligente.
- **Solidity**: Linguagem utilizada para desenvolver o contrato inteligente que gerencia a mintagem dos tokens **LOVE**.
- **Time Lock**: Implementado para garantir que haja um intervalo de tempo entre as mintagens de tokens, evitando abusos.

## Finalidade

A DApp LOVE Token foi criada para facilitar a criação de tokens personalizados de forma controlada e segura, com um sistema de time lock para proteger contra abusos. É ideal para testes e experimentação em redes de desenvolvimento, podendo ser adaptada para redes principais.
