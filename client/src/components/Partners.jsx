import forbes from "../assets/images/partners/forbes.svg";
import mit from "../assets/images/partners/mit.svg";
import oxford from "../assets/images/partners/oxford.svg";
import slack from "../assets/images/partners/slack.svg";

export default function Partners() {
  const brands = [forbes, mit, oxford, slack];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-12">
      {brands.map((brand) => (
        <img
          className="w-auto h-20"
          key={brand}
          src={brand}
          title={`${brand.slice(28, brand.length - 4)}`}
          alt={`${brand.slice(28, brand.length - 4)} logo`}
        />
      ))}
    </div>
  );
}
