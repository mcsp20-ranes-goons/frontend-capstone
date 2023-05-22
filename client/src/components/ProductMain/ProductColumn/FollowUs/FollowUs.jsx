import { useEffect, useState } from "react";
import SocialIcon from "./SocialIcon";

function FollowUs({ id }) {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3007/api/socials/${id}`)
      .then((res) => res.json())
      .then((data) => setSocials(data));
  }, [id]);

  return (
    <div>
      <h1 className="text-xl mb-5">Follow Us</h1>
      <div className="flex justify-center gap-4 py-8 mb-5 bg-neutral-800">

        <ul className="flex justify-center gap-8  mx-3">
          {socials &&
            socials.length > 0 &&
            socials.map((social) => {
              return (
                <li key={social.id}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={social.url}
                    className="hover:text-blue-500 transition duration-400"
                  >
                    <SocialIcon name={social.name} />
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default FollowUs;
