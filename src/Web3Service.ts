import Web3 from "web3"; // importando uma classe Web3
import ABI from "./abi.json"; // importando o ABI pra memória

// o `` converte para string
const CONTRACT_ADDRESS = `${process.env.REACT_APP_CONTRACT_ADDRESS}`;


export async function mint() {

    if (!window.ethereum) {
        throw new Error(`No MetaMask found!`);
    }

    // agora que temos a metamask no navegador, 
    // podemos obter uma instância de conexão com essa carteira
    const web3Instance = new Web3(window.ethereum);

    // mas preciso pedir permissão para o usuário para me conectar de fato com a carteira
    const accounts = await web3Instance.eth.requestAccounts();

    // a lib já lança as devidas exceptions caso o user negue acesso à metamask
    // mas mesmo assim implementei isso
    if (!accounts || accounts.length === 0) {
        throw new Error(`Permission not granted!`);
    }

    // instância de conexão com o contrato
    const contract = new web3Instance.eth.Contract(ABI, CONTRACT_ADDRESS, { from: accounts[0] });

    // agora executamos o mint()
    const transaction = await contract.methods.mint().send(); // aqui estamos alterando o estado da blockchain, então haverá taxa
    console.log(transaction.transactionHash);

    // retorno o hash da transação
    return transaction.transactionHash;

}