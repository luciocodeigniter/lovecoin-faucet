/// <reference types="react-scripts" />

// Por padrão, não existe no objeto global `window`
// uma propriedade `ethereum`, que é injetado na janela do navegador quando instalamos a metamask,
// portanto, estou dizendo para o typescript que de fato tem sim
interface Window {
    ethereum: any;
}
