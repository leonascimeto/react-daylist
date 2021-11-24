import styled from "styled-components";

export const Container = styled.div`
  width: 290px;
  height: 190px;
  padding: 10px;
  box-shadow: 0px 0px 9px 0px #000000;
  border-radius: .5rem;
  cursor: pointer;
  transition: all .3s ease;
  margin: 1rem;
  opacity: ${props => props.done ? 0.6 : 1};


  &:hover{
    opacity: .6;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85%;

  img{
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
  }
  
  span{
    color: #EE8855;
    font-weight: bold;
  }
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  height: 15%;
  align-items: flex-end;

  span{
    color: #000055;
  }
`