import Featured from "@/components/Featured";
import Header from "@/components/Header";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";

export default function HomePage() {
  return (
      <div>
        <Header />
        <Featured />
      </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '640de2b12aa291ebdf213d48';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  // const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      // newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}