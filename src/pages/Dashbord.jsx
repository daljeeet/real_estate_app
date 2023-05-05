import Card from "../components/Card";
import { useSelector } from "react-redux";
import SellerCard from "../components/SellerCard";
const Dashbord = () => {
  const { wishlistArr, sellerHistory } = useSelector((val) => val.user);
  return (
    <>
    <div className="w-11/12 m-auto flex justify-between">
      <div className="w-4/5 mx-6">
        <h3 className="text-xl text-semibold">Your Wishlist ( {wishlistArr.length} ) </h3>
        <div className="grid grid-cols-2">
          {wishlistArr.length === 0 ? (
            <p className="text-center text-gray-400 gap-10">No Records Found</p>
          ) : (
            wishlistArr.map((el) => <Card key={el.id} data={el} />)
          )}
        </div>
      </div>
      <div className="w-1/5">
        <h3 className="text-xl text-semibold">Sellers contact History ({sellerHistory.length}) </h3>
        <div >
          {sellerHistory.map((el) => (
            <SellerCard key={el.id} data={el} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashbord;
