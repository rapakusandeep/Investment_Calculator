import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
    return (
        <section id="header">
            <img src={logo} alt="money bank logo" />
            <h1>Investment Calculator</h1>
        </section>
    );
}