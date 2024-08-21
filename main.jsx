function App() {
  const [num1, setNum1] = React.useState(null);
  const [num2, setNum2] = React.useState(null);
  const [result, setResult] = React.useState("");

  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  React.useEffect(() => {
    if (num1 > 1 && num2 > 1) {
      if (gcd(num1, num2) === 1) {
        setResult("は互いに素である");
      } else {
        setResult("は互いに素でない");
      }
    }
  }, [num1, num2]);

  return (
    <main>
      <input type="number" min="2" value={num1 !== null ? num1 : ""} onChange={(e) => setNum1(e.target.value ? parseInt(e.target.value) : null)} />と
      <input type="number" min="2" value={num2 !== null ? num2 : ""} onChange={(e) => setNum2(e.target.value ? parseInt(e.target.value) : null)} />
      <p>{result}</p>
    </main>
  );
}

const target = document.querySelector("#app");
const root = ReactDOM.createRoot(target);
root.render(<App />);
