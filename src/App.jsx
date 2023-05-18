import { v4 as uuid } from "uuid" 
import React, { useState } from "react" 
import { Container, TodoList, Input, Button, ListItem, Lixeira, Vzinho, Mensagem, Titulo, } from "./styles.js" 

function App() {
  const [lista, setLista] = useState([])                      
  const [escritaInput, setEscritaInput] = useState("")        

  function inputMudou(elton) {             
    setEscritaInput(elton.target.value)   
  }
 

  function cliqueiNoBotao() {   
    if (escritaInput) {          
      setLista([...lista, { id: uuid(), escrita: escritaInput, finalizado: false }]) 
    }
  }                                                           

  function finalizarTarefa(id) {   

    const novaLista = lista.map(item => (   
      item.id == id ? { ...item, finalizado: !item.finalizado } : item   
    ))                                                                  

    setLista(novaLista) 
  }

  function deletarItem(id) {                                 
    const novaLista = lista.filter(item => item.id !== id)  
    setLista(novaLista)           
  }

  return (           

    <Container>         
      <TodoList>          
        <Titulo>Minha Lista!</Titulo>
        <Input onChange={inputMudou} placeholder="Lista de compras..." />  
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>                      

        <ul>
          {                                             

            lista.length > 0 ? (  

              lista.map(item => (                         
                <ListItem estaFinalizado={item.finalizado} key={item.id}>  
                  
                  <Vzinho onClick={() => finalizarTarefa(item.id)} />      
                  
                  <li>{item.escrita}</li>
                  <Lixeira onClick={() => deletarItem(item.id)} />     
                </ListItem>
              ))                                         
            ) : (<Mensagem>Não há itens na lista</Mensagem>)
          }
        </ul>
      </TodoList>
    </Container>

  )
}

export default App 
