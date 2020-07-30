import styled from 'styled-components';

export const Title = styled.h1`
  padding-top: 60px;
  width:100%;

  @media(max-width: 800px) {
      padding-top: 0px;
  }
`;

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  
  label {
    width:100%;

  }
      input {
        width: 20%;
      }

      button {
        min-width: 40%;
        max-width: 40%;

      }
`;

export const List = styled.ul`
  list-style: none;

  li {
    display: grid;
    background: '#ccc';

  }
`;

export const Button = styled.button`
    color: var(--white);
    background: none;
    /* border: 1px solid var(--white); */
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover, &:focus {
        opacity: .5;
    }
    
    @media(max-width: 800px) {
        left:0;
        bottom:0;
        right:0;
        width:100%;
        background-color: var(--primary);
        color: var(--white);
        text-align: center;
        border:0;
        border-radius: 0;
        &:hover,
        &:focus{
            opacity: 1;
        }
    }
`;
