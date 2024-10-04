import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {

    const [selectedService, setSelectedService] = useState('');
  const [selectedComboPackage, setSelectedComboPackage] = useState('');

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
    setSelectedComboPackage('');
  };
  const handleComboPackageChange = (event) => {
    setSelectedComboPackage(event.target.value);
  };

    const booking = useLoaderData();
    const {_id, phone, date, time, service, photographyPackage, cinematographyPackage, comboPackage, standardType, premiumType, signatureType} = booking;

    const handleUpdatePage = event =>{
        event.preventDefault();
        const form = event.target;
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

        const updatedPage = {phone, date, time, service, photographyPackage, cinematographyPackage, comboPackage, standardType, premiumType, signatureType};

        fetch(`http://localhost:5000/booking/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPage)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'This booking updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }


    return (
        <div>
      <div className="max-w-md lg:max-w-lg md:max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-gray-800 text-white text-center font-bold">Update Booking</div>

        <form onSubmit={handleUpdatePage} className="py-4 px-6">

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="phone" type="number" defaultValue={phone} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Date</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="date" type="date" defaultValue={date} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Time</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="time" type="time" defaultValue={time} />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Service</label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="service" defaultValue={service} onChange={handleServiceChange} required
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
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="photographyPackage" name="photographyPackage" defaultValue={photographyPackage}
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
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cinematographyPackage" name="cinematographyPackage" defaultValue={cinematographyPackage}
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
                id="comboPackage" name="comboPackage" onChange={handleComboPackageChange} defaultValue={comboPackage}
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
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="standardType" name="standardType" defaultValue={standardType}
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
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="premiumType" name="premiumType" defaultValue={premiumType}
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
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="signatureType" name="signatureType" defaultValue={signatureType}
              >
                <option value="prestige">Prestige</option>
                <option value="supreme">Supreme</option>
              </select>
            </div>
          )}


          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-gray-900 text-white py-2 px-8 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>

      </div>
    </div>
    );
};

export default Update;