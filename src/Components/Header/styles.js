import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: #000055;
  border-bottom: 10px solid #55EE22;
  display: flex;
  justify-content: space-between;
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  img{
    width: 180px;
    height: 70px;
  }
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2rem;
  a{
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    margin-left: 1rem;
    font-size: 1rem;
    font-weight: bold;

    &:hover,
    &:focus{
      color: #EE8855;
    }
  }

  button{
      border:none;
      background: none;
      cursor: pointer;
    }

  #notification{
    img{
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
    position: relative;
    }

    span{
      background-color: #fff;
      color: #EE8855;
      padding: .3rem .5rem;
      border-radius: 50%;
      position: relative;
      top:-22px;
      right: 12px;
    }

    &:hover{
      opacity: 0.5;
    }
  }

  .divisor{
    display: inline-block;
    height: 1rem;
    width: 1px;
    background-color: #fff;
    margin-left: 1rem;
    opacity: .5;
  }

  #btn-sair{
    color: #fff;
    padding: 5px 10px;
    border-radius: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;

    &:hover{
      color: #ee8855;
    }
  }
`