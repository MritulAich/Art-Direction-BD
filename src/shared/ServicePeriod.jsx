import { Helmet } from "react-helmet";

const ServicePeriod = () => {
    return (
        <div className="min-h-screen">
            <div className="divider"></div>
            <h1 className="text-3xl text-center">Service Period</h1>
            <div className="divider"></div>
            <div className="mx-3 lg:mx-10 lg:text-xl text-lg space-y-1">
                <p>1. We need <span className="text-red-600 font-bold">45 Working Days</span> from your last event date to complete the post processing works.</p>
                <p>2. Client has to select pictures for prints and has to provide by pen drive or link. It takes <span className="text-red-600 font-bold">15 Working Days</span> to deliver the prints.</p>
                <p>3. Song preference for promo/movie is accepted if given before the event date.</p>
                <p>4. Correction instructions on post processing works are welcomed within <span className="text-red-600 font-bold">30 days</span> of soft-copy delivery.</p>
                <p>5. Hard-copy delivery is valid within <span className="text-red-600 font-bold">90 days</span> of soft-copy delivery.</p>
                <p>6. Raw & Edits will be delivered by Google Drive Link. Links will be valid and <span className="text-red-600 font-bold">accessible for 6 months</span> from the delivery date.</p>
                <p>7. All service against a contract ends after <span className="text-red-600 font-bold">9 months of last event date</span>.</p>
                <p>8. Clients can take the following packages as it is OR can customize the packages as they want. We allow our clients a full flexibility to add or remove any photographer / cinematographer from any package according to their requirement and we will offer the price accordingly.</p>
            </div>

            <div className="divider mt-12"></div>
            <h1 className="text-3xl text-center mb-8">Payments FAQ</h1>

            <div className="container flex flex-col justify-center text-lg mx-auto mb-5">
                <div>
                    <details className="border border-gray-700">
                        <summary className="py-4 pl-1">What is the payment policy for booking an event?</summary>
                        <p className="py-4 pt-0 ml-4 -mt-4">Minimum <span className="text-black font-medium">80%</span> payment must be cleared before event dates.</p>
                    </details>
                    <details className="border border-gray-700 border-y-0">
                        <summary className="py-4 pl-1">When do I have to complete remaining payment?</summary>
                        <p className="py-6 pt-0 ml-4 -mt-4">Due payment must be cleared at the time of Raw/Edit delivery.</p>
                    </details>
                    <details className="border border-gray-700">
                        <summary className="py-4 pl-1">Can I make partial payments after the event?</summary>
                        <p className="py-6 pt-0 ml-4 -mt-4">Partial payments are not allowed after the event. The full remaining balance must be settled at the time of delivery.</p>
                    </details>
                </div>
            </div>
            <Helmet>
                <title>Service Period</title>
            </Helmet>
        </div>
    );
};

export default ServicePeriod;