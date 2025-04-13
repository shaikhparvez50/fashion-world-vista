
const BrandShowcase = () => {
  const brands = [
    'Kochi Jordan', 'Allen Solly', 'Nike', 'Puma', 
    'SMOK', 'Crown Bar', 'VapeX', 'Skull Shisha', 
    'H&M', 'AMIRI'
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="content-container">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <div 
              key={brand} 
              className="bg-white dark:bg-gray-800 rounded-lg p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-lg font-semibold">{brand}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
