import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import styled from "styled-components";
import { formatCurrency } from "../utils/helpers";

const LegendContainer = styled.div`
  font-size: 14px;
  cursor: default;
`;
const StyledLegendHeadIN = styled.div`
  color: var(--color-teal);
`;
const StyledLegendHeadOUT = styled.div`
  color: var(--color-red-700);
  margin-top: 4rem;
`;

const TextColor = styled.span`
  display: grid;
  color: ${(prop) =>
    prop.color === "In" ? "var(--color-teal)" : "var(--color-red-700)"};
`;
function Legend({ chartData }) {
  const totalIn = chartData[0].value;
  const totalOut = chartData[1].value;
  // console.log(totalIn, totalOut);
  return (
    <LegendContainer>
      <div>
        <StyledLegendHeadIN>
          <p>
            IN{" "}
            <span>
              <GoArrowDownLeft />
            </span>
          </p>
        </StyledLegendHeadIN>{" "}
        <hr />
        <span>Total In: </span>
        <TextColor color="In">{formatCurrency(totalIn)}</TextColor>
      </div>
      <div>
        <StyledLegendHeadOUT>
          OUT{" "}
          <span>
            <GoArrowUpRight />
          </span>
        </StyledLegendHeadOUT>{" "}
        <hr />
        <span>Total Out: </span>
        <TextColor>{formatCurrency(totalOut)}</TextColor>
      </div>
    </LegendContainer>
  );
}

export default Legend;
