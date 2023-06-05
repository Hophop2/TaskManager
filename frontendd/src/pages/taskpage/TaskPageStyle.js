import styled, { keyframes } from 'styled-components'

const show = keyframes`
  from {
    
    opacity: 0;
  }

  to {
    
    opacity: 1;
    filter: blur(0);
  }
`;
export const Container = styled.div`
display: flex;
height:100vh;


`






export const SideNav = styled.div`
width: 150px;
min-height: 100vh;
background-color: rgba(255,255,255,0.5);
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
 padding: 0px 20px 0px 20px; 
gap: 20px;



.item{
    text-align:center;
   
    
  
  
    
    
    
    
}
.item:hover{
    color: hsl(317 100% 54%);
    cursor: pointer;
}
.h1-box{
 
    text-align: center;
    
}


.ul-workspace{
   
  position: relative;
  left: -45px;
  
    
}

.ul-workspace li{
    position: relative;
    left: 0;
    list-style: none;
    cursor: pointer;
     transition: 0.5s;
    font-size: 1rem;
    margin: 8px 0;
    border-left: 2px solid hsl(317 100% 54%);
    animation: ${show} 0.5s ease-in-out forwards;
    opacity: 0;
    filter: blur(5px);
   
   
    width: 126px;
    
   
    
    
}

.ul-workspace li::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: hsl(317 100% 54%);
    transform: scaleX(0);
    transition: 0.5s;
    transform-origin: left;
}
.ul-workspace li:hover::before{
    transform: scaleX(1);
    filter: blur(2px);
    border-radius: 5px 5px 5px 5px;
    
    
}
.ul-workspace li span{
    position: relative;
    padding: 8px;
    display: inline-block;
    z-index: 1;
    transition: 0.5s;
}
.ul-workspace li:hover span{
    color: black;
}
.ul-workspace li:hover{
    left: 10px;
}
`
export const TaskContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;




.column{
    min-width: calc(100%/3);
    
    &::-webkit-scrollbar {
        width: 12px;
        
        background-color: rgba(255,255,255,0.6);
    }
    &::-webkit-scrollbar-thumb {
        width: 12px;
        
        background-color: rgba(0,0,0,0.5);
    }

    
    
}
.scroll{
    overflow-y: scroll;
}
.chevron{
    width: 100%;
    height: 60px;
    background-color: rgba(255,255,255,0.5);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    
   
   
}
.item-container{
    
    display: flex;
   
    align-items: center;
    flex-direction: column;
    gap: 2em;
    margin: 3em;
    
    
    
  
}




`

