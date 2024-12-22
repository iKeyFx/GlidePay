import styled from "styled-components";

const Header = styled.div`
  h3 {
    margin-bottom: 10px;
  }

  @media (max-width: 640px) {
    h3 {
      font-size: 16px;
    }

    h4 {
      font-size: 13px;
    }

    li {
      font-size: 14px;
    }
  }
`;
function InstructAddFund() {
  return (
    <Header>
      <h3>Add Money to Your Wallet</h3>
      <div>
        <h4>Follow the instructions below to add funds to your wallet:</h4>
        <ol>
          <li>Enter the desired amount.</li>
          <li>{`Click the "Add Money" button`}</li>
          <li>
            You will be redirected to a secure payment page to complete your
            transaction
          </li>
        </ol>
      </div>
    </Header>
  );
}

export default InstructAddFund;
