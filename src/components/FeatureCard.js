export default function FeatureCard( {heading , paragraph}) {
  return (
    <div className="h-full w-full  lg:col-span-8 flex items-center justify-center lg:pt-14">
      <div className=" mx-2 h-2/3 lg:h-80 lg:w-3/5 rounded-2xl border-2 border-yellow-400 text-slate-900 flex items-center justify-center drop shadow-xl flex-col px-10 bg-gradient-to-r from-rose-100 to-teal-100">
        <h1 className="text-3xl mb-10">{heading}</h1>
        <p className="text-xl mb-10">{paragraph}</p>
      </div>
    </div>
  );
}
