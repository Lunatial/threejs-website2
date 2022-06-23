import styled from "styled-components";

const Select = ({selected, setSelected}) => {
    return (
        <Wrapper>
            <select onChange={(e) => setSelected(e.target.value)} value={selected}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option selected value="3">3</option>
                <option selected value="4">4</option>
            </select>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  max-width: 100px;
  display: block;
  text-align: center;
  margin: 0 auto;
`;

export default Select;
