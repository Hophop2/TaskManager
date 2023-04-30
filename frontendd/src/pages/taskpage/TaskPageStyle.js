import styled from 'styled-components'


export const Container = styled.div`
display: flex;
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

h1{


}
.ul-workspace{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
}

.ul-workspace li{
    list-style: none;
    cursor: pointer;
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem; 
    font-size: 1rem;
   
    
    
}
`
export const TaskContainer = styled.div`
width: 100%;
display: flex;
.column{
    width: calc(100%/3);
    min-height: 100vh;
    
    
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
    min-height: calc(100vh - 180px);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2em;
    margin: 3em;
}




`

