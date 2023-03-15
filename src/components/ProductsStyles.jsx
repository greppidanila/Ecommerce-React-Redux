import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

export const SkeletonCol = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;
export const StyledCard = styled(Card)`
  width: 100%;
  border: none;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.3);
`;

export const StyledCardImg = styled(Card.Img)`
  height: 10rem;
  object-fit: contain;
  padding-top: 1.5rem;
`;

export const StyledCardBody = styled(Card.Body)`
  padding: 1.25rem;
`;

export const StyledCardTitle = styled(Card.Title)`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const StyledCardText = styled(Card.Text)`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;    
  justify-content: space-between;
  flex-direction: row;
`;

export const StyledPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 500;  
  margin-right: 1rem;

`;

export const StyledButton = styled(Button)`
  border-radius: 1rem;
  font-weight: 500;
`;

export const StyledBestSeller = styled.div`
  background-color: orange; 
  color: white; 
  border-radius: 0.5rem; 
  margin-bottom: 0.5rem; 
  width: fit-content;
  padding-inline: 0.4rem;  
  display: inline-flex;
`;

export const StyledRatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledStar = styled.span`
  color: #f8ce0b;
  font-size: 1.25rem;
  margin-right: 0.25rem;
`;


