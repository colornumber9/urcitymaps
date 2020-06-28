const CITY_DATA = [
  {
    id: 1,
    title: 'USA',
    routeName: 'usa',
    items: [
      {
        id: 1,
        name: 'San Francisco',
        imageUrl: 'https://freight.cargo.site/t/original/i/41295a4c55b7ba7a1395fc1f78d3b49854ab6434427efdb35315216a7f8644aa/008.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'New Orleans',
        imageUrl: 'https://i.pinimg.com/originals/3c/43/34/3c43349a79f7de824354882ba82fe05a.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'New York City',
        imageUrl: 'https://secretnyc.co/wp-content/uploads/2020/02/maps1.png',
        price: 35
      },
      {
        id: 4,
        name: 'Chicago',
        imageUrl: 'https://tile.loc.gov/image-services/iiif/service:gmd:gmd410:g4104:g4104c:ct003853/full/pct:12.5/0/default.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Portland',
        imageUrl: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2252,w_2478,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Portland_Monthly_real_estate_map_2019_be1fe3.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Washington DC',
        imageUrl: 'https://bostonraremaps.com/wp-content/uploads/2017/08/BRM2866-Thackara_Vallance-small-DC-1792-1-3000x2644.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'Boston',
        imageUrl: 'https://cdn10.bigcommerce.com/s-fhndh/products/1466/images/3822/WRAP_MAPBOS__00349.1459447833.1280.1280.jpg?c=2',
        price: 18
      },
      {
        id: 8,
        name: 'Las Vegas',
        imageUrl: 'https://media.istockphoto.com/vectors/art-illustration-of-las-vegas-city-map-vector-id993341390',
        price: 14
      },
      {
        id: 9,
        name: 'Austin',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0771/0737/products/austin-texas-street-map-print-detail_2048x.jpg?v=1580837964',
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Asia',
    routeName: 'asia',
    items: [
      {
        id: 1,
        name: 'New Delhi',
        imageUrl: 'https://www.netmaps.net/wp-content/uploads/2015/03/New-Delhi-map.jpg',
        price: 220
      },
      {
        id: 2,
        name: 'Shanghai',
        imageUrl: 'https://www.researchgate.net/profile/Charlie_Xue2/publication/232869387/figure/fig9/AS:297757538570253@1448002337594/Rogers-Scheme-The-solution-they-proposed-is-based-on-a-circular-configuration-around-a.png',
        price: 280
      },
      {
        id: 3,
        name: 'Kathmandu',
        imageUrl: 'https://i.pinimg.com/originals/61/7c/7b/617c7b8e5a819f9c2ad65b402d4edc09.jpg',
        price: 110
      },
      {
        id: 4,
        name: 'Seoul',
        imageUrl: 'https://lh3.googleusercontent.com/proxy/iidBpaRNGYKy_22rS9KbDu8LbPG9WmtTefxbYRdp9AZsQtX0UvJ48YKSn2gbAANS6aA0vfmb4l4ptfCP3QTShXxlY2-mDmdgitBV3mVqP1Qp63seVRZufomGPS1U',
        price: 160
      },
      {
        id: 5,
        name: 'Hong Kong',
        imageUrl: 'https://lh6.googleusercontent.com/-c4LQ84ubw8I/VWV6i6WaI1I/AAAAAAAAgDk/3LPj8cnHO9k/w990/hong-kong-p001.jpg',
        price: 160
      },
      {
        id: 6,
        name: 'Karachi',
        imageUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/minimalist-modern-map-of-karachi-pakistan-9-celestial-images.jpg',
        price: 160
      },
      {
        id: 7,
        name: 'Kolkata',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91UQrtrNZfL._AC_SY741_.jpg',
        price: 190
      },
      {
        id: 8,
        name: 'Bangkok',
        imageUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/bangkok-map-1-jazzberry-blue.jpg',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Canada',
    routeName: 'canada',
    items: [
      {
        id: 1,
        name: 'Victoria',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0827/7859/products/victoria-map-print-canada-MapsAsArt-bs-9_2048px_700x700.png?v=1554482104',
        price: 125
      },
      {
        id: 2,
        name: 'Montreal',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0827/7859/products/montreal-map-print-quebec-MapsAsArt-cs-13_2048px_700x700.png?v=1553200520',
        price: 90
      },
      {
        id: 3,
        name: 'Toronto',
        imageUrl: 'https://ctl.s6img.com/society6/img/g0FASYKQ9JRH28cEPIAQS_50aGo/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/a78c00cfb35b46799cf9ae44bbfdc74e/~~/toronto-2kx-prints.jpg',
        price: 90
      },
      {
        id: 4,
        name: 'Quebec City',
        imageUrl: 'https://previews.123rf.com/images/inkdrop/inkdrop1802/inkdrop180200326/94846518-urban-vector-city-map-of-quebec-canada.jpg',
        price: 165
      },
      {
        id: 5,
        name: 'Edmonton',
        imageUrl: 'https://1igc0ojossa412h1e3ek8d1w-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/eu_edm_1.jpg',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Middle East',
    routeName: 'middle-east',
    items: [
      {
        id: 1,
        name: 'Baghdad',
        imageUrl: 'https://news.bbc.co.uk/nol/shared/spl/hi/in_depth/baghdad_navigator/img/baghdad_bombs.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Beirut',
        imageUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/beirut-lebanon-city-map-inspirowl-design.jpg',
        price: 20
      },
      {
        id: 3,
        name: 'Istanbul',
        imageUrl: 'https://lh3.googleusercontent.com/proxy/DdH7Q6PmMb8OsxV4N-E2FA_2GKuJDGBAy4Ci0fzAk1pZi6D7YcmVbsa96UH72whLM8ZXubb2xeCiKeJ3qbQfN1fG4WcczZYPfV5MGmp5AIIqitvFOvAW',
        price: 80
      },
      {
        id: 4,
        name: 'Jerusalem',
        imageUrl: 'https://ctl.s6img.com/society6/img/41l5tf0_idSc0FKG7P0yzFQYwWY/w_1500/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/35a8bcd3e0084ea29c14dc7a869512ea/~~/minimalist-modern-map-of-downtown-jerusalem-israel-2-prints.jpg',
        price: 80
      },
      {
        id: 5,
        name: 'Dubai',
        imageUrl: 'https://www.nationsonline.org/gallery/UAE/Downtown-Zone-Dubai.jpg',
        price: 45
      },
      {
        id: 6,
        name: 'Tehran',
        imageUrl: 'https://cdn.shopify.com/s/files/1/1354/6307/products/il_fullxfull.1100850864_pi27_2048x2048.jpg?v=1540524474',
        price: 135
      },
      {
        id: 7,
        name: 'Cairo',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0827/7859/products/cairo-map-print-egypt-MapsAsArt-bs-1_2048px_730x700.png?v=1552003437',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Europe',
    routeName: 'europe',
    items: [
      {
        id: 1,
        name: 'Dublin',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/DINGNAM%281891%29_p019_MAP_OF_DUBLIN.jpg',
        price: 325
      },
      {
        id: 2,
        name: 'Seville',
        imageUrl: 'https://i.pinimg.com/originals/9b/1e/7b/9b1e7b6abb731d1b58a0fdf11f7328f5.jpg',
        price: 20
      },
      {
        id: 3,
        name: 'Budapest',
        imageUrl: 'https://i.pinimg.com/originals/a7/f5/35/a7f5357af11de99f6106e938d7fb319d.jpg',
        price: 25
      },
      {
        id: 4,
        name: 'Paris',
        imageUrl: 'https://i.pinimg.com/originals/bc/b1/e8/bcb1e854157d4c4054f50de8a4b0e480.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Munich',
        imageUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-munich-germany-city-map-michael-tompsett.jpg',
        price: 40
      },
      {
        id: 6,
        name: 'Amsterdam',
        imageUrl: 'https://1igc0ojossa412h1e3ek8d1w-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/eu_ams_1.jpg',
        price: 25
      }
    ]
  }
];

export default CITY_DATA;