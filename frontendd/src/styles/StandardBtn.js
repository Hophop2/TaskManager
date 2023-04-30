import styled from 'styled-components'

export const StandBtn = styled.button`

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


&:before {
  pointer-events: none;
  content: "";
  position: absolute;
  background: hsl(317 100% 54%);
 

  
  filter: blur(1em);
  opacity: 0.7;
}

&:after {
  content: "";

  
  opacity: 0;
  background-color:hsl(317 100% 54%);
  z-index: -1;
  transition: opacity 100ms linear;
}

&:hover,
&:focus {
  color: hsl(317 100% 54%);
  text-shadow: none;
  border: hsl(317 100% 54%) 0.125em solid;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;

  box-shadow: inset 0 0 0.5em 0 hsl(317 100% 54%), 0 0 0.5em 0 hsl(317 100% 54%);

}
`