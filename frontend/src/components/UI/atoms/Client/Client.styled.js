import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const StyledDiv = styled.div`
  width: 300px;
  background-color: var(--background-color);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.3s, box-shadow 0.3s;

  :hover {
    background-color: #eee;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    :hover {
      opacity: 0.9;
    }

    :first-of-type {
      background-color: #92c944;
      color: #000;
      margin-bottom: 1em;
    }

    :last-of-type {
      background-color: #851b1b;
      color: #fff;
    }
  }
`;

export const StyledName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const StyledLabel = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const StyledValue = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;