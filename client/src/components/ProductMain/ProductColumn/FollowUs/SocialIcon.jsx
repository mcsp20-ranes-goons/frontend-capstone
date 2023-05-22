import { FaFacebookSquare, FaTwitter, FaYoutube, FaGlobeAmericas, FaInstagram } from "react-icons/fa";


function SocialIcon({name}) {
    return (
        <>
        {name === "Twitter" ? <FaTwitter className="h-6 w-6 text-neutral-400" /> : null}
        {name === "Facebook" ? <FaFacebookSquare className="h-6 w-6 text-neutral-400" /> : null}
        {name === "Youtube" ? <FaYoutube className="h-6 w-6 text-neutral-400" /> : null}
        {name === "Website" ? <FaGlobeAmericas  className="h-6 w-6 text-neutral-400"/> : null}
        {name === "Instagram" ? <FaInstagram className="h-6 w-6 text-neutral-400" /> : null}
        </>
    )
}

export default SocialIcon;