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
    border-right: 2px solid hsl(380 100% 54%);
    border-left: 2px solid hsl(380 100% 54%);
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

display: flex;
margin: 1em 2em 2em 2em;
flex-direction: column;
justify-content: space-evenly;
border-right: 2px solid hsl(380 100% 54%);
    border-left: 2px solid hsl(380 100% 54%);
    border-radius: 2em;

}
.sub{
    padding: 15px 15px 15px 0;
    align-items: center;
}


.input-box span{
    position: absolute;
    left: 4%;
    top: 0;
    transform: translateX(10px) translateY(-7px);
    padding: 0 10px;
    background-color:hsl(380 100% 54%); ;
    font-size: 0.7em;
    border-radius: 2px;
    color: white;
   
    
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




.content{
    line-height: 45px;
}


.input-box{
    width: 75%;
    min-height: 6vh;
    display: flex;
    align-items: center;
    background-color: rgba(0,0,0,0.25);
    position: relative;
    padding-left: 10px;
    border-radius: 5px 5px 5px 5px;
}

`