export default function MenuForm() {
  return (
    <div className="w-1/2 bg-white p-6">
      <h2 className="text-xl font-semibold mb-4">Menu Detail</h2>

      <div className="space-y-4">
        <input className="w-full border p-2 rounded" placeholder="Menu Name" />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>
    </div>
  );
}
