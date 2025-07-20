const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-7 gap-6'>
      <a 
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/dipak-das-45105a28b/"
        target="_blank"
        rel="noreferrer"
      >
        <img 
          alt="linkedin-link" 
          src="./assets/linkedin.png" 
        />
      </a>

      <a 
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Dipak-8"
        target="_blank"
        rel="noreferrer"
      >
        <img 
          alt="github-link" 
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png" 
          className="w-7 h-7"
        />
      </a>

      <a 
        className="hover:opacity-50 transition duration-500"
        href="https://leetcode.com/u/Dipak10das"
        target="_blank"
        rel="noreferrer"
      >
        <img 
          alt="leetcode-link" 
          src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png" 
          className="w-8 h-8"
        />
      </a>

      <a 
        className="hover:opacity-50 transition duration-500"
        href="https://x.com/DipakXii"
        target="_blank"
        rel="noreferrer"
      >
        <img 
          alt="twitter-link" 
          src="./assets/twitter.png" 
        />
      </a>
    </div>
  )
}

export default SocialMediaIcons