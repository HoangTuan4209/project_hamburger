const products = [
    {
      image: '/images/img_combo1.jpg',
      name: 'COMBO KING JR SUPERMAN',
      description: '1 Burger BBQ + 1 Khoai Tây Chiên nhỏ + 1 Đồ uống + 1 đồ chơi DC Hero',
      price: '109.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo2.jpg',
      name: 'COMBO KING JR WOMAN',
      description: '1 Gà BBQ + 2 Phô Mai Que + 1 Đồ uống + 1 đồ chơi DC Hero',
      price: '119.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo3.jpg',
      name: 'COMBO KING JR BATRMAN',
      description: '1 Burger Gà Giòn BBQ + 3 Gà Nuggets + 1 Đồ uống + 1 đồ chơi DC Hero',
      price: '129.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo4.jpg',
      name: 'COMBO KING A 99K',
      description: '2 Burger junior + 2 Fries S + 2 Drink',
      price: '99.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo5.jpg',
      name: 'COMBO KING B 99K',
      description: '2 Fried chicken + 1 Fries M + 1 Drink',
      price: '99.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo6.jpg',
      name: 'Combo Kuro Ninja Tempura Burger Jr.',
      description: 'Combo 1 Kuro Ninja Tempura Burger Jr. + 1 Nước + 1 Khoai (M)',
      price: '99.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo7.jpg',
      name: 'Combo Kuro Ninja Tempura Burger',
      description: 'Combo 1 Kuro Ninja Tempura Burger. + 1 Nước + 1 Khoai (M)',
      price: '159.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo8.jpg',
      name: 'Combo Levi Warrior',
      description: '1 Kuro Ninja Tempura Burger Jr. + 1 BBQ Wings + 1 Khoai chiên (S) + 1 Nước',
      price: '149.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo9.jpg',
      name: 'Combo King Deli Kuro Ninja 01',
      description: '01 Kuro Ninja Burger Jr + 01 ( Whopper Jr/ BBQ CNC / SGL Grill onion / Cheese burger ) + 02 Fries',
      price: '118.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo10.jpg',
      name: 'Combo CHICN LOVERS 2P',
      description: '2 Miếng Gà Giòn (cay/ không cay) hoặc 2 Cánh Gà BBQ + 1 Burger Bò Phô Mai + 2 Nước ngọt',
      price: '125.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo11.jpg',
      name: 'COMBO FAMILY CHICN LOVERS',
      description: '6 Cánh Gà BBQ + 2 Khoai Tây Chiên (L) + 3 Nước ngọt',
      price: '265.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo12.jpg',
      name: 'COMBO WHOPPER LOVER',
      description: '1 Burger bò nướng Whopper ( cỡ lớn ) + Khoai chiên (S) + 4 gà Nugget + 1 Đồ uống',
      price: '159.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo13.jpg',
      name: 'COMBO EXTREME CHEESE LOVER',
      description: '1 Burger bò tắm phô mai ( cỡ lớn ) + Khoai chiên (S) + 4 gà Nugget + 1 Đồ uống',
      price: '159.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo14.jpg',
      name: 'COMBO SPICY CHICKEN LOVER',
      description: '1 Burger gà giòn cay + Khoai chiên (S) + 4 gà Nugget + 1 Đồ uống',
      price: '159.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo15.jpg',
      name: 'COMBO CHICN LOVER 1P',
      description: '2 Miếng gà BBQ + 1 Đồ uống',
      price: '99.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo16.jpg',
      name: 'COMBO SỐNG CHẤT',
      description: '2 Burger Tắm Bò Phô Mai (cỡ vừa) + 2 Cá Cuộn Rong Biển + 1 Khoai Tây Chiên Tắm Phô Mai + 2',
      price: '175.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo17.jpg',
      name: 'COMBO ĂN THẬT',
      description: '2 Burger Tắm Bò Phô Mai (cỡ lớn) + 2 Phô Mai Que + 1 Khoai Tây Chiên (M) + 2 Nước Ngọt',
      price: '249.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo18.jpg',
      name: 'COMBO HAPPINESS',
      description: '1 Bò Nướng Whopper + 1 Bò Phô Mai + 1 Gà Phô Mai Sốt BBQ + 1 Bò Tắm Phô Mai cỡ vừa + 4 Gà',
      price: '259.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo19.jpg',
      name: 'COMBO FISH BURGER',
      description: '1 Burger Cá + 1 Khoai Tây Chiên (M) + 1 Nước',
      price: '65.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo20.jpg',
      name: 'COMBO BBQ CHICN CRISP CHEESE BURGER',
      description: '1 Burger Gà Phô Mai Sốt BBQ + 1 Khoai tây chiên (M) + 1 Nước ngọt',
      price: '65.000 VND',
      count: '1'
    },
    {
      image: '/images/img_combo21.jpg',
      name: 'COMBO WHOPPER',
      description: '1 Burger Bò Nướng Whopper + 1 Khoai Tây Chiên (M) + 1 Nước ngọt',
      price: '135.000 VND',
      count: '1'
    },
    // Thêm các sản phẩm khác ở đây
];

export default products;