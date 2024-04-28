import Input, { InputProps } from './Input';
export default function AmountInput(props: InputProps) {
  return (
    <div className="flex items-center bg-blue-950 rounded-lg">
      <Input value={props.value} onChange={props.onChange} />
      <span className="text-white/50 p-4">USD</span>
    </div>
  );
}
