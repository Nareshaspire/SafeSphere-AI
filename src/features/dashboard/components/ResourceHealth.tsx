const resources = [
  {
    name: "EMS",
    value: 91,
  },
  {
    name: "Fire",
    value: 82,
  },
  {
    name: "Police",
    value: 97,
  },
  {
    name: "Hospitals",
    value: 76,
  },
];

export default function ResourceHealth() {

  return (

    <div className="rounded-3xl border border-slate-700 bg-[#101827] p-6">

      <h2 className="mb-6 text-xl font-bold text-white">
        Resource Health
      </h2>

      {resources.map((resource) => (

        <div
          key={resource.name}
          className="mb-6"
        >

          <div className="mb-2 flex justify-between">

            <span className="text-slate-300">
              {resource.name}
            </span>

            <span className="text-white">
              {resource.value}%
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-700">

            <div
              className="h-3 rounded-full bg-sky-500"
              style={{
                width: `${resource.value}%`,
              }}
            />

          </div>

        </div>

      ))}

    </div>

  );

}