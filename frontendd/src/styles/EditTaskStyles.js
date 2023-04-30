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

form{
    width: 70%;
    height: 90%;
}

.wrapper{
   height: 100%;
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
    left: 10%;
    top: 0;
    transform: translateX(10px) translateY(-7px);
    padding: 0 10px;
    background-color:hsl(317 100% 54%); ;
    font-size: 0.7em;
    border-radius: 2px;
    color: white;
   
    
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






.input-box{
    width: 100%;
    min-height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: relative;
    
}

`