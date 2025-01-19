import m_f_2000_1 from "../assets/images/Men/M-F-2000(1).jpg"
import m_f_3500_1 from "../assets/images/Men/M-F-3500(1).jpg"
import m_f_6000_1 from "../assets/images/Men/M-F-6000(1).jpg"
import w_f_3000_1 from "../assets/images/Women/W-F-3000(1).jpg"
import w_f_3000_3 from "../assets/images/Women/W-F-3000(3).jpg"
import w_f_3500_2 from "../assets/images/Women/W-F-3500(2).jpg"
import w_f_3500_4 from "../assets/images/Women/W-F-3500(4).jpg"
import w_f_4000_1 from "../assets/images/Women/W-F-4000(2).jpg"
const productData = {
  categories: [
    {
      categoryName: "Men",
      subcategories: [
        {
          subCategoryName: "Formal",
          products: [
            {
              id: "M-F-1",
              name: "Classic Grey Suit",
              brand: "Brumano",
              category: "Men",
              subcategory: "Formal",
              price_per_day: 6000,
              sizes_available: ["48", "50", "52", "54"],
              image: m_f_6000_1,
              description: "Elegant Grey suit for formal occasions.",
              availability: true
            },
            {
              id: "M-F-2",
              name: "Blue Formal Kurta",
              brand: "J.",
              category: "Men",
              subcategory: "Formal",
              price_per_day: 2000,
              sizes_available: ["S", "M", "L", "XL"],
              image: m_f_2000_1,
              description: "Crisp Blue Kurta for a sharp look.",
              availability: true
            },
            {
              id: "M-F-3",
              name: "Black Kurta + Coat",
              brand: "AlKaram",
              category: "Men",
              subcategory: "Formal",
              price_per_day: 3500,
              sizes_available: ["48", "50", "52", "54"],
              image: m_f_3500_1,
              description: "Versatile navy blue blazer for various formal events.",
              availability: true
            }
          ]
        }
      ]
    },
    {
      categoryName: "Women",
      subcategories: [
        {
          subCategoryName: "Formal",
          products: [
            {
              id: "W-F-1",
              name: "Peach & Maroon Dress",
              brand: "Khaadi",
              category: "Women",
              subcategory: "Formal",
              price_per_day: 3000,
              sizes_available: ["XS", "S", "M", "L", "XL"],
              image: w_f_3000_1,
              description: "Classic black pencil skirt for a professional look.",
              availability: true
            },
            {
              id: "W-F-2",
              name: "Pink & Purple Dress",
              brand: "Khaadi",
              category: "Women",
              subcategory: "Formal",
              price_per_day: 3000,
              sizes_available: ["XS", "S", "M", "L", "XL"],
              image: w_f_3000_3,
              description: "Crisp white blouse for a polished office look.",
              availability: true
            },
            {
              id: "W-F-3",
              name: "Shiny Silver Suit (3pc)",
              brand: "Gul Ahmed",
              category: "Women",
              subcategory: "Formal",
              price_per_day: 3500,
              sizes_available: ["XS", "S", "M", "L", "XL"],
              image: w_f_3500_2,
              description: "Perfectly tailored blazer for a sharp formal look.",
              availability: true
            },
            {
              id: "W-F-4",
              name: "Pink Long Shrug Dress",
              brand: "Bonanza",
              category: "Women",
              subcategory: "Formal",
              price_per_day: 3500,
              sizes_available: ["XS", "S", "M", "L", "XL"],
              image: w_f_3500_4,
              description: "Elegant sheath dress for formal occasions.",
              availability: true
            },
            {
              id: "W-F-5",
              name: "Formal Long Kurti (3pc)",
              brand: "Asim Jofa",
              category: "Women",
              subcategory: "Formal",
              price_per_day: 4000,
              sizes_available: ["XS", "S", "M", "L", "XL"],
              image: w_f_4000_1,
              description: "Classic pointed toe pumps to complete your formal outfit.",
              availability: true
            }
          ]
        }
      ]
    }
  ]
};

export default productData;

