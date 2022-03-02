const DISHES = [
  {
    id: 0,
    name: "Ginger burger",
    Image:
      // "https://recipefairy.com/wp-content/uploads/2020/08/kfc-zinger-burger.jpg"
      'assets/images/kfc-zinger-burger.png',
    category: "meal",
    label: "hot",
    price: "199",
    desciption:
      "This recipe is surprisingly easy to make, not to mention healthier than an actual KFC Zinger burger;",
    comments: [
      {
        id: 0,
        rating: 5,
        comment: "it was tasty",
        author: "Akash",
        date: "2022-01-22",
      },
    ],
  },
  {
    id: 1,
    name: "French Fries",
    Image:
      "https://aubreyskitchen.com/wp-content/uploads/2021/01/frozen-french-fries-in-air-fryer.jpg",
    category: "Appetizer",
    label: "new",
    price: "80",
    desciption:
      "A thin strip of potato, usually cut 3 to 4 inches in length and about 1/4 to 3/8 inches square that are deep fried until they are golden brown and crisp textured on the outside while remaining white and soft on the inside",
    comments: [
      {
        id: 1,
        rating: 4,
        comment: "it was amazing specially the sauce",
        author: "Akash",
        date: "2022-02-12",
      },
    ],
  },
  {
    id: 2,
    name: "BBQ Sirloin Steaks",
    Image:
      "https://media.gettyimages.com/photos/sirloin-steaks-picture-id972839180?s=612x612",
    category: "meal",
    label: "hot",
    price: "240",
    desciption:
      "Grilling involves cooking food on a rack over a heat source, usually a charcoal fire or ceramic briquettes heated by gas flames.",
    comments: [
      {
        id: 2,
        rating: 5,
        comment: "it was juicy ,LOVED IT",
        author: "Hossain",
        date: "2021-01-02",
      },
    ],
  },
];

export default DISHES;
