import { Helmet } from "react-helmet";

const Terms = () => {
    return (
        <div className="min-h-screen">
            <div className="divider"></div>
            <h1 className="text-3xl text-center">Terms & Conditions</h1>
            <div className="divider"></div>
            <ul className="mx-3 lg:mx-10 lg:text-xl text-lg space-y-1">
                <li><p>1. The amount in the contract paper is considered as final. There will be no discount/increment of price after finalizing the contract paper.</p></li>
                <li><p>2. The client has to bear online transaction charges and EMI charges (if applicable).</p></li>
                <li><p>3. The client will be served as per the contract paper. Nothing will be given extra or outside of the contract.</p></li>
                <li><p>4. In the case of the unavailability of the desired package, clients can cancel the booking and collect a cash refund.</p></li>
                <li><p>5. Art Direction BD will deliver the DVDs to the client address within 72 hours of the final payment.</p></li>
                <li><p>6. Art Direction BD holds the copyright of the photos taken & can use the photos on the Facebook, website, or other social media.</p></li>
                <li><p>7. For better single & couple pictures and videos, the client must provide at least 1 hour of uninterruptible portrait sessions.</p></li>
                <li><p>8. The client must understand that, all the venues, decoration, lighting, outdoor space are not the same, hence pictures and videos vary widely for those ex-factors.</p></li>
                <li><p>9. Art Direction BD is not bound to publish pictures on their FB page.</p></li>
                <li><p>10. A client must ensure a smooth working environment for good quality output, otherwise, Art Direction BD will not be liable for failing to provide satisfactory delivery.</p></li>
            </ul>

            <Helmet>
                <title>Terms & Conditions</title>
            </Helmet>
        </div>
    );
};

export default Terms;