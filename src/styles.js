import styled from "styled-components"
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";


export const Container = styled.div`    
   background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
   width: 100vw ;                   
   min-height: 100vh;              
   display: flex;                   
   justify-content: center;        
   align-items: center;            
   overflow: auto
`
export const TodoList = styled.div`
   
   @media (max-width: 500px) {
   width: 84%;
   }

   background: white;
   padding: 30px 20px;
   border-radius: 5px;

   ul{                            
      padding: 0;
      margin-top: 60px;
   }
`
export const Input = styled.input`
   
   @media (max-width: 500px) {
   width: 98%;
   }

   border: 2px solid rgba (209,211, 212, 0.4);
   border-radius: 5px;
   height: 40px;
   margin-right: 40px;
   width: 340px;
`
export const Button = styled.button`
   
   @media (max-width: 500px) {
   width: 84%;
   margin: 10px 30px;
   }

   background: #8052EC;
   border-radius: 5px;
   height: 40px;
   font-weight: 900;
   font-size: 17px;
   line-height: 2px;
   border: none;
   color: white;
   width: 130px;
   cursor: pointer;

   &:hover{
      opacity: 0.8; 
   }

   &:active{
      opacity: 0.6; 
   }

`
export const ListItem = styled.div`                
   
   @media (max-width: 500px) {
   width: 94%;
   }


   background: ${props => props.estaFinalizado ? "#E8FF8B" : "#E4E4E4"};  
   box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);                            
   border-radius: 5px;
   height: 60px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 30px;
   padding: 0px 10px;
   width: 500px;

   li{                       
      list-style: none;     
   }
`

export const Lixeira = styled(FcEmptyTrash)` 
  cursor: pointer;
`
export const Vzinho = styled(FcCheckmark)`
  cursor: pointer;
`

export const Mensagem = styled.h4` 
   display: flex;                  
   justify-content: center;
   color: rgba(0, 0, 0, 0.3);
`

export const Titulo = styled.h1` 
   display: flex;                  
   justify-content: center;
   margin: 0px 20px 50px;
`