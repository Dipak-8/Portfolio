import AnchorLink from "react-anchor-link-smooth-scroll" 

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = "relative bg-yellow before:absolute before:w-4 before:h-4 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]";
  
  return (
    <div className='flex flex-col fixed gap-6 top-[60%] right-7'>
      <AnchorLink
        className={`${selectedPage === 'home' ? selectedStyles : "bg-grey"}
        w-2 h-2 rounded-full`}
        href="#home"
        onClick = {() => setSelectedPage('home')}
      />
      <AnchorLink
        className={`${selectedPage === 'skills' ? selectedStyles : "bg-grey"}
        w-2 h-2 rounded-full`}
        href="#skills"
        onClick = {() => setSelectedPage('skills')}
      />
      <AnchorLink
        className={`${selectedPage === 'projects' ? selectedStyles : "bg-grey"}
        w-2 h-2 rounded-full`}
        href="#projects"
        onClick = {() => setSelectedPage('projects')}
      />
      <AnchorLink
        className={`${selectedPage === 'testimonials' ? selectedStyles : "bg-grey"}
        w-2 h-2 rounded-full`}
        href="#testimonials"
        onClick = {() => setSelectedPage('testimonials')}
      />
      <AnchorLink
        className={`${selectedPage === 'contact' ? selectedStyles : "bg-grey"}
        w-2 h-2 rounded-full`}
        href="#contact"
        onClick = {() => setSelectedPage('contact')}
      />
    </div>
  )
}

export default DotGroup