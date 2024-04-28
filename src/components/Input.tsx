import { ChangeEventHandler } from 'react';

export type InputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
export default function Input(props: InputProps) {
  return (
    <input
      type="text"
      placeholder="Enter amount"
      className="border border-transparent bg-blue-950 p-2 outline-none transition-all duration-300 ease-in-out hover:border-white hover:border-opacity-10 pl-4 font-bold rounded-lg text-2xl w-48"
      value={props.value}
      onChange={props.onChange}
    />
  );
}
