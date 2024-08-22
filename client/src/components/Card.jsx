export default function Card({ item }) {
  return (
    <div
      className="h-[300px] w-[250px] relative overflow-hidden after:conte-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b from-transparent to-black flex"
      style={{ background: `url('${item.image}') center/cover` }}
    >
      <p className="z-50 self-end px-4 py-6 text-2xl font-bold text-white">
        {item.title}
      </p>
    </div>
  );
}
