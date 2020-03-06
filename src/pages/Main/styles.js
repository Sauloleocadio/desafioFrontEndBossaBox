import styled from "styled-components";

export const Header = styled.div`
  max-width: 700px;
  margin: 40px auto;

  p {
    display: flex;
    align-items: center;
    flex-direction: row;
    text-align: left;
    font-family: Bold 20px/23px PT Mono;
    font-size: 32px;
    letter-spacing: 0;
    color: #170c3a;
    opacity: 1;
  }

  h1 {
    display: flex;
    align-items: center;
    flex-direction: row;
    text-align: left;
    margin-top: 20px;
    font-family: Bold 20px/23px PT Mono;
    font-size: 18px;
    letter-spacing: 0;
    color: #170c3a;
    opacity: 1;
  }
`;

export const Container = styled.div``;

export const Form = styled.form`
  max-width: 700px;
  margin: 0px auto;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    /* flex: 1; */
    border: 1px solid #170c3a;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 11px;
    font-family: Bold 20px/23px PT Mono;
    height: 28px;

    border-radius: 5px;
    opacity: 1;

    & + input {
      height: 22px;
      width: 16px;
      margin-left: 8px;
      align-items: center;
    }
  }
  span {
    font-size: 12px;
    margin: 8px;
    font-family: Bold 20px/23px PT Mono;
    color: #170c3a;
  }
`;

export const SubmitButton = styled.button`
  outline: 0;
  border: 0;
  padding: 8px;
  background: #4cd137 0% 0% no-repeat padding-box;
  border-radius: 5px;
  margin-left: 120px;
  height: 28px;

  h1 {
    text-align: center;
    font-size: 8px;
    font-family: Bold 20px/23px PT Mono;
    letter-spacing: 0.36px;
    color: #ffffff;
    opacity: 2;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    /* display: flex;
    align-items: center;
    flex-direction: row; */
    svg {
      margin-right: 10px;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
    }

    &:hover {
      color: #170c3a;
    }
  }
`;

export const List = styled.ul``;

export const DeleteButton = styled.button``;
