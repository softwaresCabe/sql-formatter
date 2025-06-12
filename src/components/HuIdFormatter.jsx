import React, { useState } from 'react';
import {
    Container,
    Title,
    Textarea,
    ButtonContainer,
    Button,
    Output,
  } from './HuIdFormatter.styles';




  function HuIdFormatter() {
    const [huIds, setHuIds] = useState('');
    const [formattedHuIds, setFormattedHuIds] = useState('');

    const handleInputChange = (event) => {
        setHuIds(event.target.value);
    };

    const formatHuIds = () => {
        const formatted = huIds
        .trim()
        .replace(/\n/g, ',');
        setFormattedHuIds(formatted);
    };

    const clearInput = () => {
        setHuIds('');
    };
  
    return (
      <Container>
        <Title>hu_id Mass Move Jenkins Job Formatter </Title>
        <Textarea
          value={huIds}
          onChange={handleInputChange}
          placeholder={`Paste your HU IDs here (one per line)
For example:
            
1234
5678
4567

will return
1234,5678,4567
            `}
        />
        <ButtonContainer>
          <Button onClick={formatHuIds}>Format HU IDs</Button>
          <Button onClick={clearInput}>Delete Text</Button>
        </ButtonContainer>
        <Output>{formattedHuIds}</Output>
      </Container>
    );
  }
  
  export default HuIdFormatter;

