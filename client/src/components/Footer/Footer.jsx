import {Link} from 'react-router-dom'
import logo from '../../assets/images/sun.png'
import {RiLinkedinFill} from 'react-icons/ri'
import sun from '../../assets/images/sun.png'
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'

const socialLinks = [
  {
    path: "https://www.youtube.com/watch?v=FMUzOPNlwBY",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "https://github.com/ImRishabhRawat",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "https://www.instagram.com/_rishabh.rawat_/",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "https://www.linkedin.com/in/1m-rishabh-singh-rawat/",
    icon: <AiFillLinkedin className='group-hover:text-white w-4 h-5' />
  },
]

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/blog",
    display: "Blog",
  },
]

const quickLinks02 = [
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/doctors",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get an Opinion",
  },
]

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="pb-16 pt-10 bg-[#ece7e76f]">
      <div className="container border-t-2 border-zinc-500 pt-4">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div className="">
            <div className='flex items-center gap-2 md:gap-4'>
          <img src={logo} alt="logo" className='w-8 h-8 md:w-10 md:h-10' />
          <h2 className='text-[24px] font-[600] md:text-[28px]'>SolarMed</h2>
        </div>
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>Copyright @ {year} developed by Rishabh Singh Rawat </p>
            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                {link.icon}
              </Link>)}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links</h2>
            <ul>
              {quickLinks01.map((item, index) => <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                  {item.display}
                </Link>
              </li> )}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">I want to:</h2>
            <ul>
              {quickLinks02.map((item, index) => <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                  {item.display}
                </Link>
              </li> )}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Support</h2>
            <ul>
              {quickLinks03.map((item, index) => <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                  {item.display}
                </Link>
              </li> )}
            </ul>
          </div>
        </div>
        <div className="w-full -mb-[70px] pt-5 flex justify-center items-center">
          <h1 className="font-['Helvetica_Now_Display'] text-[15vw]  leading-[.8] text-headingColor font-black md:text-[17vw] xl:text-[16.5vw]   overflow-hidden text-center">
             S<span className='inline-block'>
                    <img src={ sun } alt="sun" className="w-[11.5vw] md:w-[13vw] " />
                  </span> 
              LARMED
          </h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer
