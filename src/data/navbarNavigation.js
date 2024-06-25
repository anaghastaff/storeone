import productCategoriesMegaMenu from "./product-categories"; // MEGA-MENU DATA

const megaMenus = [
  [{
  title: "Home",
  auth: false,
  child: [
    {
    title: "Furniture",
    url: "/furniture-shop"
  }, {
    title: "Health and Beauty",
    url: "/health-beauty-shop"
  }]
}], 
[{
  title: "Products",
  auth: false,
  child: [
    {
    title: "Furniture",
    url: "/furniture-shop/categories/furniture"
  }, {
    title: "Couches",
    url: "/furniture-shop/categories/couch",
  },
  {
    title: "Chairs",
    url: "/furniture-shop/categories/chair",
  },
  {
    title: "Home Sofas",
    url: "/furniture-shop/categories/home-sofas",
  }
]
},
{
  title: "Wellness Products",
  auth: false,
  child: [
    {
    title: "Organic products",
    url: "/furniture-shop/categories/health"
  }, {
    title: "Essential Oils",
    url: "/furniture-shop/categories/essential-oils",
  },
  {
    title: "Jute Bags",
    url: "/furniture-shop/categories/organic-bags",
  },
]
},
{
  title: "Merchandise",
  auth: false,
  child: [
    {
    title: "Medusa Merch",
    url: "/furniture-shop/categories/medusa-merch"
  },
]
},

], 

// [{
//   title: "User Account",
//   auth:true,
//   child: [{
//     title: "Order List",
//     url: "/orders"
//   }, {
//     title: "Order Details",
//     url: "/orders"
//   }, {
//     title: "View Profile",
//     url: "/profile"
//   }, {
//     title: "Edit Profile",
//     url: "/profile"
//   }, {
//     title: "Address List",
//     url: "/address"
//   }, {
//     title: "Add Address",
//     url: "/address"
//   }, {
//     title: "All tickets",
//     url: "/support-tickets"
//   }, {
//     title: "Ticket details",
//     url: "/support-tickets"
//   }, {
//     title: "Wishlist",
//     url: "/wish-list"
//   }]
// }], 

// [{
//   title: "Vendor Account",
//   child: [{
//     title: "Dashboard",
//     url: "/vendor/dashboard"
//   }, {
//     title: "Profile",
//     url: "/vendor/account-settings"
//   }]
// }, {
//   title: "Products",
//   child: [{
//     title: "All products",
//     url: "/admin/products"
//   }, {
//     title: "Add/Edit product",
//     url: "/admin/products/create"
//   }]
// }, {
//   title: "Orders",
//   child: [{
//     title: "All orders",
//     url: "/admin/orders"
//   }, {
//     title: "Order details",
//     url: "/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8"
//   }]
// }, {
//   title: "Authentication",
//   child: [{
//     title: "Login",
//     url: "/login"
//   }, {
//     title: "Register",
//     url: "/register"
//   }]
// }], 

[
//   {
//   title: "Sale Page",
//   auth:false,
//   child: [{
//     title: "Sales Version 1",
//     url: "/sales-1"
//   }, {
//     title: "Sales Version 2",
//     url: "/sales-2"
//   }]
// }, 

{
  title: "Shop",
  child: [{
    title: "Search product",
    url: "furniture-shop/products/search"
  }, {
    title: "Single product",
    url: "furniture-shop/categories/medusa-merch"
  }, {
    title: "Cart",
    url: "/cart"
  }, {
    title: "Checkout",
    url: "/checkout"
  }, 
  // {
  //   title: "Alternative Checkout",
  //   url: "/checkout-alternative"
  // },
  {
    title: "Order confirmation",
    url: "/order-confirmation"
  }]
}]];

// MAIN NAVIGATION DATA

