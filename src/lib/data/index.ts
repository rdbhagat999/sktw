export type Destination = {
    city: string;
    imageUrl: string;
    imageAlt: string;
    averagePrice: number;
    propertyCount: number;
}

export type Property = {
    imageUrl: string;
    imageAlt: string;
    beds: number;
    baths: number;
    title: string;
    priceInCents: number;
    formattedPrice: string;
    reviewCount: number;
    rating: number;
}

export const popularProperties: Property[] = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1556476719-c2ec46ca76c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      imageAlt: 'Oslo, Norway',
      beds: 4,
      baths: 2,
      title: "Oslo, Norway",
      priceInCents: 190000,
      formattedPrice: "$1,900.00",
      reviewCount: 1114,
      rating: 4,
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
      imageAlt: 'Valencia, Spain',
      beds: 3,
      baths: 2,
      title: "Valencia, Spain",
      priceInCents: 150000,
      formattedPrice: "$1,500.00",
      reviewCount: 3104,
      rating: 4,
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1518730518541-d0843268c287?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      imageAlt: 'Rome, Italy',
      beds: 3,
      baths: 3,
      title: "Rome, Italy",
      priceInCents: 210000,
      formattedPrice: "$2,100.00",
      reviewCount: 5564,
      rating: 3,
    },
]

export const popularDestinations: Destination[] = [
    {
        city: 'Toronto',
        averagePrice: 120,
        propertyCount: 76,
        imageUrl: 'https://images.unsplash.com/photo-1571055582845-67e98663656f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Toronto skyline',
    },
    {
        city: 'Malibu',
        averagePrice: 215,
        propertyCount: 43,
        imageUrl: 'https://images.unsplash.com/photo-1499898595565-f424ed1d075c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80',
        imageAlt: 'Cliff in Malibu',
    },
    {
        city: 'Chicago',
        averagePrice: 130,
        propertyCount: 115,
        imageUrl: 'https://images.unsplash.com/photo-1484249170766-998fa6efe3c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2558&q=80',
        imageAlt: 'Chicago skyline',
    },
    {
        city: 'Seattle',
        averagePrice: 135,
        propertyCount: 63,
        imageUrl: 'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
        imageAlt: 'Seattle skyline',
    },
    {
        city: 'Colorado',
        averagePrice: 85,
        propertyCount: 47,
        imageUrl: 'https://images.unsplash.com/photo-1556596326-7556ce907a7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2536&q=80',
        imageAlt: 'Lake in Colorado',
    },
    {
        city: 'Miami',
        averagePrice: 115,
        propertyCount: 86,
        imageUrl: 'https://images.unsplash.com/photo-1501509497947-782640bc1412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
        imageAlt: 'Beach in Miami',
    },
];
