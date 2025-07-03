import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'




function HelloHeading() {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-gray-900 mb-4'>Our Amazing Products</h1>
      <p className='text-xl text-gray-600'>Discover a wide range of high-quality items designed to enhance your life.</p>
    </>
  )
}

function Mainbox(props) {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{props.heading}</h2>
          <p className="text-gray-600 text-sm mb-4">{props.paragraph}</p>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold text-indigo-700 mr-2">{props.disAmount}</span>
            <span className="text-sm text-gray-500 line-through">{props.Amount}</span>
          </div>
          <div className="flex items-center text-yellow-500 mb-4">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d={props.svg1} /></svg>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d={props.svg2} /></svg>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d={props.svg3} /></svg>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d={props.svg4} /></svg>
            <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24"><path d={props.svg5} /></svg>
            <span className="ml-2 text-gray-600 text-sm">{props.reveiw}</span>
          </div>
          <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-300 shadow-md">{props.cart}</button>
        </div>
      </div>
    </>
  )
}

function Footer() {
  return (
    <>
      <footer className="text-center mt-12 py-6 border-t border-gray-200 text-gray-500 text-sm">
        <p>&copy; 2025 Component Labs. All rights reserved.</p>
      </footer>
    </>
  )
}

const header = (
  <header className="text-center mb-12">
    <HelloHeading />
  </header>
);

const Boxes = [
  {
    heading: 'Stylish Noise-Cancelling Headphones',
    paragraph: 'Immerse yourself in pure audio bliss with our premium noise-cancelling headphones. Perfect for travel or focused work',
    disAmount: "$149.99",
    Amount: "$199.99",
    reveiw: '(128 Reviews)',
    cart: 'Add to Cart',
    svg1: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg3: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg4: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg5: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
  },

  {
    heading: 'Advanced Fitness Smartwatch',
    paragraph: 'Track your health and stay connected with our feature-packed smartwatch. Waterproof and long-lasting battery',
    disAmount: "$99.00",
    Amount: "$120.00",
    reveiw: '(250 Reviews)',
    cart: 'Add to Cart',
    svg1: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg2: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg3: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg5: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
  },
  {
    heading: 'Mechanical RGB Gaming Keyboard',
    paragraph: 'Experience lightning-fast responsiveness with our customizable RGB gaming keyboard. Built for champions',
    disAmount: '$75.50',
    Amount: "$120.00",
    reveiw: '(80 Reviews)',
    cart: 'Add to Cart',
    svg1: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg2: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg3: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg4: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg5: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',

  },

  {
    heading: 'Ergonomic Wireless Mouse',
    paragraph: 'Work comfortably for hours with our precision ergonomic mouse. Say goodbye to wrist strain.',
    disAmount: "$99.00",
    Amount: "$120.00",
    reveiw: '(150 Reviews)',
    cart: 'Add to Cart',
    svg1: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg2: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg3: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg4: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg5: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
  },


  {
    heading: 'Compact Portable Bluetooth Speaker',
    paragraph: 'Enjoy your music anywhere with this powerful and portable Bluetooth speaker. Great bass and battery life.',
    disAmount: "$98.00",
    Amount: "$100.00",
    reveiw: '(300 Reviews)',
    cart: 'Add to Cart',
    svg1: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg2: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg3: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg4: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
  },

  {
    heading: 'Universal Smart Home Hub',
    paragraph: 'Control all your smart devices from one central hub. Simplify your home automation',
    disAmount: "$99.00",
    Amouny: "$120.00",
    reveiw: '(25 Reviews)',
    cart: 'Add to Cart',
    svg1: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg2: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151',
    svg3: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg4: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
    svg5: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z',
  }
]

const footer = <Footer />;


const div = (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {Boxes.map((product) => (
      <Mainbox

        heading={product.heading}
        paragraph={product.paragraph}
        disAmount={product.disAmount}
        Amount={product.Amount}
        reveiw={product.reveiw}
        cart={product.cart}
        svg1={product.svg1}
        svg2={product.svg2}
        svg3={product.svg3}
        svg4={product.svg4}
        svg5={product.svg5}
      />
    ))}
  </div>
);

const container = React.createElement(
  'div',
  { className: 'p-6 space-y-4' },
  [header, div, footer]
);
const root = createRoot(document.getElementById('root'))
root.render(container);
