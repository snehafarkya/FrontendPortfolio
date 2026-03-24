export default function GradientBG() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute w-[600px] h-[600px] bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse top-10 left-10" />
      <div className="absolute w-[500px] h-[500px] bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse bottom-10 right-10" />
      <div className="absolute w-[400px] h-[400px] bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse top-1/2 left-1/2" />
    </div>
  );
}