import styled from 'styled-components'


export const Container = styled.div`
width: 100%;
min-height:100vh;
display: flex;
justify-content: center;
align-items: center;
color: white;

.box{
    min-width: 35%;
    min-height: 30vh;
    background-color: rgb(0,0,0, 0.5);
    border-radius: 2rem 2rem 2rem 2rem;
    padding: 1em;
    text-align:center;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
}
.wrapper{
    display: flex;
    flex-direction: column;
    gap: 40px;
    min-height: 90%;
    min-width: 60%;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
}

.login{
    text-align: left;
}
.input-box{
   
    width: 250px;
    position: relative;
    margin-bottom: 2em;
}

input{
    width: 100%;
    padding: 10px 10px 10px 0px;
    border: 1px solid hsl(317 100% 54%);
    border-radius: 5px;
    outline: none;
    color:#fff;
    font-size: 1em;
    background-color: rgba(0,0,0,0.1);
    
    
}

.input-box span{
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px;
    pointer-events: none;
    font-size: 1em;
    color:rgba(255,255,255,0.25);
    text-transform: uppercase;
    
}

.input-box input:valid ~ span,
.input-box input:focus ~ span
{
    
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

.neon-button::before {
  pointer-events: none;
  content: "";
  position: absolute;
  background: hsl(317 100% 54%);
  top: 120%;
  left: 0;
  width: 100%;
  height: 100%;

  transform: perspective(0.7em) rotateX(40deg) scale(1, 0.35);
  filter: blur(1em);
  opacity: 0.7;
}

.neon-button::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 2em 0.5em hsl(317 100% 54%);
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

.neon-button:hover::before,
.neon-button:focus::before {
  opacity: 1;
}
.neon-button:hover::after,
.neon-button:focus::after {
  opacity: 1;
}

.span-text{
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 0.9rem;
    color: rgba(255,255,255,0.5);
}

.second-span:hover,
.forgot-pass:hover{
    color: hsl(317 100% 54%);
}
a{
    text-decoration: none;
    color: hsl(317 100% 54%);
}

@media only screen and (max-width: 1300px){
    .box{
        background: none;
    }
}
`