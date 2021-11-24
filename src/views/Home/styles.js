import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
`

export const FilterArea = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  button{
    background: none;
    border: none;
  }
`

export const Content = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 6rem;

  a{
    text-decoration: none;
  }
`