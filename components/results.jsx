import {
  calculateInvestmentResults,
  formatter,
} from "../src/util/investment.js";

export default function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  console.log(resultsData);

  return <p>Results will be displayed here.</p>;
}
