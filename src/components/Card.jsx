import styled from 'styled-components';

const Container = styled.div`
   position: relative;
`;

const Image = styled.img`
   width: 200px;
   height: 200px;
   transition: transform 0.5s;

   &:hover {
      transform: rotateY(180deg);
   }
`;

export default function Card(props) {
   return (
         <Container>
               <button onClick={props.onClose}>X</button>
               <h2>{props.name}</h2>
               <h2>{props.status}</h2>
               <h2>{props.species}</h2>
               <h2>{props.gender}</h2>
               <h2>{props.origin}</h2>
         <Image src={props.image} alt={'imagen'} />
    </Container>
)};