const navbarNavigation = [{
  title: "Menu",
  megaMenu: false,
  megaMenuWithSub: false,
  auth:true,
  child: [
    {
      title: "Home",
      url: "/furniture-shop"
    }, {
      title: "All Products",
      url: "/furniture-shop/categories/all-products"
    },
    {
    title: "Furniture",
    url: "/furniture-shop/categories/furniture"
  }, {
    title: "Health",
    url: "/furniture-shop/categories/health"
  }, {
    title: "Jute Bags",
    url: "/furniture-shop/categories/organic-bags"
  },
  {
    title: "Medusa Merch",
    url: "/furniture-shop/categories/medusa-merch"
  },
  
  //  {
  //   title: "Grocery-2",
  //   url: "/grocery-2"
  // }, {
  //   title: "Grocery-3",
  //   url: "/grocery-3"
  // }, 
  // {
  //   title: "Fashion 1",
  //   url: "/fashion-1"
  // }, {
  //   title: "Fashion 2",
  //   url: "/fashion-2"
  // }, {
  //   title: "Fashion 3",
  //   url: "/fashion-3"
  // }, {
  //   title: "Gift Store",
  //   url: "/gift-shop"
  // }, 
 ]
}, 
{
  megaMenu: true,
  megaMenuWithSub: false,
  title: "Mega Menu",
  child: megaMenus
}, 
{
  megaMenu: false,
  megaMenuWithSub: true,
  title: "Full Screen Menu",
  child: productCategoriesMegaMenu
},
{
  megaMenu: false,
  megaMenuWithSub: false,
  title: "Products",
  auth:false,
  child: [
    {
    title: "Furniture",
    child: [
      {
      title: "Couches",
      url: "/furniture-shop/categories/couch",
    }, {
      title: "Chairs",
      url: "/furniture-shop/categories/chair",
    },
    {
      title: "Sofas",
      url: "/furniture-shop/categories/home-sofas",
    },
    {
      title: "All Products",
      url: "/furniture-shop/categories/all-products",
    }
  ]
  }, {
    title: "Vendor",
    child: [{
      title: "All vendors",
      url: "/furniture-shop"
    }, {
      title: "Vendor store",
      url: "/furniture-shop/products"
    }]
  }, {
    title: "Shop",
    child: [{
      title: "Search product",
      url: "/furniture-shop/categories/all-products"
    }, {
      title: "Single product",
      url: "/furniture-shop/categories/medusa-merch"
    }, {
      title: "Cart",
      url: "/cart"
    }, {
      title: "Checkout",
      url: "/checkout"
    }, 
    
  ]
  }, 
  // {
  //   title: "Auth",
  //   child: [{
  //     title: "Login",
  //     url: "/login"
  //   }, {
  //     title: "Register",
  //     url: "/register"
  //   }]
  // }
]
}, 

{
  megaMenu: false,
  megaMenuWithSub: false,
  auth:true,
  title: "User Account",
  child: [{
    title: "Orders",
    child: [{
      title: "Order List",
      url: "/orders"
    }, 
    ]
  }, {
    title: "Profile",
    child: [{
      title: "View Profile",
      url: "/profile"
    }]
  }, {
    title: "Address",
    child: [{
      title: "Address List",
      url: "/address"
    }]
  }, {
    title: "Support tickets",
    child: [{
      title: "All tickets",
      url: "/support-tickets"
    }]
  }, {
    title: "Wishlist",
    url: "/wish-list"
  }]
}, 

// {
//   megaMenu: false,
//   megaMenuWithSub: false,
//   auth:true,
//   title: "Vendor Account",
//   child: [{
//     title: "Dashboard",
//     url: "/vendor/dashboard"
//   }, {
//     title: "Products",
//     child: [{
//       title: "All products",
//       url: "/admin/products"
//     }, {
//       title: "Add/Edit product",
//       url: "/admin/products/lord-2019"
//     }]
//   }, {
//     title: "Orders",
//     child: [{
//       title: "All orders",
//       url: "/admin/orders"
//     }, {
//       title: "Order details",
//       url: "/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8" 
//     }]
//   }, {
//     title: "Profile",
//     url: "/vendor/account-settings"
//   }]
// }
];
export default navbarNavigation;