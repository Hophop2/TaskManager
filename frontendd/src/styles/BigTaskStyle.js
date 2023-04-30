import styled from 'styled-components'
export const Icon = styled.div`
position: absolute;
top: 2%;
left: 1%;
`
export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.icons-box{
    display: flex;
    gap: 15px;
}

.wrapper{
    width: 85%;
    height: 90vh;
    background-color: aliceblue;
    border-radius: 2em;
    display: flex;
    border: 2px solid hsl(380 100% 54%);

    
}
.completed{
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
    font-size: 1.2em;
}
.info-box{
    width: 50%;
    border-radius: 2em;
    border: 2px solid hsl(380 100% 54%);
    margin: 1em 2em 2em 2em;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3em;
    

    
}
.content{
    height: 240px;
    text-align: left;
}
.content-box{
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;

}
.sub{
    padding: 15px 15px 15px 0;
    align-items: center;
}

input{
    width: 80%;
    padding: 10px 0 10px 0;
    border: 1px solid hsl(317 100% 54%);
    border-radius: 5px;
    outline: none;
    color:#fff;
    font-size: 1em;
    background-color: rgba(0,0,0,0.3);
    
    
}
.input-box span{
    position: absolute;
    left: 4%;
    top: 0;
    transform: translateX(10px) translateY(-7px);
    padding: 0 10px;
    background-color:hsl(317 100% 54%); ;
    font-size: 0.7em;
    border-radius: 2px;
    color: white;
   
    
}



.input-box input:valid,
.input-box input:focus
{
    border: 1px solid hsl(317 100% 54%);
} 

textarea{
    border: 1px solid hsl(317 100% 54%);
    border-radius: 5px;
    outline: none;
    color:#fff;
    font-size: 1.2em;
    background-color: rgba(0,0,0,0.3);
    padding-top: 10px;
    width: 80%;
    
}
.title{
    font-size: 1.5em;
    
}
.neon-button {
  font-size: 1.4rem;
  background-color: rgba(0,0,0,0.4);
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: white;
  border: hsl(317 100% 54%) 0.125em solid;
  padding: 0.25em 1rem;
  border-radius: 0.25em;

  
  position: relative;
}
.inputs-wrapper{
    display: flex;
    justify-content: center;
    margin: 20px 20px 0 0;
    gap: 20px;
    
}
h2{
    text-align: center;
    font-size: 2em;
}
.neon-button::before {
  pointer-events: none;
  content: "";
  position: absolute;
  background: hsl(317 100% 54%);
 

  
  filter: blur(1em);
  opacity: 0.7;
}

.neon-button::after {
  content: "";

  
  opacity: 0;
  background-color:hsl(317 100% 54%);
  z-index: -1;
  transition: opacity 100ms linear;
}

.neon-button:hover,
.neon-button:focus {
  color: hsl(317 100% 54%);
  text-shadow: none;
  border: hsl(317 100% 54%) 0.125em solid;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;

  box-shadow: inset 0 0 0.5em 0 hsl(317 100% 54%), 0 0 0.5em 0 hsl(317 100% 54%);

}




.input-box input:valid,
.input-box input:focus
{
    border: 1px solid hsl(317 100% 54%);
} 
.input-box{
    width: 75%;
    min-height: 6vh;
    display: flex;
    align-items: center;
    background-color: rgba(0,0,0,0.25);
    position: relative;
    border: 1px solid hsl(317 100% 54%);
    border-radius: 5px 5px 5px 5px;
}

`