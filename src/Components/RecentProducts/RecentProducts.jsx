import React from "react";

const RecentProducts = ({ cards }) => {
    const card = cards.slice(0,9)
    console.log(card);
    
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-center text-3xl font-bold mb-10">Recent Products</h1>
      {/* grid here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {card.map((card) => (
          <div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src={card.image}
                  alt="Products"
                  className="rounded-xl object-cover h-48 w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description}</p>
                <div className="card-actions w-full">
                  <button className="btn bg-transparent hover:bg-purple-700 text-purple-700 hover:text-white border-2 border-purple-700 w-full transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button>show all</button>
      </div>
    </div>
  );
};

export default RecentProducts;
