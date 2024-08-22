export default function Tag({ tag, filter, setFilter }) {
  return (
    <button
      type="button"
      aria-label="filter"
      className={
        filter === tag
          ? `text-md md:text-lg border-2 border-transparent text-black rounded-full btn bg-primary`
          : `text-md md:text-lg border-2 border-white rounded-full btn`
      }
      key={tag}
      onClick={() => setFilter(tag)}
    >
      {tag}
    </button>
  );
}
