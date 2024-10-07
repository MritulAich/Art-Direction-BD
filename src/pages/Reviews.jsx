
const Reviews = () => {
    const reviews = [
        {
            name: "Oishe Dutta",
            rating: 5,
            comment: "Amazing service! Highly recommend for any wedding.",
        },
        {
            name: "Riya Akhter",
            rating: 4,
            comment: "Great experience, professional team.",
        },
        {
            name: "Tamal Shibu",
            rating: 5,
            comment: "Couldn't have asked for a better photography team.",
        },
    ];

    return (
        <div>
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl poppins-semibold text-center mb-6">Client Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <div key={index} className="review-card p-4 border border-gray-400 rounded shadow-lg">
                                <h4 className="text-xl font-semibold">{review.name}</h4>
                                <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
                                <p className="mt-2 text-gray-600 italic">"{review.comment}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;

