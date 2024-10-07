import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-[#2b3649] text-white pb-4 pt-8">
        <nav className="grid grid-flow-col text-lg gap-4 -mb-12">
          <Link to='https://www.facebook.com/artdirectionbd'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
          <Link to='https://www.youtube.com/channel/UCUj0Kp4-GvjAgYiaL-1z91g/videos'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
          <Link to='https://www.instagram.com/artdirection_photography_bd/'>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="35" viewBox="0 0 35 35" fill="none">
              <path d="M25.342 0H9.63105C4.27748 0 0 4.27748 0 9.63105V25.3689C0 30.6956 4.27748 35 9.63105 35H25.3689C30.6956 35 35 30.7225 35 25.3689V9.63105C34.9731 4.27748 30.6956 0 25.342 0ZM31.9062 23.97C31.9062 28.3282 28.3551 31.9331 23.9431 31.9331H11.03C6.67179 31.9331 3.06687 28.382 3.06687 23.97V11.03C3.06687 6.67179 6.61799 3.06687 11.03 3.06687H24.0238C28.382 3.06687 31.9869 6.61799 31.9869 11.03V23.97H31.9062Z" fill="white" />
              <path d="M23.8624 11.1918L23.7817 11.1111L23.701 11.0304C22.033 9.36243 19.8001 8.44775 17.4865 8.44775C12.5365 8.47466 8.52804 12.5369 8.55494 17.487C8.55494 19.8813 9.52343 22.168 11.1914 23.8628C12.8593 25.5577 15.1191 26.4993 17.4865 26.4993C22.4635 26.4185 26.445 22.2487 26.3643 17.2179C26.3105 14.985 25.4496 12.8059 23.8624 11.1918ZM17.4865 23.4324C14.2044 23.4862 11.5411 20.8498 11.4873 17.5677C11.4335 14.2856 14.0699 11.6222 17.352 11.5684C20.6341 11.5146 23.2975 14.1511 23.3513 17.4331V17.5139C23.3513 20.7152 20.7148 23.3786 17.4865 23.4324Z" fill="white" />
              <path d="M29.0277 8.04428C29.0277 9.22799 28.113 10.1965 26.9293 10.1965C26.3643 10.1965 25.8263 9.98125 25.4497 9.57772C24.6157 8.74374 24.6157 7.34482 25.5035 6.51084C25.907 6.10731 26.4181 5.89209 26.9831 5.89209C27.4673 5.89209 27.9516 6.08041 28.3282 6.37633L28.382 6.43014C28.4627 6.48394 28.5165 6.56465 28.5703 6.61845L28.6241 6.67226C28.8394 7.04889 29.0277 7.53314 29.0277 8.04428Z" fill="white" />
            </svg>
          </Link>
        </nav>
        <nav className="grid grid-flow-col lg:text-lg md:text-lg text-sm lg:gap-4 md:gap-4 -mb-14">
          <Link to='/' className="link link-hover">Home</Link>
          <Link to='/servicePeriod' className="link link-hover">Service period</Link>
          <Link to='/contact' className="link link-hover">Contact</Link>
          <Link to='/terms' className="link link-hover">Terms & Conditions</Link>
        </nav>
        <aside>
          <p className="mt-6">© 2020 Art Direction BD All Rights Reserved </p>
          <p>Made by <a className="hover:underline" href="https://www.linkedin.com/in/mritul-aich-developer/">Mritul Aich</a></p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;