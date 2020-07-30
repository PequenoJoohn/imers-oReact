import styled from 'styled-components';

export const Title = styled.h1`
  --bodyPaddingTop: 94px;
  padding-top: var(--bodyPaddingTop);
  width:100%;
`

export const Form = styled.form`

  /* background-color: darkkhaki; */
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
  /* display: flex; */

  li {
    display: grid;
    background: '#ccc';

  }
`;