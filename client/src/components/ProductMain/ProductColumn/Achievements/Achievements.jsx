import { useState, useEffect } from "react";

function Achievements({ id, total_achievements }) {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3008/api/achievements/${id}`)
      .then((result) => {
        if (result.status === 404) {
          return [];
        } else {
          return result.json();
        }
      })
      .then((data) => setAchievements(data));
  }, [id]);

  const display = (achievement) => {
    let trophyColor;
    if (achievement.trophy_type === "bronze") {
      trophyColor = "rgb(202, 81, 43)";
    } else if (achievement.trophy_type === "silver") {
      trophyColor = "rgb(192, 192, 192)";
    } else {
      trophyColor = "rgb(255, 215, 0)";
    }
    return (
      <div className="flex flex-col">
        <img
          className="w-32 h-32 mb-4"
          src={achievement.image}
          alt={achievement.name}
        />
        <div className="truncate w-32">{achievement.name}</div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5"
            viewBox="0 0 20 14"
            style={{ color: trophyColor }}
          >
            <path
              d="M1.78952 1.03177H3.21722C3.21547 1.05694 3.21455 1.08267 3.21455 1.10896L3.21455 2.21484H1.92245V3.65386C1.92245 4.29719 2.17572 4.91418 2.62655 5.36908C2.8022 5.54633 3.00223 5.69331 3.21869 5.8067C3.23933 6.28339 3.33644 6.74005 3.49797 7.16449C2.85933 7.01104 2.26929 6.68172 1.7975 6.20565C1.1268 5.52887 0.75 4.61096 0.75 3.65386V2.0807C0.75 1.50139 1.21541 1.03177 1.78952 1.03177Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
            <path
              d="M4.57719 7.26263C4.37731 6.90243 4.24094 6.50149 4.18336 6.07526L4.17941 6.04498C4.16166 5.90411 4.15251 5.76052 4.15251 5.61478L4.15251 1.10896C4.15251 1.02488 4.24618 0.944783 4.41557 0.871928C4.92375 0.653363 6.11342 0.5 7.49999 0.5C9.34874 0.5 10.8475 0.772637 10.8475 1.10895V5.61478C10.8475 5.77097 10.837 5.9247 10.8166 6.07526C10.7459 6.59904 10.5561 7.0846 10.2758 7.50333C9.6742 8.40183 8.65546 8.99257 7.49999 8.99257L7.47834 8.9925C6.23167 8.98454 5.14668 8.28891 4.57719 7.26263Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
            <path
              d="M11.502 7.1645C11.6635 6.74006 11.7606 6.2834 11.7813 5.80672C11.9978 5.69332 12.1978 5.54634 12.3735 5.36908C12.8243 4.91418 13.0775 4.29719 13.0775 3.65386V2.21484H11.8227V1.03177H13.2105C13.7846 1.03177 14.25 1.50139 14.25 2.0807V3.65386C14.25 4.61096 13.8732 5.52887 13.2025 6.20565C12.83 6.58157 12.3836 6.866 11.898 7.04457C11.7686 7.09215 11.6364 7.13221 11.502 7.1645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
            <path
              d="M10.3826 12.1379C10.3826 12.7521 9.09198 13.25 7.49998 13.25C5.90798 13.25 4.6174 12.7521 4.6174 12.1379C4.6174 11.9371 4.75526 11.7488 4.99644 11.5862L4.99892 11.5845L5.54498 11.2735C6.0756 10.9712 6.51643 10.5312 6.82173 9.99911C6.90651 9.85135 7.12539 9.74247 7.49998 9.74247C7.87457 9.74247 8.09345 9.85135 8.17823 9.99911C8.48353 10.5312 8.92435 10.9712 9.45498 11.2735L10.001 11.5845L10.008 11.5893C10.2464 11.7511 10.3826 11.9384 10.3826 12.1379Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div>{achievement.xp} XP</div>
        </div>
      </div>
    );
  };

  const component = (
    <div className="flex flex-col my-7">
      <div className="text-xl my-5">Available Achievements</div>
      <div className="flex justify-between pb-5">
        {achievements.map((achievement) => display(achievement))}
      </div>
      <a
        href="https://store.epicgames.com/en-US/achievements/redfall"
        className="bg-neutral-800 rounded text-xs text-center py-4 transition-all ease-linear hover:bg-neutral-700 hover:text-neutral-300"
      >
        SEE ALL {total_achievements} ACHIEVEMENTS
      </a>
    </div>
  );

  return <div>{achievements.length > 0 ? component : null}</div>;
}

export default Achievements;
