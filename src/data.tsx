const productData: Product[] = [
    {
        id: 1,
        title: 'Memory Foam Loveseat Futon Couch, Modern Sofa Bed with Convertible Backrests&Armrests Sofabed, Grey',
        category: 'sofa',
        price: '$149',
        img: './images/pro1.jpg',
        time: 'Nov 12-15',
        color: "blue",
        type: "soft"
    },
    {
        id: 2,
        title: 'Futon Sofa Bed,Sleeper Convertible Futon Couch,Memory Foam Futon Couch',
        category: 'sofa',
        price: '$179',
        img: './images/pro2.jpg',
        time: 'Dec 20-27',
        color: "white",
        type: "soft"
    },
    {
        id: 3,
        title: 'Futon Loveseat Convertible Sleeper Bed,Sofa & Couch Soft Cushions Love Seat Daybed for Studio',
        category: 'sofa',
        price: '$249',
        img: './images/pro3.jpg',
        time: 'Dec 12-20',
        color: "blue",
        type: "soft"

    },
    {
        id: 4,
        title: '267 Sofabed, Brown 002',
        category: 'sofa',
        price: '$229',
        img: './images/pro4.jpg',
        time: 'Dec 21-29',
        color: "white",
        type: "wooden"

    }
];

export interface Product {
    id: number;
    title: string;
    price: string;
    category: string;
    img: string;
    time: string;
    color: string;
    type: string;
  }
  
 
  export default productData;