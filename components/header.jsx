import Logo from "../src/assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={Logo} alt="Logo money bag" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
