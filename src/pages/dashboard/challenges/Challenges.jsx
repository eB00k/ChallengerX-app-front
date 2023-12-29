import { Link } from "@tanstack/react-router";
import { CHALLENGES_DATA } from "../../../data/data";
import ChallengeItem from "./ChallengeItem";

function Challenges() {
  return (
    <div className="spacing-6-0 flex flex-col gap-4 grid-in-main">
      <div className="text-txt-white text-lg">My Challenges</div>
      {CHALLENGES_DATA.map((item) => (
        <Link key={item.id} to={`/dashboard/challenges/${item.id}`}>
          <ChallengeItem {...item} />
        </Link>
      ))}
    </div>
  );
}

export default Challenges;
