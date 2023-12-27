export default function FeatureCard( {heading , paragraph}) {
  return (
    <div className="col-span-8 flex items-center justify-center pt-14">
      <div
        className="h-80 w-3/5 rounded-lg  text-white flex items-center justify-center flex-col px-10"
        style={{
          background: "rgba(255,255,255,.1)",
          boxShadow: "0 25px 45px rgba(0, 0, 0, .2)",
          border: "2px solid rgba(255,255,255,.5)",
          borderRight: "2px solid rgba(255,255,255,.2)",
          borderBottom: "2px solid rgba(255,255,255,.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1 className="text-3xl mb-10">{heading}</h1>
        <p className="text-xl mb-10">{paragraph}</p>
      </div>
    </div>
  );
}
