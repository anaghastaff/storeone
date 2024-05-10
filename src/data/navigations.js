import BabyBoy from "icons/BabyBoy";
import BabyGirl from "icons/BabyGirl";
import Car from "icons/Car";
import Dress from "icons/Dress";
import Food from "icons/Food";
import Gift from "icons/Gift";
import Laptop from "icons/Laptop";
import MakeUp from "icons/MakeUp";
import Man from "icons/Man";
import Microphone from "icons/Microphone";
import MotorBike from "icons/MotorBike";
import Pets from "icons/Pets";
import PlantPot from "icons/PlantPot";
import TeddyBear from "icons/TeddyBear";
import Woman from "icons/Woman";
const navigations = [{
  icon: Dress,
  title: "Fashion",
  href: "/fashion",
  menuComponent: "MegaMenu1",
  menuData: {
    categories: [{
      title: "Man Clothes",
      href: "/products/search/man-clothes",
      subCategories: [{
        title: "Shirt",
        href: "/products/search/shirt",
        imgUrl: "/assets/images/products/categories/shirt.png"
      }, {
        title: "T- shirt",
        href: "/products/search/t-shirt",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }, {
        title: "Pant",
        href: "/products/search/pant",
        imgUrl: "/assets/images/products/categories/pant.png"
      }, {
        title: "Underwear",
        href: "/products/search/underwear",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }]
    }, {
      title: "Accessories",
      href: "/products/search/accessories",
      subCategories: [{
        title: "Belt",
        href: "/products/search/belt",
        imgUrl: "/assets/images/products/categories/belt.png"
      }, {
        title: "Hat",
        href: "/products/search/Hat",
        imgUrl: "/assets/images/products/categories/hat.png"
      }, {
        title: "Watches",
        href: "/products/search/Watches",
        imgUrl: "/assets/images/products/categories/watch.png"
      }, {
        title: "Sunglasses",
        href: "/products/search/Sunglasses",
        imgUrl: "/assets/images/products/categories/sunglass.png"
      }]
    }, {
      title: "Shoes",
      href: "/products/search/shoes",
      subCategories: [{
        title: "Sneakers",
        href: "/products/search/Sneakers",
        imgUrl: "/assets/images/products/categories/sneaker.png"
      }, {
        title: "Sandals",
        href: "/products/search/Sandals",
        imgUrl: "/assets/images/products/categories/sandal.png"
      }, {
        title: "Formal",
        href: "/products/search/Formal",
        imgUrl: "/assets/images/products/categories/shirt.png"
      }, {
        title: "Casual",
        href: "/products/search/Casual",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }]
    }, {
      title: "Bags",
      href: "/products/search/bags",
      subCategories: [{
        title: "Backpack",
        href: "/products/search/backpack",
        imgUrl: "/assets/images/products/categories/backpack.png"
      }, {
        title: "Crossbody Bags",
        href: "/products/search/Crossbody Bags",
        imgUrl: "/assets/images/products/categories/bag.png"
      }, {
        title: "Side Bags",
        href: "/products/search/Side Bags",
        imgUrl: "/assets/images/products/categories/mini-bag.png"
      }, {
        title: "Slides",
        href: "/products/search/Slides",
        imgUrl: "/assets/images/products/categories/belt.png"
      }]
    }, {
      title: "Woman Clothes",
      href: "/products/search/woman-clothes",
      subCategories: [{
        title: "Shirt",
        href: "/products/search/shirt",
        imgUrl: "/assets/images/products/categories/shirt.png"
      }, {
        title: "T- shirt",
        href: "/products/search/t-shirt",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }, {
        title: "Pant",
        href: "/products/search/pant",
        imgUrl: "/assets/images/products/categories/pant.png"
      }, {
        title: "Underwear",
        href: "/products/search/underwear",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }]
    }, {
      title: "Accessories",
      href: "/products/search/accessories",
      subCategories: [{
        title: "Belt",
        href: "/products/search/belt",
        imgUrl: "/assets/images/products/categories/belt.png"
      }, {
        title: "Hat",
        href: "/products/search/Hat",
        imgUrl: "/assets/images/products/categories/hat.png"
      }, {
        title: "Watches",
        href: "/products/search/Watches",
        imgUrl: "/assets/images/products/categories/watch.png"
      }, {
        title: "Sunglasses",
        href: "/products/search/Sunglasses",
        imgUrl: "/assets/images/products/categories/sunglass.png"
      }]
    }, {
      title: "Shoes",
      href: "/products/search/shoes",
      subCategories: [{
        title: "Sneakers",
        href: "/products/search/Sneakers",
        imgUrl: "/assets/images/products/categories/sneaker.png"
      }, {
        title: "Sandals",
        href: "/products/search/Sandals",
        imgUrl: "/assets/images/products/categories/sandal.png"
      }, {
        title: "Formal",
        href: "/products/search/Formal",
        imgUrl: "/assets/images/products/categories/shirt.png"
      }, {
        title: "Casual",
        href: "/products/search/Casual",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }]
    }, {
      title: "Bags",
      href: "/products/search/bags",
      subCategories: [{
        title: "Backpack",
        href: "/products/search/backpack",
        imgUrl: "/assets/images/products/categories/backpack.png"
      }, {
        title: "Crossbody Bags",
        href: "/products/search/Crossbody Bags",
        imgUrl: "/assets/images/products/categories/bag.png"
      }, {
        title: "Side Bags",
        href: "/products/search/Side Bags",
        imgUrl: "/assets/images/products/categories/mini-bag.png"
      }, {
        title: "Slides",
        href: "/products/search/Slides",
        imgUrl: "/assets/images/products/categories/belt.png"
      }]
    }],
    rightImage: {
      imgUrl: "/assets/images/promotion/offer-1.png",
      href: "/sales-1"
    }
  }
}, {
  icon: Laptop,
  title: "Electronics",
  href: "/products/search/electronics",
  menuComponent: "MegaMenu1",
  menuData: {
    categories: [{
      title: "Man Clothes",
      href: "/products/search/man-clothes",
      subCategories: [{
        title: "Shirt",
        href: "/products/search/shirt",
        imgUrl: "/assets/images/products/categories/shirt.png"
      }, {
        title: "T- shirt",
        href: "/products/search/t-shirt",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }, {
        title: "Pant",
        href: "/products/search/pant",
        imgUrl: "/assets/images/products/categories/pant.png"
      }, {
        title: "Underwear",
        href: "/products/search/underwear",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }]
    }, {
      title: "Accessories",
      href: "/products/search/accessories",
      subCategories: [{
        title: "Belt",
        href: "/products/search/belt",
        imgUrl: "/assets/images/products/categories/belt.png"
      }, {
        title: "Hat",
        href: "/products/search/Hat",
        imgUrl: "/assets/images/products/categories/hat.png"
      }, {
        title: "Watches",
        href: "/products/search/Watches",
        imgUrl: "/assets/images/products/categories/watch.png"
      }, {
        title: "Sunglasses",
        href: "/products/search/Sunglasses",
        imgUrl: "/assets/images/products/categories/sunglass.png"
      }]
    }, {
      title: "Shoes",
      href: "/products/search/shoes",
      subCategories: [{
        title: "Sneakers",
        href: "/products/search/Sneakers",
        imgUrl: "/assets/images/products/categories/sneaker.png"
      }, {
        title: "Sandals",
        href: "/products/search/Sandals",
        imgUrl: "/assets/images/products/categories/sandal.png"
      }, {
        title: "Formal",
        href: "/products/search/Formal",
        imgUrl: "/assets/images/products/categories/shirt.png"
      }, {
        title: "Casual",
        href: "/products/search/Casual",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }]
    }, {
      title: "Bags",
      href: "/products/search/bags",
      subCategories: [{
        title: "Backpack",
        href: "/products/search/backpack",
        imgUrl: "/assets/images/products/categories/backpack.png"
      }, {
        title: "Crossbody Bags",
        href: "/products/search/Crossbody Bags",
        imgUrl: "/assets/images/products/categories/bag.png"
      }, {
        title: "Side Bags",
        href: "/products/search/Side Bags",
        imgUrl: "/assets/images/products/categories/mini-bag.png"
      }, {
        title: "Slides",
        href: "/products/search/Slides",
        imgUrl: "/assets/images/products/categories/belt.png"
      }]
    }, {
      title: "Woman Clothes",
      href: "/products/search/woman-clothes",
      subCategories: [{
        title: "Shirt",
        href: "/products/search/shirt",
        imgUrl: "/assets/images/products/categories/shirt.png"
      }, {
        title: "T- shirt",
        href: "/products/search/t-shirt",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }, {
        title: "Pant",
        href: "/products/search/pant",
        imgUrl: "/assets/images/products/categories/pant.png"
      }, {
        title: "Underwear",
        href: "/products/search/underwear",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }]
    }, {
      title: "Accessories",
      href: "/products/search/accessories",
      subCategories: [{
        title: "Belt",
        href: "/products/search/belt",
        imgUrl: "/assets/images/products/categories/belt.png"
      }, {
        title: "Hat",
        href: "/products/search/Hat",
        imgUrl: "/assets/images/products/categories/hat.png"
      }, {
        title: "Watches",
        href: "/products/search/Watches",
        imgUrl: "/assets/images/products/categories/watch.png"
      }, {
        title: "Sunglasses",
        href: "/products/search/Sunglasses",
        imgUrl: "/assets/images/products/categories/sunglass.png"
      }]
    }, {
      title: "Shoes",
      href: "/products/search/shoes",
      subCategories: [{
        title: "Sneakers",
        href: "/products/search/Sneakers",
        imgUrl: "/assets/images/products/categories/sneaker.png"
      }, {
        title: "Sandals",
        href: "/products/search/Sandals",
        imgUrl: "/assets/images/products/categories/sandal.png"
      }, {
        title: "Formal",
        href: "/products/search/Formal",
        imgUrl: "/assets/images/products/categories/shirt.png"
      }, {
        title: "Casual",
        href: "/products/search/Casual",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }]
    }, {
      title: "Bags",
      href: "/products/search/bags",
      subCategories: [{
        title: "Backpack",
        href: "/products/search/backpack",
        imgUrl: "/assets/images/products/categories/backpack.png"
      }, {
        title: "Crossbody Bags",
        href: "/products/search/Crossbody Bags",
        imgUrl: "/assets/images/products/categories/bag.png"
      }, {
        title: "Side Bags",
        href: "/products/search/Side Bags",
        imgUrl: "/assets/images/products/categories/mini-bag.png"
      }, {
        title: "Slides",
        href: "/products/search/Slides",
        imgUrl: "/assets/images/products/categories/belt.png"
      }]
    }],
    bottomImage: {
      imgUrl: "/assets/images/promotion/offer-5.png",
      href: "/"
    }
  }
}, {
  icon: MotorBike,
  title: "Bikes",
  href: "/products/search/bikes",
  menuComponent: "MegaMenu2",
  menuData: [{
    icon: Man,
    title: "Man",
    href: "/products/search/fashion",
    megaMenu: "MegaMenu1",
    menuData: {
      categories: [{
        title: "Man Clothes",
        href: "/products/search/man-clothes",
        subCategories: [{
          title: "Shirt",
          href: "/products/search/shirt",
          imgUrl: "/assets/images/products/categories/shirt.png"
        }, {
          title: "T- shirt",
          href: "/products/search/t-shirt",
          imgUrl: "/assets/images/products/categories/t-shirt.png"
        }, {
          title: "Pant",
          href: "/products/search/pant",
          imgUrl: "/assets/images/products/categories/pant.png"
        }, {
          title: "Underwear",
          href: "/products/search/underwear",
          imgUrl: "/assets/images/products/categories/t-shirt.png"
        }]
      }, {
        title: "Accessories",
        href: "/products/search/accessories",
        subCategories: [{
          title: "Belt",
          href: "/products/search/belt",
          imgUrl: "/assets/images/products/categories/belt.png"
        }, {
          title: "Hat",
          href: "/products/search/Hat",
          imgUrl: "/assets/images/products/categories/hat.png"
        }, {
          title: "Watches",
          href: "/products/search/Watches",
          imgUrl: "/assets/images/products/categories/watch.png"
        }, {
          title: "Sunglasses",
          href: "/products/search/Sunglasses",
          imgUrl: "/assets/images/products/categories/sunglass.png"
        }]
      }, {
        title: "Shoes",
        href: "/products/search/shoes",
        subCategories: [{
          title: "Sneakers",
          href: "/products/search/Sneakers",
          imgUrl: "/assets/images/products/categories/sneaker.png"
        }, {
          title: "Sandals",
          href: "/products/search/Sandals",
          imgUrl: "/assets/images/products/categories/sandal.png"
        }, {
          title: "Formal",
          href: "/products/search/Formal",
          imgUrl: "/assets/images/products/categories/shirt.png"
        }, {
          title: "Casual",
          href: "/products/search/Casual",
          imgUrl: "/assets/images/products/categories/t-shirt.png"
        }]
      }, {
        title: "Bags",
        href: "/products/search/bags",
        subCategories: [{
          title: "Backpack",
          href: "/products/search/backpack",
          imgUrl: "/assets/images/products/categories/backpack.png"
        }, {
          title: "Crossbody Bags",
          href: "/products/search/Crossbody Bags",
          imgUrl: "/assets/images/products/categories/bag.png"
        }, {
          title: "Side Bags",
          href: "/products/search/Side Bags",
          imgUrl: "/assets/images/products/categories/mini-bag.png"
        }, {
          title: "Slides",
          href: "/products/search/Slides",
          imgUrl: "/assets/images/products/categories/belt.png"
        }]
      }]
    }
  }, {
    icon: Woman,
    title: "Woman",
    href: "/products/search/electronics",
    megaMenu: 2
  }, {
    icon: BabyBoy,
    title: "Baby Boy",
    href: "/products/search/home&garden",
    megaMenu: 3
  }, {
    icon: BabyGirl,
    title: "Baby Girl",
    href: "/products/search/bikes",
    megaMenu: "MegaMenu1"
  }]
}, {
  icon: PlantPot,
  title: "Home & Garden",
  href: "/products/search/home&garden",
  menuComponent: "MegaMenu1",
  menuData: {
    categories: [{
      title: "Man Clothes",
      href: "/products/search/man-clothes",
      subCategories: [{
        title: "Shirt",
        href: "/products/search/shirt",
        imgUrl: "/assets/images/products/categories/shirt.png"
      }, {
        title: "T- shirt",
        href: "/products/search/t-shirt",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }, {
        title: "Pant",
        href: "/products/search/pant",
        imgUrl: "/assets/images/products/categories/pant.png"
      }, {
        title: "Underwear",
        href: "/products/search/underwear",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }]
    }, {
      title: "Accessories",
      href: "/products/search/accessories",
      subCategories: [{
        title: "Belt",
        href: "/products/search/belt",
        imgUrl: "/assets/images/products/categories/belt.png"
      }, {
        title: "Hat",
        href: "/products/search/Hat",
        imgUrl: "/assets/images/products/categories/hat.png"
      }, {
        title: "Watches",
        href: "/products/search/Watches",
        imgUrl: "/assets/images/products/categories/watch.png"
      }, {
        title: "Sunglasses",
        href: "/products/search/Sunglasses",
        imgUrl: "/assets/images/products/categories/sunglass.png"
      }]
    }, {
      title: "Shoes",
      href: "/products/search/shoes",
      subCategories: [{
        title: "Sneakers",
        href: "/products/search/Sneakers",
        imgUrl: "/assets/images/products/categories/sneaker.png"
      }, {
        title: "Sandals",
        href: "/products/search/Sandals",
        imgUrl: "/assets/images/products/categories/sandal.png"
      }, {
        title: "Formal",
        href: "/products/search/Formal",
        imgUrl: "/assets/images/products/categories/shirt.png"
      }, {
        title: "Casual",
        href: "/products/search/Casual",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }]
    }, {
      title: "Bags",
      href: "/products/search/bags",
      subCategories: [{
        title: "Backpack",
        href: "/products/search/backpack",
        imgUrl: "/assets/images/products/categories/backpack.png"
      }, {
        title: "Crossbody Bags",
        href: "/products/search/Crossbody Bags",
        imgUrl: "/assets/images/products/categories/bag.png"
      }, {
        title: "Side Bags",
        href: "/products/search/Side Bags",
        imgUrl: "/assets/images/products/categories/mini-bag.png"
      }, {
        title: "Slides",
        href: "/products/search/Slides",
        imgUrl: "/assets/images/products/categories/belt.png"
      }]
    }, {
      title: "Woman Clothes",
      href: "/products/search/woman-clothes",
      subCategories: [{
        title: "Shirt",
        href: "/products/search/shirt",
        imgUrl: "/assets/images/products/categories/shirt.png"
      }, {
        title: "T- shirt",
        href: "/products/search/t-shirt",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }, {
        title: "Pant",
        href: "/products/search/pant",
        imgUrl: "/assets/images/products/categories/pant.png"
      }, {
        title: "Underwear",
        href: "/products/search/underwear",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }]
    }, {
      title: "Accessories",
      href: "/products/search/accessories",
      subCategories: [{
        title: "Belt",
        href: "/products/search/belt",
        imgUrl: "/assets/images/products/categories/belt.png"
      }, {
        title: "Hat",
        href: "/products/search/Hat",
        imgUrl: "/assets/images/products/categories/hat.png"
      }, {
        title: "Watches",
        href: "/products/search/Watches",
        imgUrl: "/assets/images/products/categories/watch.png"
      }, {
        title: "Sunglasses",
        href: "/products/search/Sunglasses",
        imgUrl: "/assets/images/products/categories/sunglass.png"
      }]
    }, {
      title: "Shoes",
      href: "/products/search/shoes",
      subCategories: [{
        title: "Sneakers",
        href: "/products/search/Sneakers",
        imgUrl: "/assets/images/products/categories/sneaker.png"
      }, {
        title: "Sandals",
        href: "/products/search/Sandals",
        imgUrl: "/assets/images/products/categories/sandal.png"
      }, {
        title: "Formal",
        href: "/products/search/Formal",
        imgUrl: "/assets/images/products/categories/shirt.png"
      }, {
        title: "Casual",
        href: "/products/search/Casual",
        imgUrl: "/assets/images/products/categories/t-shirt.png"
      }]
    }, {
      title: "Bags",
      href: "/products/search/bags",
      subCategories: [{
        title: "Backpack",
        href: "/products/search/backpack",
        imgUrl: "/assets/images/products/categories/backpack.png"
      }, {
        title: "Crossbody Bags",
        href: "/products/search/Crossbody Bags",
        imgUrl: "/assets/images/products/categories/bag.png"
      }, {
        title: "Side Bags",
        href: "/products/search/Side Bags",
        imgUrl: "/assets/images/products/categories/mini-bag.png"
      }, {
        title: "Slides",
        href: "/products/search/Slides",
        imgUrl: "/assets/images/products/categories/belt.png"
      }]
    }]
  }
}, {
  icon: Gift,
  title: "Gifts",
  href: "/products/search/gifts",
  menuComponent: "MegaMenu2",
  menuData: [{
    icon: Dress,
    title: "Fashion",
    href: "/products/search/fashion"
  }, {
    icon: Laptop,
    title: "Electronics",
    href: "/products/search/electronics"
  }, {
    icon: PlantPot,
    title: "Home & Garden",
    href: "/products/search/home&garden"
  }, {
    icon: MotorBike,
    title: "Bikes",
    href: "/products/search/bikes"
  }, {
    icon: Gift,
    title: "Gifts",
    href: "/products/search/gifts"
  }, {
    icon: Microphone,
    title: "Music",
    href: "/products/search/music"
  }, {
    icon: MakeUp,
    title: "Health & Beauty",
    href: "/products/search/health&beauty"
  }, {
    icon: Pets,
    title: "Pets",
    href: "/products/search/pets"
  }, {
    icon: TeddyBear,
    title: "Baby Toys",
    href: "/products/search/baby-toys"
  }, {
    icon: Food,
    title: "Groceries",
    href: "/products/search/groceries"
  }, {
    icon: Car,
    title: "Automotive",
    href: "/products/search/automotive"
  }]
}, {
  icon: Microphone,
  title: "Music",
  href: "/products/search/music",
  menuComponent: "MegaMenu1"
}, {
  icon: MakeUp,
  title: "Health & Beauty",
  href: "/products/search/health&beauty",
  menuComponent: "MegaMenu1"
}, {
  icon: Pets,
  title: "Pets",
  href: "/products/search/pets",
  menuComponent: "MegaMenu1"
}, {
  icon: TeddyBear,
  title: "Baby Toys",
  href: "/products/search/baby-toys",
  menuComponent: "MegaMenu1"
}, {
  icon: Food,
  title: "Groceries",
  href: "/products/search/groceries",
  menuComponent: "MegaMenu1"
}, {
  icon: Car,
  title: "Automotive",
  href: "/products/search/automotive",
  menuComponent: "MegaMenu1"
}];
export default navigations;