const colunas = document.querySelector(".column");

let ItemArrastado = null;

colunas.foreach(item => {
    item.addEventListener("dragstart", (e) => {
        ItemArrastado = e.target;

        ItemArrastado.classList.add("dragging");
    })

    ItemArrastado.addEventListener("dragend", () => {
        ItemArrastado.classList.remove("dragging");

        ItemArrastado = null;
    })
});

colunas.foreach ((item) => {
    item.addEventListener("dragover", (e) => {
        e.preventDefault();

        if(!ItemArrastado) return;

        const aplicarDepois = getNewPosition (item, e.clientY);

        if(aplicarDepois){
            aplicarDepois.insertAdjacentElement("afterend", ItemArrastado);
        } else{
            item.prepend(ItemArrastado)
        }
    });
});

function getNewPosition(column, posY){
    const cards = column.querySelectorAll(".item:not(.dragging)");
    let result;

    for(let refer_card of cards){
        const box = refer_card.getBoundingClienteRect();
        const boxCenterY = box.top + box.height /2;

        if(posY >= boxCenterY) result = refer_card;
    }
}