
import React, { useState } from 'react';
import TopMenu from './TopMenu';
import Footer from './Footer';
import Products from './Products';
import Card from './Card';



interface Product {
  img: string;
  title: string;
  star: number;
  reviews: number;
  prevPrice: number;
  newPrice: number;
  category: string;
  color: string;
  company: string;
}

const products: Product[] = [
  
  // product data
];

function App() {
 // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // ----------- Input Filter -----------
  //const [query, setQuery] = useState<string>("");

  //const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //  setQuery(event.target.value);
  //};

  //const filteredItems = products.filter(
   // (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  //);

  // ----------- Radio Filtering -----------
  //const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //setSelectedCategory(event.target.value);
  //};

  // ------------ Button Filtering -----------
 // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
   // setSelectedCategory(event.currentTarget.value);
  //};

  //function filteredData(products: Product[], selected: string | null, query: string) {
    //let filteredProducts = products;

    // Filtering Input Items
    //if (query) {
     // filteredProducts = filteredItems;
    //}

    // Applying selected filter
  //  if (selected) {
    //  filteredProducts = filteredProducts.filter(
  //      ({ category, color, company, newPrice, title }) =>
      //    category === selected ||
        //  color === selected ||
        //  company === selected ||
        //  title === selected
    //  );
    //}

  //  return filteredProducts.map(
     // ({ img, title, star, reviews, prevPrice, newPrice }) => (
       // <Card
         // key={Math.random()}
        //  img={img}
         // title={title} id={0} price={''} category={''} time={''} color={''} type={''}      
      //  />
     // )
    //);
 // }

  // const result = filteredData(products, selectedCategory, query);





  return (
    <div className="App">
      <TopMenu />
      <Products products={[]} />

      <Footer />
   
    </div>
  );
};

export default App;
