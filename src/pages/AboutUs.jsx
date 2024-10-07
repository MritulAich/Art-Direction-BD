import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl poppins-semibold text-center mb-6">About Us</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          We, the team at <strong>Art Direction</strong>, are dedicated to capturing your life's precious moments with creativity.
          With a team of experienced photographers and cinematographers, we offer tailored packages for every occasion—from weddings to birthdays.
          Our mission is to provide quality service at the best price, allowing every client to customize their experience.
          Let us turn your moments into timeless stories.
        </p>

        <h2 className="text-xl poppins-semibold text-center mt-16 mb-8">Founding Members</h2>

      <div className="flex lg:flex-row md:flex-row flex-col gap-12 lg:gap-60 md:gap-20 justify-center items-center">
        <div className="space-y-2">
          <img className="lg:w-40 md:w-36 w-40 rounded-full border-4 border-stone-300"
          src="https://res.cloudinary.com/dvaclg6kh/image/upload/v1728300439/79005789_1795518733914061_3299944379925397504_n_1_pb0xze.jpg" alt="Photo of AP Hrithik" />
          <p className="text-xl font-medium">AP Hrithik</p>
          <p>CEO & Core Photographer</p>
          <div className="flex flex-row gap-3 pt-3">
          <Link to='https://www.facebook.com/profile.php?id=100088107991253'>
            <img src="/public/facebook.png" className="w-7" />
          </Link>
          <Link to='https://www.instagram.com/atanu9499/'>
          <img src="/public/social.png" className="w-7" />
          </Link>
          <Link to='https://wa.me/+8801846515793'>
          <img src="/public/whatsapp.png" className="w-7" />
          </Link>
          </div>
        </div>

        <div className="space-y-2">
          <img className="lg:w-40 md:w-36 w-40 rounded-full border-4 border-stone-300"
          src="https://res.cloudinary.com/dvaclg6kh/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1728299704/454695238_1562165204655271_6497976894994235029_n.jpg_nfxqmp.jpg" alt="Photo of Sourav Das" />
          <p className="text-xl font-medium">Sourav Das</p>
          <p>Founder & Core Photographer</p>
          <div className="flex flex-row gap-3 pt-3">
          <Link to='https://www.facebook.com/resine.sourav'>
            <img src="/public/facebook.png" className="w-7" />
          </Link>
          <Link to='https://www.instagram.com/resine_sourav/'>
          <img src="/public/social.png" className="w-7" />
          </Link>
          <Link to='https://wa.me/+8801624793106'>
          <img src="/public/whatsapp.png" className="w-7" />
          </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;