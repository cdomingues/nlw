//Popular lista de UFs e municipios

function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]") //função para popular o select
    

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")//fetch é uma promessa, que retorna um then
    .then( res => res.json())//função anonima que retorna um valor
    .then( states =>{

        for ( const state of states ){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>` 
        }

    } )

}
populateUFs()


function getCities(event){

    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")


    const ufValue = event.target.value 
    const indexOfSelectedState = event.target.selectedIndex 
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML= "<option value>Selecione a cidade</option> "
    citySelect.disabled = true

    fetch(url)
    .then(res => res.json())
    .then( cities=>{
        for( const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false 
    })



}

document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)

///Itens de coleta
//pegar todos os li´s
const itemsToCollect= document.querySelectorAll(".itens-grid li")
for (const item of itemsToCollect){
    item.addEventListener("click",handleSelectedItem) 
}

function handleSelectedItem(event){
    
    const itemLi = event.target
    
    //adicioanr ou remover uma classe com javascript
    itemLi.classList.toggle("selected") 
    
    const itemId = itemLi.dataset.id

    
}

