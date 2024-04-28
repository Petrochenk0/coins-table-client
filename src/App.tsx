import React from 'react';
import Header from './components/Header';
import AmountInput from './components/AmountInput';
import ResultRow from './components/ResultRow';
function App() {
  const [amount, setAmount] = React.useState('123');
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <Header />
      <div className="flex justify-center mt-10 mb-10">
        <AmountInput value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div className="mt-6">
        <ResultRow />
        <ResultRow />
        <ResultRow />
        <ResultRow />
      </div>
    </main>
  );
}

export default App;
