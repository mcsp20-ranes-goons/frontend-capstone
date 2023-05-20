import { useEffect, useState } from "react";

function FollowUs({ id }) {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3007/api/socials/${id}`)
      .then((res) => res.json())
      .then((data) => setSocials(data));
  }, [id]);

  return (
    <div>
      <h1 className="text-xl mb-5">FollowUs</h1>
      <div className="flex justify-center gap-4 py-8 mb-5 bg-neutral-800">
        {/*<div>facebook</div>
        <div>playstation</div>
        <div>twitter</div>
        <div>youtube</div>
      </div>*/}

        <ul className="flex align-middle gap-4 list-none w-full overflow-x-scroll scrollbar-hide hide-scrollbar mx-3">
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
                    {social.name}
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
