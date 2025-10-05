export default function StatsSection() {
  return (
    <div className="border border-primary  p-2  mx-2  lg:mx-auto lg:w-[66vw] py-10 rounded-lg">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-3xl font-bold text-primary">30+</h3>
          <p className="text-sm text-gray-600 mt-1">Visa Categories</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-primary">68+</h3>
          <p className="text-sm text-gray-600 mt-1">Visa Process</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-primary">99+</h3>
          <p className="text-sm text-gray-600 mt-1">Success Rate</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-primary">
            <span>23</span>+
          </h3>
          <p className="text-sm text-gray-600 mt-1">Pro Consultants</p>
        </div>
      </div>
    </div>
  );
}
