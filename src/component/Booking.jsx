import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Booking = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [selectedService, setSelectedService] = useState('');
  const [selectedComboPackage, setSelectedComboPackage] = useState('');

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
    setSelectedComboPackage('');
  };
  const handleComboPackageChange = (event) => {
    setSelectedComboPackage(event.target.value);
  };


  const handleCostPhoto = () => {
    let selectedPackage = document.getElementById('photographyPackage').value;
    let cost = 0;
    if(selectedPackage === 'primary'){
      cost = 5500;
    }else if(selectedPackage === 'standard'){
      cost = 8500;
    }else if(selectedPackage === 'premium'){
      cost = 13500;
    }
    document.getElementById('costBDT').innerHTML = cost
  }

  const handleCostCinema =()=>{
    let selectedPackage = document.getElementById('cinematographyPackage').value;
    let cost = 0;

    if(selectedPackage==='primary'){
      cost = 5500;
    }else if(selectedPackage==='standard'){
      cost = 10500;
    }else if(selectedPackage==='premium'){
      cost=16500;
    }

    document.getElementById('costBDT').innerHTML = cost;
  }

  const handleCostComboStandard =()=>{
    let selectedPackage = document.getElementById('standardType').value;
    let cost = 0;

    if(selectedPackage==='classic'){
      cost = 13500;
    }else if(selectedPackage==='traditional'){
      cost = 16500;
    }else if(selectedPackage==='dynamic'){
      cost=19500;
    }

    document.getElementById('costBDT').innerHTML = cost;
  }

  const handleCostComboPremium =()=>{
    let selectedPackage = document.getElementById('premiumType').value;
    let cost = 0;

    if(selectedPackage==='elite'){
      cost = 20500;
    }else if(selectedPackage==='unique'){
      cost = 24500;
    }

    document.getElementById('costBDT').innerHTML = cost;
  }

  const handleCostComboSignature =()=>{
    let selectedPackage = document.getElementById('signatureType').value;
    let cost = 0;

    if(selectedPackage==='prestige'){
      cost = 30500;
    }else if(selectedPackage==='supreme'){
      cost = 42500;
    }

    document.getElementById('costBDT').innerHTML = cost;
  }


  const handleBookingForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const time = form.time.value;
    const service = form.service.value;

    let photographyPackage = '';
    let cinematographyPackage = '';
    let comboPackage = '';
    let standardType = '';
    let premiumType = '';
    let signatureType = '';

    if (service === 'photography') {
      photographyPackage = form.photographyPackage.value;
    } else if (service === 'cinematography') {
      cinematographyPackage = form.cinematographyPackage.value;
    } else if (service === 'combo') {
      comboPackage = form.comboPackage.value;
      if (comboPackage === 'standard') {
        standardType = form.standardType.value;
      } else if (comboPackage === 'premium') {
        premiumType = form.premiumType.value;
      } else if (comboPackage === 'signature') {
        signatureType = form.signatureType.value;
      }
    }
    const bookedInfo = {
      name, email, phone, date, time, service, photographyPackage, cinematographyPackage,
      comboPackage, standardType, premiumType, signatureType
    }
    console.log(bookedInfo);

    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookedInfo)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success',
            text: 'You have booked successfully.',
            icon: 'success',
            confirmButtonText: 'Done',
            footer: 'Contact us before confirm booking.'
          })
        }
      })
  }


  return (
    <div>
      <div className="text-center mt-14">
        <h3 className="lg:text-xl text-lg type-writer ">We Offer You Best Service In Best Price. You Have The Opportunity To Customize The Packages As You Want.</h3>
      </div>

      <div className="max-w-md lg:max-w-lg md:max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold">BOOK A SHOOT</div>

        <form onSubmit={handleBookingForm} className="py-4 px-6">

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name" disabled defaultValue={user?.displayName} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email" disabled defaultValue={user?.email} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="phone" type="number" placeholder="Enter your phone number" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="date" type="date" placeholder="Select a date" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="time" type="time" placeholder="Select a time" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Service</label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="service" onChange={handleServiceChange} required
            >
              <option value="">Select a service</option>
              <option value="photography">Photography</option>
              <option value="cinematography">Cinematography</option>
              <option value="combo">Combo</option>
            </select>
          </div>



          {/* Sub-options for Photography */}
          {selectedService === 'photography' && (
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Select Photography Package</label>
              <select  onChange={handleCostPhoto}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="photographyPackage" name="photographyPackage"
              >
                <option value="primary">Primary</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </select>
            </div>
          )}

          {/* Sub-options for Cinematography */}
          {selectedService === 'cinematography' && (
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Select Cinematography Package</label>
              <select onChange={handleCostCinema}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cinematographyPackage" name="cinematographyPackage"
              >
                <option value="primary">Primary</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </select>
            </div>
          )}

          {/* Sub-options for Combo */}
          {selectedService === 'combo' && (
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Select Combo Package</label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comboPackage" name="comboPackage" onChange={handleComboPackageChange}
              >
                <option value="">Select a combo package</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="signature">Signature</option>
              </select>
            </div>
          )}


          {/* Sub-options for Standard Combo */}
          {selectedComboPackage === 'standard' && (
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Select Standard sub-package</label>
              <select onChange={handleCostComboStandard}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="standardType" name="standardType"
              >
                <option value="classic">Classic</option>
                <option value="traditional">Traditional</option>
                <option value="dynamic">Dynamic</option>
              </select>
            </div>
          )}

          {/* Sub-options for Premium Combo */}
          {selectedComboPackage === 'premium' && (
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Select Premium sub-package</label>
              <select onChange={handleCostComboPremium}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="premiumType" name="premiumType"
              >
                <option value="elite">Elite</option>
                <option value="unique">Unique</option>
              </select>
            </div>
          )}

          {/* Sub-options for Signature Combo */}
          {selectedComboPackage === 'signature' && (
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Select Signature sub-package</label>
              <select onChange={handleCostComboSignature}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="signatureType" name="signatureType"
              >
                <option value="prestige">Prestige</option>
                <option value="supreme">Supreme</option>
              </select>
            </div>
          )}


          <label className="block text-gray-700 font-bold mb-4">
            Costs : <span className="text-lg font-bold text-orange-600">
              <span id="costBDT"></span> BDT</span>
          </label>


          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message" rows="4" placeholder="Enter any additional information"></textarea>
          </div>

          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-gray-900 text-white py-2 px-8 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Booking;