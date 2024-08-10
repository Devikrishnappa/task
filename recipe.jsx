import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #FAAB36;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;

const AddRecipe = () => {
  return (
    <Container>
      <Title>Add Recipe</Title>
      <form>
        <FormGroup>
          <Label htmlFor="recipeName">Recipe Name</Label>
          <Input
            id="recipeName"
            type="text"
            required
            placeholder="Enter recipe name"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="ingredients">Ingredients</Label>
          <TextArea
            id="ingredients"
            required
            placeholder="Enter ingredients"
            rows={4}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="instructions">Instructions</Label>
          <TextArea
            id="instructions"
            required
            placeholder="Enter instructions"
            rows={6}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default AddRecipe;
