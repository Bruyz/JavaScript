const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

function renderTarefas(){
    listElement.innerHTML = ""
    for (const itemTarefa of tarefas) {
        const tarefaElement = document.createElement("li")

        const tarefaText = document.createTextNode(itemTarefa)

        const LinkElement = document.createElement("a")

        LinkElement.setAttribute("href","#")       /*âncora*/
         
        const pos = tarefas.indexOf(itemTarefa)          

        LinkElement.setAttribute("onclick",`deleteTarefa(${pos})`)

        const LinkText = document.createTextNode("Excluir")

        LinkElement.appendChild(LinkText)

        tarefaElement.appendChild(tarefaText)    /*colocando texto no li*/

        tarefaElement.appendChild(LinkElement)

        listElement.appendChild(tarefaElement)
    }
}

renderTarefas()
function addTarefas () {
    const text = inputElement.value
    tarefas.push(text)
    renderTarefas()
    inputElement.value = ""
    saveToStorage()
}
buttonElement.onclick = addTarefas

function deleteTarefa(splash) {
    tarefas.splice(splash,1)
    renderTarefas()
    saveToStorage()
}

function saveToStorage(){
        localStorage.setItem("tarefas", JSON.stringify(tarefas)) /*coloca algo*/

}