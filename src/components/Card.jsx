import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
   position: relative;
`;

const Image = styled.img`
   width: 300px;
   height: 300px;
   transition: transform 0.5s;

   &:hover {
      transform: rotateY(180deg);
   }
`;

export default function Card(props) {
   return (
      <Container>
         <button onClick={props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <Image src={props.image} alt={'imagen'} />
      </Container>
)};
