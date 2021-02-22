import React from 'react';
import styled from 'styled-components';

//스타일 컴포넌트에서는 inline type을 쓰는게 좋다
const Container = styled.span<{isBlue:boolean}>`
    color: ${props => (props.isBlue ? props.theme.blueColor : 'black')};
`;

interface IProps {
    count : number;
}

const Number : React.FunctionComponent<IProps> = ({count}) => (
    <Container isBlue={count>10}>{count}</Container>
)

export default Number;