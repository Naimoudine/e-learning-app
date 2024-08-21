export default function Card({ item }) {
  return (
    <div
      className="h-[300px] w-[250px] relative overflow-hidden after:conte-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b from-transparent to-black flex"
      style={{ background: `url('${item.image}') center/cover` }}
    >
      <h2 className="self-end z-50 md:text-2xl font-bold text-white py-6 px-4">
        {item.title}
      </h2>
    </div>
  );
}
