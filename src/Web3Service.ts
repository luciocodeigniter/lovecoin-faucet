import Web3 from "web3"; // importando uma classe Web3
import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}`;

export async function mint() {

    const nextMint = localStorage.getItem('nextMint');

    // o timestamp do nextmin é super a data e hora atual?
    // ou seja, está no futuro?
    // com isso definimos uma trava no navegador para minimizar/dificultar
    // o usuário ficar clicando no botão e esgotar os valores em carteira 
    // para arcar com as taxas de mint
    if (nextMint && parseInt(nextMint) > Date.now()) {
        throw new Error(`You are only allowed to receive tokens every two days`);
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

    //! definimos antes do `axios.post`
    localStorage.setItem('wallet', accounts[0]);
    // dois dias no futuro, pois é assim que está no contrato
    localStorage.setItem('nextMint', `${Date.now() + (1000 * 60 * 60 * 24 * 2)}`);

    
    const response = await axios.post(`${API_URL}/mint/${accounts[0]}`);
    return response.data;

}