type TypeResultRow = {
  loading?: boolean;
};

export default function ResultRow({ loading }: TypeResultRow) {
  return (
    <div className="relative border min-h-12 border-white/10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 my-4 overflow-hidden">
      <div className="flex gap-4">
        <div className="">logo</div>
        <div className="grow">name coin</div>
        <div className="flex gap-2">
          <span className="text-xl text-purple-200/80">0.01</span>
          <span className="text-xl text-purple-300/70">BTC</span>
        </div>
        {loading && (
          <div className="inset-0 absolute bg-gradient-to-r from-transparent via-blue-800/50 to-transparent skelet-animation" />
        )}
      </div>
    </div>
  );
}
