// import SocialMediaIcons from "../components/SocialMediaIcons"


const Footer = () => {
  return (
    <footer className="h-full bg-red pt-3 pb-5">
      <div className="w-5/6 mx-auto">
        {/* <SocialMediaIcons /> */}
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            {/* DIPAK DAS */}
          </p>
          <p className="font-playfair text-md text-black">
            @2024 DAS. All Rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer