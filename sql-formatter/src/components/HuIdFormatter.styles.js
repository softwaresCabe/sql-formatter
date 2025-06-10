import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
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
  width: 100%; // Make the textarea take full width
  height: 200px; // Set a fixed height (adjust as needed)
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 3px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const Output = styled.pre`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #f9f9f9;
  overflow-wrap: break-word; // Add this line
  white-space: pre-wrap; // Add this line
`;