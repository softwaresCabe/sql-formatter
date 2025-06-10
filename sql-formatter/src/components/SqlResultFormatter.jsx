import React, { useState } from 'react';
import {
    Container,
    Title,
    Textarea,
    ButtonContainer,
    Button,
    Output,
  } from './SqlResultFormatter.styles';

function SqlResultFormatter() {
    const [sqlResults, setSqlResults] = useState('');
    const [formattedResults, setFormattedResults] = useState('');
  
    const handleInputChange = (event) => {
      setSqlResults(event.target.value);
    };
  
    const formatResults = () => {
      let formatted = sqlResults
        .trim()
        .split('\n')
        .map((line) => `'${line}',`)
        .join('\n');

      // Remove the trailing comma from the last line
    if (formatted.length > 0) {
        formatted = formatted.replace(/,(\s*)$/, '$1');
      }
    
      setFormattedResults(formatted);
    };
  
    const clearInput = () => {
        setSqlResults('');
        setFormattedResults('');
    };
  
    return (
      <Container>
        <Title>SQL Result Formatter</Title>
        <Textarea
            id="sqlResults"
            value={sqlResults}
            onChange={handleInputChange}
            placeholder={`Paste your SQL query results here 
Each new line will be formatted for a new query
For example:

1234
5678
4567

will return

'1234',
'5678',
'4567'
                `}
            />
        <ButtonContainer>
          <Button onClick={formatResults}>Format Results</Button>
          <Button onClick={clearInput}>Delete Text</Button>
        </ButtonContainer>
        <Output id="formattedOutput">{formattedResults}</Output>
      </Container>
    );
  }
  
  export default SqlResultFormatter;