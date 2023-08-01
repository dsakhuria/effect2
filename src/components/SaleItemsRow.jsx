import React from "react";

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },

  // More products...
];

export default function SaleItemsRow() {
  return (
    <div className="bg-white rounded-lg">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group relative">
              <div className="aspect-w-3 aspect-h-4 overflow-hidden bg-gray-200 rounded-lg">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center w-full h-full group-hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                <div className="mt-1 flex items-center justify-between">
                    <p className="text-xl font-bold text-gray-900">{product.price}</p>
                    <button 
                        
                        className=" bg-neutral-800 py-1 px-4 rounded-lg text-white
                    ">  Add to cart   </button>
                </div>
                
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
