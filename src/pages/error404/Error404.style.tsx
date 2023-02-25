import styled from "styled-components";

export const Error404Style = styled.div`
  background: linear-gradient(106.38deg, rgba(0, 106, 230, 1), hsl(212, 100%, 20%) 100%);
  height: 100vh;
  padding-top: 6rem;
  margin: 0 0;
  .content {
    width: 65%;
    background-color: #f3f3f3;
    margin-left: auto;
    margin-right: auto;
    height: 42rem;
    padding: 20px;
  }
  .elementos {
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
  }

  h1,
  h2,
  p,
  button {
    text-align: center;
  }

  h1 {
    font-size: 250px;
    font-family: "Source Sans Pro";
    color: #ff8900;
    text-shadow: 0px 0px 4px #000000, 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 0%;
    margin-top: 0%;
  }

  h2 {
    font-size: 28px;
    font-family: "Source Sans Pro";
    color: #675a4c;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 2px rgba(0, 0, 0, 0.4);
    margin-top: 0%;
  }

  p {
    font-size: 20px;
    font-family: "Source Sans Pro";
    color: #675a4c;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  button {
    color: #ff951a;
    border: 2px solid #ff951a;
    border-color: #ff951a;
    border-radius: 37.5px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 240px;
    height: 75px;
    align-items: center;
    transition: all 0.3s ease 0s;
  }
  button:hover {
    background-color: #ff951a;
    color: #f3f3f3;
  }
`;
