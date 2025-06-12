import React, { useState } from 'react';
import {
    Container,
    Title,
    ButtonContainer,
    Button,
    FormattedOutput,
} from './SpacedItemsToLines.styles'; // Import styles from the new file
import { Textarea } from './SqlResultFormatter.styles';

const SpacedItemsToLines = () => {
  const [inputText, setInputText] = useState('');
  const [formattedText, setFormattedText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

    const formatText = () => {
        const items = inputText.split(' ');
        const formatted = items.map((item, index) => (
          <div key={index}>{item}</div>
      ))
        setFormattedText(formatted)
    };
    
    const clearInput = () => {
        setInputText('');
        setFormattedText('');
    };

  return (
      <Container>
          <Title>Spaced Text to New Lines</Title>
      <Textarea
          type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder={`Enter space-separated items here. 
For Example:
123 456 789 

will return
123
456
789
                        `}
      />
        <ButtonContainer>
          <Button onClick={formatText}>Format Text</Button>
          <Button onClick={clearInput}>Delete Text</Button>
        </ButtonContainer>
      <FormattedOutput>{formattedText}</FormattedOutput>
    </Container>
  );
};

export default SpacedItemsToLines;