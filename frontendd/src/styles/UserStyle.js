import styled from 'styled-components'




export const Container = styled.div`
width: 100%;
min-height:100vh;

color: white;


h1{
    text-align: center;
    font-size: 2.5em;
    letter-spacing: 3px;
}

button{
    width: 60px;
    height: 30px;
    background-color: black;
}

.user-box{
    width: 100%;
    font-size: 1.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
}
table{
    background-color: rgba(0,0,0,0.2);
    width: 100%;
 
    
   
    
    
}

tr
 {
    text-align: center;
 
}
td{
    padding:8px;
    
}

th{
    font-size: 1.4em;
}

.nav-wrapper{
    display: flex;
    height: 10vh;
    justify-content: flex-end;
    align-items: center;
    
    
    width: 100%;
    
}
.add-user{
    font-size: 1.4rem;
    margin-right: 2em;
    text-decoration: none;
    
}
`




