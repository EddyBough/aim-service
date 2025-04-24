interface StatCardProps {
  number: string;
  text: string;
}

export default function StatCard({ number, text }: StatCardProps) {
  return (
    <div className="p-6 transition-all bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10">
      <div className="text-3xl font-bold text-[#FFD700]">{number}</div>
      <div className="mt-2 text-sm text-gray-300">{text}</div>
    </div>
  );
}
