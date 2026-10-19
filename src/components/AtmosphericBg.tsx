export default function AtmosphericBg({
  topOrb = true,
  midOrb = true,
}: {
  topOrb?: boolean;
  midOrb?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {topOrb && (
        <div className="absolute -right-40 -top-32 h-[28rem] w-[28rem] rounded-full bg-blue-600/[0.13] blur-[120px] motion-safe:animate-[pulse_8s_ease-in-out_infinite]" />
      )}
      {midOrb && (
        <div className="absolute -left-48 top-[36%] h-[26rem] w-[26rem] rounded-full bg-indigo-600/[0.09] blur-[130px]" />
      )}
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.12) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />
    </div>
  );
}
