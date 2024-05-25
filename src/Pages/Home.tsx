import Navbar from "../Components/Navbar";

const Hero = () => (
  <div>
    <div>Hero Element</div>
  </div>
);

const PopularProducts = () => <div>Popular Products</div>;
const DiscountBanner = () => <div>Discount Banner</div>;
const Promotions = () => <div>Promotions</div>;
const NewCollections = () => <div>New Collections</div>;
const Categories = () => <div>Categories</div>;
const BecomeAMerchant = () => <div>Become a Merchant Form</div>;
const NewsLetter = () => <div>News Letter</div>;
const AppDownload = () => <div>App Download</div>;
const Footer = () => <div>Footer</div>;

const Home = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Hero />
      <PopularProducts />
      <DiscountBanner />
      <Promotions />
      <NewCollections />
      <Categories />
      <BecomeAMerchant />
      <NewsLetter />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Home;
