import React from 'react';
import styled from 'styled-components';

// Styled Components
const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f9a2a3, #ebebeb);
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff; /* Update to white */
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #fff; /* Update to white */
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #fff; /* Update to white */
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Title>Whole30 Living</Title>
      <Subtitle>
        Whole30 is a 30-day dietary reset program designed to help you identify food sensitivities, improve your relationship with food, and reset your eating habits.
      </Subtitle>
      <Text>
        The program emphasizes whole, unprocessed foods and eliminates certain food groups such as grains, legumes, dairy, added sugars, and processed foods. It encourages consuming high-quality meats, seafood, vegetables, fruits, nuts, and healthy fats.
      </Text>
      <Text>
        Some potential benefits of following the Whole30 lifestyle include improved energy levels, better digestion, reduced inflammation, weight loss, and a better understanding of how food affects your body.
      </Text>
      <Text>
        It's important to note that Whole30 is not intended as a long-term diet, but rather as a short-term reset to help you discover how different foods may impact your well-being.
      </Text>
    </HomePageContainer>
  );
};

export default HomePage;


