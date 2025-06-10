// SpacedItemsToLines.styles.js

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px; /* Match the width from the original style */
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  resize: vertical;
  margin-bottom: 10px;
  width: 100%;
  height: 200px;
  overflow-y: auto;
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Match the button layout */
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 3px;
  background-color: #4caf50; /* Match the button color */
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #45a049; /* Match the hover color */
  }
`;

export const FormattedOutput = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #f9f9f9; /* Match the output background */
  white-space: pre-wrap; /* Make line breaks visible */
  overflow-wrap: break-word; /* Prevent long words from overflowing */
`;