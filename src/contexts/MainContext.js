import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MainContext = createContext({
  showMenu: false,
  setShowMenu: () => {},
  data: {},
  setData: () => {},
  cartItems: {},
});

const MainContextContainer = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [data, setData] = useState([]);
  const [myData, setMyData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => setData(res.data))
  }, []);

  useEffect(()=>{
    const updatedItems = data.map((item)=>{
      return {...item , inWishList: false};
    })
    setMyData(updatedItems)
  },[data])

  const toggleWishList = (id) => {
    const updatedItems = myData.map((item) => {
      if (item.id === id) {
        return { ...item, inWishList: !item.inWishList };
      }
      return item;
    });
    setMyData(updatedItems);
  };

  const addToCart = (id) => {
    const targetItem = myData.filter((item) => item.id === id)[0];
    const existingItem = cartItems.filter((item) => item.info.id === id);

    if (existingItem.length === 0) {
      const newItem = { info: targetItem, quantity: 1 };
      setCartItems((prevState) => [...prevState, newItem]);
    } else {
      let updatedItems = cartItems.map((item) => {
        if (item.info.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const incrementQuantity = (id) => {
    let updatedItems = cartItems.map((item) => {
      if (item.info.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const decrementQuantity = (id) => {
    let updatedItems = cartItems.map((item) => {
      if (item.info.id === id) {
        if (item.quantity === 0) {
          return item;
        } else {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    const filteredItems = updatedItems.filter((item) => item.quantity > 0)
    setCartItems(filteredItems);
  };

  const removeFromCart = (id) => {
    let updatedItems = cartItems.filter((item) => item.info.id !== id);
    setCartItems(updatedItems);
};

  return (
    <MainContext.Provider
      value={{
        showMenu,
        setShowMenu,
        myData,
        cartItems,
        toggleWishList,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextContainer;
