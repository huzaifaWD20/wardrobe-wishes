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
              name: "Classic Black Suit",
              brand: "Hugo Boss",
              category: "Men",
              subcategory: "Formal",
              price_per_day: 50,
              price_per_month: 500,
              sizes_available: ["48", "50", "52", "54"],
              image: "https://example.com/images/black-suit.jpg",
              description: "Elegant black suit for formal occasions.",
              availability: true
            },
            {
              id: "M-F-2",
              name: "White Dress Shirt",
              brand: "Calvin Klein",
              category: "Men",
              subcategory: "Formal",
              price_per_day: 15,
              price_per_month: 150,
              sizes_available: ["S", "M", "L", "XL"],
              image: "https://example.com/images/white-shirt.jpg",
              description: "Crisp white dress shirt for a sharp look.",
              availability: true
            },
            {
              id: "M-F-3",
              name: "Navy Blue Blazer",
              brand: "Tommy Hilfiger",
              category: "Men",
              subcategory: "Formal",
              price_per_day: 35,
              price_per_month: 350,
              sizes_available: ["48", "50", "52", "54"],
              image: "https://example.com/images/navy-blazer.jpg",
              description: "Versatile navy blue blazer for various formal events.",
              availability: true
            },
            {
              id: "M-F-4",
              name: "Gray Dress Pants",
              brand: "Dockers",
              category: "Men",
              subcategory: "Formal",
              price_per_day: 20,
              price_per_month: 200,
              sizes_available: ["30", "32", "34", "36"],
              image: "https://example.com/images/gray-pants.jpg",
              description: "Classic gray dress pants for a polished look.",
              availability: true
            },
            {
              id: "M-F-5",
              name: "Black Oxford Shoes",
              brand: "Allen Edmonds",
              category: "Men",
              subcategory: "Formal",
              price_per_day: 25,
              price_per_month: 250,
              sizes_available: ["8", "9", "10", "11", "12"],
              image: "https://example.com/images/oxford-shoes.jpg",
              description: "Elegant black Oxford shoes to complete your formal attire.",
              availability: true
            },
            {
              id: "M-F-6",
              name: "Silk Tie",
              brand: "Brooks Brothers",
              category: "Men",
              subcategory: "Formal",
              price_per_day: 10,
              price_per_month: 100,
              sizes_available: ["One Size"],
              image: "https://example.com/images/silk-tie.jpg",
              description: "Premium silk tie for a sophisticated touch.",
              availability: true
            },
            {
              id: "M-F-7",
              name: "Cufflinks Set",
              brand: "Tiffany & Co.",
              category: "Men",
              subcategory: "Formal",
              price_per_day: 15,
              price_per_month: 150,
              sizes_available: ["One Size"],
              image: "https://example.com/images/cufflinks.jpg",
              description: "Elegant cufflinks to add a touch of class to your outfit.",
              availability: true
            }
          ]
        },
        {
          subCategoryName: "Casual",
          products: [
            {
              id: "M-C-1",
              name: "Blue Denim Jeans",
              brand: "Levi's",
              category: "Men",
              subcategory: "Casual",
              price_per_day: 15,
              price_per_month: 150,
              sizes_available: ["30", "32", "34", "36"],
              image: "https://example.com/images/blue-jeans.jpg",
              description: "Classic blue denim jeans for everyday wear.",
              availability: true
            },
            {
              id: "M-C-2",
              name: "Graphic T-Shirt",
              brand: "H&M",
              category: "Men",
              subcategory: "Casual",
              price_per_day: 8,
              price_per_month: 80,
              sizes_available: ["S", "M", "L", "XL"],
              image: "https://example.com/images/graphic-tshirt.jpg",
              description: "Trendy graphic t-shirt for a casual look.",
              availability: true
            },
            {
              id: "M-C-3",
              name: "Khaki Chinos",
              brand: "Gap",
              category: "Men",
              subcategory: "Casual",
              price_per_day: 12,
              price_per_month: 120,
              sizes_available: ["30", "32", "34", "36"],
              image: "https://example.com/images/khaki-chinos.jpg",
              description: "Comfortable khaki chinos for a smart casual style.",
              availability: true
            },
            {
              id: "M-C-4",
              name: "Polo Shirt",
              brand: "Ralph Lauren",
              category: "Men",
              subcategory: "Casual",
              price_per_day: 10,
              price_per_month: 100,
              sizes_available: ["S", "M", "L", "XL"],
              image: "https://example.com/images/polo-shirt.jpg",
              description: "Classic polo shirt for a refined casual look.",
              availability: true
            },
            {
              id: "M-C-5",
              name: "Sneakers",
              brand: "Nike",
              category: "Men",
              subcategory: "Casual",
              price_per_day: 18,
              price_per_month: 180,
              sizes_available: ["8", "9", "10", "11", "12"],
              image: "https://example.com/images/sneakers.jpg",
              description: "Comfortable sneakers for everyday wear.",
              availability: true
            },
            {
              id: "M-C-6",
              name: "Denim Jacket",
              brand: "Wrangler",
              category: "Men",
              subcategory: "Casual",
              price_per_day: 20,
              price_per_month: 200,
              sizes_available: ["S", "M", "L", "XL"],
              image: "https://example.com/images/denim-jacket.jpg",
              description: "Stylish denim jacket to layer over any casual outfit.",
              availability: true
            },
            {
              id: "M-C-7",
              name: "Cargo Shorts",
              brand: "Old Navy",
              category: "Men",
              subcategory: "Casual",
              price_per_day: 10,
              price_per_month: 100,
              sizes_available: ["30", "32", "34", "36"],
              image: "https://example.com/images/cargo-shorts.jpg",
              description: "Comfortable cargo shorts for warm weather.",
              availability: true
            }
          ]
        },
        {
          subCategoryName: "Party",
          products: [
            {
              id: "M-P-1",
              name: "Sequin Blazer",
              brand: "Zara",
              category: "Men",
              subcategory: "Party",
              price_per_day: 40,
              price_per_month: 400,
              sizes_available: ["S", "M", "L", "XL"],
              image: "https://example.com/images/sequin-blazer.jpg",
              description: "Eye-catching sequin blazer for a standout party look.",
              availability: true
            },
            {
              id: "M-P-2",
              name: "Slim Fit Dress Shirt",
              brand: "Express",
              category: "Men",
              subcategory: "Party",
              price_per_day: 20,
              price_per_month: 200,
              sizes_available: ["S", "M", "L", "XL"],
              image: "https://example.com/images/slim-fit-shirt.jpg",
              description: "Stylish slim fit dress shirt for parties and nights out.",
              availability: true
            },
            {
              id: "M-P-3",
              name: "Leather Pants",
              brand: "AllSaints",
              category: "Men",
              subcategory: "Party",
              price_per_day: 35,
              price_per_month: 350,
              sizes_available: ["30", "32", "34", "36"],
              image: "https://example.com/images/leather-pants.jpg",
              description: "Edgy leather pants for a bold party look.",
              availability: true
            },
            {
              id: "M-P-4",
              name: "Velvet Bow Tie",
              brand: "Tom Ford",
              category: "Men",
              subcategory: "Party",
              price_per_day: 15,
              price_per_month: 150,
              sizes_available: ["One Size"],
              image: "https://example.com/images/velvet-bowtie.jpg",
              description: "Luxurious velvet bow tie to elevate your party outfit.",
              availability: true
            },
            {
              id: "M-P-5",
              name: "Metallic Loafers",
              brand: "Giuseppe Zanotti",
              category: "Men",
              subcategory: "Party",
              price_per_day: 45,
              price_per_month: 450,
              sizes_available: ["8", "9", "10", "11", "12"],
              image: "https://example.com/images/metallic-loafers.jpg",
              description: "Statement metallic loafers for a flashy party look.",
              availability: true
            },
            {
              id: "M-P-6",
              name: "Printed Party Shirt",
              brand: "Topman",
              category: "Men",
              subcategory: "Party",
              price_per_day: 25,
              price_per_month: 250,
              sizes_available: ["S", "M", "L", "XL"],
              image: "https://example.com/images/printed-shirt.jpg",
              description: "Bold printed shirt to stand out at any party.",
              availability: true
            },
            {
              id: "M-P-7",
              name: "Glitter Socks",
              brand: "Happy Socks",
              category: "Men",
              subcategory: "Party",
              price_per_day: 5,
              price_per_month: 50,
              sizes_available: ["One Size"],
              image: "https://example.com/images/glitter-socks.jpg",
              description: "Fun glitter socks to add a sparkle to your party outfit.",
              availability: true
            }
          ]
        },
        {
          subCategoryName: "Ethnic",
          products: [
            {
              id: "M-E-1",
              name: "Embroidered Kurta",
              brand: "Manyavar",
              category: "Men",
              subcategory: "Ethnic",
              price_per_day: 30,
              price_per_month: 300,
              sizes_available: ["S", "M", "L", "XL"],
              image: "https://example.com/images/embroidered-kurta.jpg",
              description: "Elegant embroidered kurta for traditional occasions.",
              availability: true
            },
            {
              id: "M-E-2",
              name: "Silk Dhoti",
              brand: "FabIndia",
              category: "Men",
              subcategory: "Ethnic",
              price_per_day: 25,
              price_per_month: 250,
              sizes_available: ["Free Size"],
              image: "https://example.com/images/silk-dhoti.jpg",
              description: "Traditional silk dhoti for a classic ethnic look.",
              availability: true
            },
            {
              id: "M-E-3",
              name: "Brocade Nehru Jacket",
              brand: "Raymond",
              category: "Men",
              subcategory: "Ethnic",
              price_per_day: 40,
              price_per_month: 400,
              sizes_available: ["38", "40", "42", "44"],
              image: "https://example.com/images/nehru-jacket.jpg",
              description: "Stylish brocade Nehru jacket to complement ethnic wear.",
              availability: true
            },
            {
              id: "M-E-4",
              name: "Mojari Shoes",
              brand: "Rajasthani Mojaris",
              category: "Men",
              subcategory: "Ethnic",
              price_per_day: 15,
              price_per_month: 150,
              sizes_available: ["8", "9", "10", "11", "12"],
              image: "https://example.com/images/mojari-shoes.jpg",
              description: "Traditional Mojari shoes to complete your ethnic outfit.",
              availability: true
            },
            {
              id: "M-E-5",
              name: "Zari Border Stole",
              brand: "Mysore Silks",
              category: "Men",
              subcategory: "Ethnic",
              price_per_day: 10,
              price_per_month: 100,
              sizes_available: ["One Size"],
              image: "https://example.com/images/zari-stole.jpg",
              description: "Elegant zari border stole to add flair to your ethnic wear.",
              availability: true
            },
            {
              id: "M-E-6",
              name: "Sherwani",
              brand: "Manyavar",
              category: "Men",
              subcategory: "Ethnic",
              price_per_day: 60,
              price_per_month: 600,
              sizes_available: ["38", "40", "42", "44"],
              image: "https://example.com/images/sherwani.jpg",
              description: "Regal sherwani for special occasions and weddings.",
              availability: true
            },
            {
              id: "M-E-7",
              name: "Ethnic Turban",
              brand: "Rajasthani Pagdi",
              category: "Men",
              subcategory: "Ethnic",
              price_per_day: 20,
              price_per_month: 200,
              sizes_available: ["Free Size"],
              image: "https://example.com/images/ethnic-turban.jpg",
              description: "Traditional turban to complete your ethnic ensemble.",
              availability: true
            }
          ]
        },
        {
          subCategoryName: "Seasonal",
          subcategories: [
            {
              subCategoryName: "Winter",
              products: [
                {
                  id: "M-S-W-1",
                  name: "Wool Overcoat",
                  brand: "Burberry",
                  category: "Men",
                  subcategory: "Seasonal-Winter",
                  price_per_day: 70,
                  price_per_month: 700,
                  sizes_available: ["S", "M", "L", "XL"],
                  image: "https://example.com/images/wool-overcoat.jpg",
                  description: "Luxurious wool overcoat for cold winter days.",
                  availability: true
                },
                {
                  id: "M-S-W-2",
                  name: "Cashmere Sweater",
                  brand: "J.Crew",
                  category: "Men",
                  subcategory: "Seasonal-Winter",
                  price_per_day: 40,
                  price_per_month: 400,
                  sizes_available: ["S", "M", "L", "XL"],
                  image: "https://example.com/images/cashmere-sweater.jpg",
                  description: "Soft and warm cashmere sweater for ultimate comfort.",
                  availability: true
                },
                {
                  id: "M-S-W-3",
                  name: "Insulated Snow Boots",
                  brand: "Timberland",
                  category: "Men",
                  subcategory: "Seasonal-Winter",
                  price_per_day: 30,
                  price_per_month: 300,
                  sizes_available: ["8", "9", "10", "11", "12"],
                  image: "https://example.com/images/snow-boots.jpg",
                  description: "Durable insulated snow boots for winter activities.",
                  availability: true
                },
                {
                  id: "M-S-W-4",
                  name: "Thermal Underwear Set",
                  brand: "Under Armour",
                  category: "Men",
                  subcategory: "Seasonal-Winter",
                  price_per_day: 20,
                  price_per_month: 200,
                  sizes_available: ["S", "M", "L", "XL"],
                  image: "https://example.com/images/thermal-underwear.jpg",
                  description: "Warm thermal underwear set for layering in cold weather.",
                  availability: true
                },
                {
                  id: "M-S-W-5",
                  name: "Fleece-Lined Jeans",
                  brand: "Carhartt",
                  category: "Men",
                  subcategory: "Seasonal-Winter",
                  price_per_day: 25,
                  price_per_month: 250,
                  sizes_available: ["30", "32", "34", "36"],
                  image: "https://example.com/images/fleece-jeans.jpg",
                  description: "Comfortable fleece-lined jeans for extra warmth.",
                  availability: true
                },
                {
                  id: "M-S-W-6",
                  name: "Down Parka",
                  brand: "Canada Goose",
                  category: "Men",
                  subcategory: "Seasonal-Winter",
                  price_per_day: 80,
                  price_per_month: 800,
                  sizes_available: ["S", "M", "L", "XL"],
                  image: "https://example.com/images/down-parka.jpg",
                  description: "Premium down parka for extreme cold conditions.",
                  availability: true
                },
                {
                  id: "M-S-W-7",
                  name: "Wool Scarf",
                  brand: "Acne Studios",
                  category: "Men",
                  subcategory: "Seasonal-Winter",
                  price_per_day: 15,
                  price_per_month: 150,
                  sizes_available: ["One Size"],
                  image: "https://example.com/images/wool-scarf.jpg",
                  description: "Soft wool scarf to keep your neck warm in winter.",
                  availability: true
                }
              ]
            },
            {
              subCategoryName: "Summer",
              products: [
                {
                  id: "M-S-S-1",
                  name: "Linen Shirt",
                  brand: "Uniqlo",
                  category: "Men",
                  subcategory: "Seasonal-Summer",
                  price_per_day: 15,
                  price_per_month: 150,
                  sizes_available: ["S", "M", "L", "XL"],
                  image: "https://example.com/images/linen-shirt.jpg",
                  description: "Breathable linen shirt for hot summer days.",
                  availability: true
                },
                {
                  id: "M-S-S-2",
                  name: "Swim Trunks",
                  brand: "Orlebar Brown",
                  category: "Men",
                  subcategory: "Seasonal-Summer",
                  price_per_day: 20,
                  price_per_month: 200,
                  sizes_available: ["S", "M", "L", "XL"],
                  image: "https://example.com/images/swim-trunks.jpg",
                  description: "Stylish swim trunks for beach or pool.",
                  availability: true
                },
                {
                  id: "M-S-S-3",
                  name: "Espadrilles",
                  brand: "TOMS",
                  category: "Men",
                  subcategory: "Seasonal-Summer",
                  price_per_day: 12,
                  price_per_month: 120,
                  sizes_available: ["8", "9", "10", "11", "12"],
                  image: "https://example.com/images/espadrilles.jpg",
                  description: "Comfortable espadrilles for a casual summer look.",
                  availability: true
                },
                {
                  id: "M-S-S-4",
                  name: "Straw Hat",
                  brand: "Brixton",
                  category: "Men",
                  subcategory: "Seasonal-Summer",
                  price_per_day: 10,
                  price_per_month: 100,
                  sizes_available: ["S/M", "L/XL"],
                  image: "https://example.com/images/straw-hat.jpg",
                  description: "Classic straw hat for sun protection.",
                  availability: true
                },
                {
                  id: "M-S-S-5",
                  name: "Lightweight Chino Shorts",
                  brand: "J.Crew",
                  category: "Men",
                  subcategory: "Seasonal-Summer",
                  price_per_day: 15,
                  price_per_month: 150,
                  sizes_available: ["30", "32", "34", "36"],
                  image: "https://example.com/images/chino-shorts.jpg",
                  description: "Comfortable chino shorts for warm weather.",
                  availability: true
                },
                {
                  id: "M-S-S-6",
                  name: "Polarized Sunglasses",
                  brand: "Ray-Ban",
                  category: "Men",
                  subcategory: "Seasonal-Summer",
                  price_per_day: 25,
                  price_per_month: 250,
                  sizes_available: ["One Size"],
                  image: "https://example.com/images/polarized-sunglasses.jpg",
                  description: "Stylish polarized sunglasses for eye protection.",
                  availability: true
                },
                {
                  id: "M-S-S-7",
                  name: "Cotton Tank Top",
                  brand: "Gap",
                  category: "Men",
                  subcategory: "Seasonal-Summer",
                  price_per_day: 8,
                  price_per_month: 80,
                  sizes_available: ["S", "M", "L", "XL"],
                  image: "https://example.com/images/cotton-tank.jpg",
                  description: "Comfortable cotton tank top for hot summer days.",
                  availability: true
                }
              ]
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
              name: "Black Pencil Skirt",
              brand: "Ann Taylor",
              category: "Women",
              subcategory: "Formal",
              price_per_day: 25,
              price_per_month: 250,
              sizes_available: ["0", "2", "4", "6", "8", "10"],
              image: "https://example.com/images/pencil-skirt.jpg",
              description: "Classic black pencil skirt for a professional look.",
              availability: true
            },
            {
              id: "W-F-2",
              name: "White Blouse",
              brand: "Brooks Brothers",
              category: "Women",
              subcategory: "Formal",
              price_per_day: 20,
              price_per_month: 200,
              sizes_available: ["XS", "S", "M", "L", "XL"],
              image: "https://example.com/images/white-blouse.jpg",
              description: "Crisp white blouse for a polished office look.",
              availability: true
            },
            {
              id: "W-F-3",
              name: "Tailored Blazer",
              brand: "Theory",
              category: "Women",
              subcategory: "Formal",
              price_per_day: 40,
              price_per_month: 400,
              sizes_available: ["0", "2", "4", "6", "8", "10"],
              image: "https://example.com/images/tailored-blazer.jpg",
              description: "Perfectly tailored blazer for a sharp formal look.",
              availability: true
            },
            {
              id: "W-F-4",
              name: "Sheath Dress",
              brand: "Calvin Klein",
              category: "Women",
              subcategory: "Formal",
              price_per_day: 35,
              price_per_month: 350,
              sizes_available: ["2", "4", "6", "8", "10", "12"],
              image: "https://example.com/images/sheath-dress.jpg",
              description: "Elegant sheath dress for formal occasions.",
              availability: true
            },
            {
              id: "W-F-5",
              name: "Pointed Toe Pumps",
              brand: "Jimmy Choo",
              category: "Women",
              subcategory: "Formal",
              price_per_day: 50,
              price_per_month: 500,
              sizes_available: ["5", "6", "7", "8", "9", "10"],
              image: "https://example.com/images/pointed-pumps.jpg",
              description: "Classic pointed toe pumps to complete your formal outfit.",
              availability: true
            },
            {
              id: "W-F-6",
              name: "Pearl Necklace",
              brand: "Mikimoto",
              category: "Women",
              subcategory: "Formal",
              price_per_day: 75,
              price_per_month: 750,
              sizes_available: ["One Size"],
              image: "https://example.com/images/pearl-necklace.jpg",
              description: "Elegant pearl necklace for a touch of sophistication.",
              availability: true
            },
            {
              id: "W-F-7",
              name: "Leather Briefcase",
              brand: "Tumi",
              category: "Women",
              subcategory: "Formal",
              price_per_day: 30,
              price_per_month: 300,
              sizes_available: ["One Size"],
              image: "https://example.com/images/leather-briefcase.jpg",
              description: "Professional leather briefcase for work essentials.",
              availability: true
            }
          ]
        },
        {
          subCategoryName: "Casual",
          products: [
            {
              id: "W-C-1",
              name: "Skinny Jeans",
              brand: "Levi's",
              category: "Women",
              subcategory: "Casual",
              price_per_day: 15,
              price_per_month: 150,
              sizes_available: ["24", "26", "28", "30", "32"],
              image: "https://example.com/images/skinny-jeans.jpg",
              description: "Classic skinny jeans for everyday wear.",
              availability: true
            },
            {
              id: "W-C-2",
              name: "Striped T-Shirt",
              brand: "J.Crew",
              category: "Women",
              subcategory: "Casual",
              price_per_day: 10,
              price_per_month: 100,
              sizes_available: ["XS", "S", "M", "L", "XL"],
              image: "https://example.com/images/striped-tshirt.jpg",
              description: "Comfortable striped t-shirt for a casual look.",
              availability: true
            },
            {
              id: "W-C-3",
              name: "Denim Jacket",
              brand: "Madewell",
              category: "Women",
              subcategory: "Casual",
              price_per_day: 20,
              price_per_month: 200,
              sizes_available: ["XS", "S", "M", "L", "XL"],
              image: "https://example.com/images/denim-jacket-women.jpg",
              description: "Versatile denim jacket to layer over any outfit.",
              availability: true
            },
            {
              id: "W-C-4",
              name: "Maxi Dress",
              brand: "Free People",
              category: "Women",
              subcategory: "Casual",
              price_per_day: 25,
              price_per_month: 250,
              sizes_available: ["XS", "S", "M", "L", "XL"],
              image: "https://example.com/images/maxi-dress.jpg",
              description: "Flowy maxi dress for a comfortable, bohemian look.",
              availability: true
            },
            {
              id: "W-C-5",
              name: "Canvas Sneakers",
              brand: "Converse",
              category: "Women",
              subcategory: "Casual",
              price_per_day: 12,
              price_per_month: 120,
              sizes_available: ["5", "6", "7", "8", "9", "10"],
              image: "https://example.com/images/canvas-sneakers.jpg",
              description: "Classic canvas sneakers for everyday comfort.",
              availability: true
            },
            {
              id: "W-C-6",
              name: "Crossbody Bag",
              brand: "Coach",
              category: "Women",
              subcategory: "Casual",
              price_per_day: 30,
              price_per_month: 300,
              sizes_available: ["One Size"],
              image: "https://example.com/images/crossbody-bag.jpg",
              description: "Stylish crossbody bag for your daily essentials.",
              availability: true
            },
            {
              id: "W-C-7",
              name: "Oversized Sunglasses",
              brand: "Gucci",
              category: "Women",
              subcategory: "Casual",
              price_per_day: 35,
              price_per_month: 350,
              sizes_available: ["One Size"],
              image: "https://example.com/images/oversized-sunglasses.jpg",
              description: "Chic oversized sunglasses to complete your casual look.",
              availability: true
            }
          ]
        },
        {
          subCategoryName: "Party",
          products: [
            {
              id: "W-P-1",
              name: "Sequin Dress",
              brand: "Balmain",
              category: "Women",
              subcategory: "Party",
              price_per_day: 100,
              price_per_month: 1000,
              sizes_available: ["XS", "S", "M", "L"],
              image: "https://example.com/images/sequin-dress.jpg",
              description: "Dazzling sequin dress for a show-stopping party look.",
              availability: true
            },
            {
              id: "W-P-2",
              name: "Strappy Heels",
              brand: "Stuart Weitzman",
              category: "Women",
              subcategory: "Party",
              price_per_day: 50,
              price_per_month: 500,
              sizes_available: ["5", "6", "7", "8", "9", "10"],
              image: "https://example.com/images/strappy-heels.jpg",
              description: "Elegant strappy heels to dance the night away.",
              availability: true
            },
            {
              id: "W-P-3",
              name: "Statement Earrings",
              brand: "Kendra Scott",
              category: "Women",
              subcategory: "Party",
              price_per_day: 25,
              price_per_month: 250,
              sizes_available: ["One Size"],
              image: "https://example.com/images/statement-earrings.jpg",
              description: "Bold statement earrings to elevate your party outfit.",
              availability: true
            },
            {
              id: "W-P-4",
              name: "Metallic Clutch",
              brand: "Michael Kors",
              category: "Women",
              subcategory: "Party",
              price_per_day: 30,
              price_per_month: 300,
              sizes_available: ["One Size"],
              image: "https://example.com/images/metallic-clutch.jpg",
              description: "Sleek metallic clutch for your party essentials.",
              availability: true
            },
            {
              id: "W-P-5",
              name: "Bodycon Jumpsuit",
              brand: "House of CB",
              category: "Women",
              subcategory: "Party",              price_per_day: 60,
              price_per_month: 600,
              sizes_available: ["XS", "S", "M", "L"],
              image: "https://example.com/images/bodycon-jumpsuit.jpg",
              description: "Flattering bodycon jumpsuit for a chic party look.",
              availability: true
            },
            {
              id: "W-P-6",
              name: "Glitter Eyeshadow Palette",
              brand: "Urban Decay",
              category: "Women",
              subcategory: "Party",
              price_per_day: 15,
              price_per_month: 150,
              sizes_available: ["One Size"],
              image: "https://example.com/images/glitter-eyeshadow.jpg",
              description: "Sparkly eyeshadow palette for a glamorous party makeup look.",
              availability: true
            },
            {
              id: "W-P-7",
              name: "Velvet Blazer",
              brand: "Topshop",
              category: "Women",
              subcategory: "Party",
              price_per_day: 40,
              price_per_month: 400,
              sizes_available: ["XS", "S", "M", "L", "XL"],
              image: "https://example.com/images/velvet-blazer.jpg",
              description: "Luxurious velvet blazer for a sophisticated party ensemble.",
              availability: true
            }
          ]
        },
        {
          subCategoryName: "Ethnic",
          products: [
            {
              id: "W-E-1",
              name: "Silk Saree",
              brand: "Sabyasachi",
              category: "Women",
              subcategory: "Ethnic",
              price_per_day: 80,
              price_per_month: 800,
              sizes_available: ["Free Size"],
              image: "https://example.com/images/silk-saree.jpg",
              description: "Elegant silk saree for traditional occasions.",
              availability: true
            },
            {
              id: "W-E-2",
              name: "Embroidered Lehenga",
              brand: "Anita Dongre",
              category: "Women",
              subcategory: "Ethnic",
              price_per_day: 100,
              price_per_month: 1000,
              sizes_available: ["XS", "S", "M", "L", "XL"],
              image: "https://example.com/images/embroidered-lehenga.jpg",
              description: "Intricately embroidered lehenga for festive occasions.",
              availability: true
            },
            {
              id: "W-E-3",
              name: "Kundan Jewelry Set",
              brand: "Tanishq",
              category: "Women",
              subcategory: "Ethnic",
              price_per_day: 60,
              price_per_month: 600,
              sizes_available: ["One Size"],
              image: "https://example.com/images/kundan-jewelry.jpg",
              description: "Stunning Kundan jewelry set to complement ethnic wear.",
              availability: true
            },
            {
              id: "W-E-4",
              name: "Embellished Clutch",
              brand: "Needle Dust",
              category: "Women",
              subcategory: "Ethnic",
              price_per_day: 30,
              price_per_month: 300,
              sizes_available: ["One Size"],
              image: "https://example.com/images/embellished-clutch.jpg",
              description: "Beautiful embellished clutch for ethnic ensembles.",
              availability: true
            },
            {
              id: "W-E-5",
              name: "Zardozi Work Anarkali",
              brand: "Manish Malhotra",
              category: "Women",
              subcategory: "Ethnic",
              price_per_day: 90,
              price_per_month: 900,
              sizes_available: ["XS", "S", "M", "L", "XL"],
              image: "https://example.com/images/zardozi-anarkali.jpg",
              description: "Exquisite Zardozi work Anarkali suit for special occasions.",
              availability: true
            },
            {
              id: "W-E-6",
              name: "Jhumka Earrings",
              brand: "Amrapali",
              category: "Women",
              subcategory: "Ethnic",
              price_per_day: 25,
              price_per_month: 250,
              sizes_available: ["One Size"],
              image: "https://example.com/images/jhumka-earrings.jpg",
              description: "Traditional Jhumka earrings to enhance your ethnic look.",
              availability: true
            },
            {
              id: "W-E-7",
              name: "Brocade Potli Bag",
              brand: "Raw Mango",
              category: "Women",
              subcategory: "Ethnic",
              price_per_day: 20,
              price_per_month: 200,
              sizes_available: ["One Size"],
              image: "https://example.com/images/brocade-potli.jpg",
              description: "Charming brocade potli bag for ethnic occasions.",
              availability: true
            }
          ]
        },
        {
          subCategoryName: "Seasonal",
          subcategories: [
            {
              subCategoryName: "Winter",
              products: [
                {
                  id: "W-S-W-1",
                  name: "Faux Fur Coat",
                  brand: "Max Mara",
                  category: "Women",
                  subcategory: "Seasonal-Winter",
                  price_per_day: 80,
                  price_per_month: 800,
                  sizes_available: ["XS", "S", "M", "L", "XL"],
                  image: "https://example.com/images/faux-fur-coat.jpg",
                  description: "Luxurious faux fur coat for cold winter days.",
                  availability: true
                },
                {
                  id: "W-S-W-2",
                  name: "Cashmere Sweater Dress",
                  brand: "Vince",
                  category: "Women",
                  subcategory: "Seasonal-Winter",
                  price_per_day: 60,
                  price_per_month: 600,
                  sizes_available: ["XS", "S", "M", "L", "XL"],
                  image: "https://example.com/images/sweater-dress.jpg",
                  description: "Cozy cashmere sweater dress for a chic winter look.",
                  availability: true
                },
                {
                  id: "W-S-W-3",
                  name: "Leather Gloves",
                  brand: "UGG",
                  category: "Women",
                  subcategory: "Seasonal-Winter",
                  price_per_day: 15,
                  price_per_month: 150,
                  sizes_available: ["S", "M", "L"],
                  image: "https://example.com/images/leather-gloves.jpg",
                  description: "Warm leather gloves to protect your hands from the cold.",
                  availability: true
                },
                {
                  id: "W-S-W-4",
                  name: "Knit Beanie",
                  brand: "The North Face",
                  category: "Women",
                  subcategory: "Seasonal-Winter",
                  price_per_day: 10,
                  price_per_month: 100,
                  sizes_available: ["One Size"],
                  image: "https://example.com/images/knit-beanie.jpg",
                  description: "Cozy knit beanie to keep your head warm in winter.",
                  availability: true
                },
                {
                  id: "W-S-W-5",
                  name: "Fleece-Lined Leggings",
                  brand: "Athleta",
                  category: "Women",
                  subcategory: "Seasonal-Winter",
                  price_per_day: 20,
                  price_per_month: 200,
                  sizes_available: ["XS", "S", "M", "L", "XL"],
                  image: "https://example.com/images/fleece-leggings.jpg",
                  description: "Warm fleece-lined leggings for cold weather comfort.",
                  availability: true
                },
                {
                  id: "W-S-W-6",
                  name: "Shearling Boots",
                  brand: "UGG",
                  category: "Women",
                  subcategory: "Seasonal-Winter",
                  price_per_day: 35,
                  price_per_month: 350,
                  sizes_available: ["5", "6", "7", "8", "9", "10"],
                  image: "https://example.com/images/shearling-boots.jpg",
                  description: "Cozy shearling boots to keep your feet warm and stylish.",
                  availability: true
                },
                {
                  id: "W-S-W-7",
                  name: "Wool Scarf",
                  brand: "Acne Studios",
                  category: "Women",
                  subcategory: "Seasonal-Winter",
                  price_per_day: 25,
                  price_per_month: 250,
                  sizes_available: ["One Size"],
                  image: "https://example.com/images/wool-scarf-women.jpg",
                  description: "Soft wool scarf to add warmth and style to your winter outfits.",
                  availability: true
                }
              ]
            },
            {
              subCategoryName: "Summer",
              products: [
                {
                  id: "W-S-S-1",
                  name: "Floral Sundress",
                  brand: "Reformation",
                  category: "Women",
                  subcategory: "Seasonal-Summer",
                  price_per_day: 40,
                  price_per_month: 400,
                  sizes_available: ["XS", "S", "M", "L", "XL"],
                  image: "https://example.com/images/floral-sundress.jpg",
                  description: "Light and breezy floral sundress for hot summer days.",
                  availability: true
                },
                {
                  id: "W-S-S-2",
                  name: "Straw Hat",
                  brand: "Eric Javits",
                  category: "Women",
                  subcategory: "Seasonal-Summer",
                  price_per_day: 15,
                  price_per_month: 150,
                  sizes_available: ["One Size"],
                  image: "https://example.com/images/straw-hat-women.jpg",
                  description: "Chic straw hat for sun protection and style.",
                  availability: true
                },
                {
                  id: "W-S-S-3",
                  name: "Linen Shorts",
                  brand: "Eileen Fisher",
                  category: "Women",
                  subcategory: "Seasonal-Summer",
                  price_per_day: 25,
                  price_per_month: 250,
                  sizes_available: ["XS", "S", "M", "L", "XL"],
                  image: "https://example.com/images/linen-shorts.jpg",
                  description: "Comfortable linen shorts for a cool summer look.",
                  availability: true
                },
                {
                  id: "W-S-S-4",
                  name: "Strappy Sandals",
                  brand: "Ancient Greek Sandals",
                  category: "Women",
                  subcategory: "Seasonal-Summer",
                  price_per_day: 30,
                  price_per_month: 300,
                  sizes_available: ["5", "6", "7", "8", "9", "10"],
                  image: "https://example.com/images/strappy-sandals.jpg",
                  description: "Stylish strappy sandals for beach or city wear.",
                  availability: true
                },
                {
                  id: "W-S-S-5",
                  name: "Off-Shoulder Top",
                  brand: "Free People",
                  category: "Women",
                  subcategory: "Seasonal-Summer",
                  price_per_day: 20,
                  price_per_month: 200,
                  sizes_available: ["XS", "S", "M", "L", "XL"],
                  image: "https://example.com/images/off-shoulder-top.jpg",
                  description: "Breezy off-shoulder top for a relaxed summer style.",
                  availability: true
                },
                {
                  id: "W-S-S-6",
                  name: "Beach Tote",
                  brand: "Hat Attack",
                  category: "Women",
                  subcategory: "Seasonal-Summer",
                  price_per_day: 18,
                  price_per_month: 180,
                  sizes_available: ["One Size"],
                  image: "https://example.com/images/beach-tote.jpg",
                  description: "Spacious beach tote for all your summer essentials.",
                  availability: true
                },
                {
                  id: "W-S-S-7",
                  name: "Polarized Sunglasses",
                  brand: "Maui Jim",
                  category: "Women",
                  subcategory: "Seasonal-Summer",
                  price_per_day: 35,
                  price_per_month: 350,
                  sizes_available: ["One Size"],
                  image: "https://example.com/images/polarized-sunglasses-women.jpg",
                  description: "High-quality polarized sunglasses for eye protection and style.",
                  availability: true
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default productData;

