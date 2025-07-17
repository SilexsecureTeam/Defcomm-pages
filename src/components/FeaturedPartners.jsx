import patner1 from '../assets/landing/patner1.png';
import patner2 from '../assets/landing/patner2.png';
import patner3 from '../assets/landing/patner3.png';
import patner4 from '../assets/landing/patner4.png';
import patner5 from '../assets/landing/patner5.png';
import patner6 from '../assets/landing/patner6.png';
import patner7 from '../assets/landing/patner7.png';

const FeaturedPartners = () => (
  <section className="w-full px-6 md:px-14 py-12">
    <h2 className="text-[#36460A] text-xl font-semibold mb-8">Our Trusted Partners</h2>
    <div className="flex justify-between">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-y-10 gap-x-8 items-center">
        <img src={patner1} alt="Partner 1" className="h-16 w-auto object-contain" />
        <img src={patner2} alt="Partner 2" className="h-16 w-auto object-contain" />
        <img src={patner3} alt="Partner 3" className="h-16 w-auto object-contain" />
        <img src={patner4} alt="Partner 4" className="h-16 w-auto object-contain" />
        <img src={patner5} alt="Partner 5" className="h-16 w-auto object-contain" />
        <img src={patner6} alt="Partner 6" className="h-16 w-auto object-contain" />
        <img src={patner7} alt="Partner 7" className="h-16 w-auto object-contain" />
      </div>
      <div className="w-[40%] hidden md:block" />
    </div>
  </section>
);

export default FeaturedPartners;
