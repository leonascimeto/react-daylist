import styled from 'styled-components';

export const Container = styled.div`
  width: 290px;
  height: 90px;
  background-color: ${props => props.actived ? '#EE8855' : '#000055'};
  padding: 10px;
  border-radius: .3rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 1rem;
  transition: .2s;

  img{
    width: 1.5rem;
    height: 1.5rem;
  }

  span{
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #fff;
    align-self: flex-end;
  }

  &:hover{
    background-color: #EE8855;
  }
` 