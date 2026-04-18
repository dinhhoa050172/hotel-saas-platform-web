// lib/mock-data.ts

export interface Property {
  id: string;
  title: string;
  locationName: string;
  coordinates: [number, number]; // [Vĩ độ, Kinh độ]
  pricePerNight: number;
  rating: number;
  globeMarkerSize: number;
}

export const MOCK_PROPERTIES: Property[] = [
  // --- MIỀN BẮC (Đông Bắc, Tây Bắc & Đồng Bằng Sông Hồng) ---
  {
    id: "vn-north-1",
    title: "H'Mong Village Resort",
    locationName: "Quản Bạ, Hà Giang",
    coordinates: [23.0667, 104.9833],
    pricePerNight: 1250000,
    rating: 4.9,
    globeMarkerSize: 0.08,
  },
  {
    id: "vn-north-2",
    title: "Sapa Jade Hill Resort",
    locationName: "Sa Pa, Lào Cai",
    coordinates: [22.3356, 103.8438],
    pricePerNight: 2800000,
    rating: 4.7,
    globeMarkerSize: 0.09,
  },
  {
    id: "vn-north-3",
    title: "Mu Cang Chai Ecolodge",
    locationName: "Mù Cang Chải, Yên Bái",
    coordinates: [21.8542, 104.1258],
    pricePerNight: 1100000,
    rating: 4.8,
    globeMarkerSize: 0.07,
  },
  {
    id: "vn-north-4",
    title: "Topas Ecolodge",
    locationName: "Bản Lếch, Lào Cai",
    coordinates: [22.25, 103.9667],
    pricePerNight: 5500000,
    rating: 4.9,
    globeMarkerSize: 0.08,
  },
  {
    id: "vn-north-5",
    title: "Avana Retreat",
    locationName: "Mai Châu, Hòa Bình",
    coordinates: [20.6592, 105.0792],
    pricePerNight: 4200000,
    rating: 4.9,
    globeMarkerSize: 0.07,
  },
  {
    id: "vn-hanoi-1",
    title: "Sofitel Legend Metropole",
    locationName: "Hoàn Kiếm, Hà Nội",
    coordinates: [21.0253, 105.8523],
    pricePerNight: 7500000,
    rating: 5.0,
    globeMarkerSize: 0.12,
  },
  {
    id: "vn-hanoi-2",
    title: "InterContinental Westlake",
    locationName: "Tây Hồ, Hà Nội",
    coordinates: [21.0583, 105.8292],
    pricePerNight: 3500000,
    rating: 4.8,
    globeMarkerSize: 0.1,
  },
  {
    id: "vn-hanoi-3",
    title: "Lotte Hotel Hanoi",
    locationName: "Ba Đình, Hà Nội",
    coordinates: [21.0319, 105.8119],
    pricePerNight: 3200000,
    rating: 4.7,
    globeMarkerSize: 0.09,
  },
  {
    id: "vn-north-6",
    title: "Legacy Yen Tu",
    locationName: "Uông Bí, Quảng Ninh",
    coordinates: [21.1594, 106.7417],
    pricePerNight: 3800000,
    rating: 4.9,
    globeMarkerSize: 0.08,
  },
  {
    id: "vn-north-7",
    title: "Paradise Peak Cruise",
    locationName: "Vịnh Hạ Long, Quảng Ninh",
    coordinates: [20.9505, 107.0733],
    pricePerNight: 8500000,
    rating: 4.9,
    globeMarkerSize: 0.1,
  },
  {
    id: "vn-north-8",
    title: "Flamingo Dai Lai Resort",
    locationName: "Phúc Yên, Vĩnh Phúc",
    coordinates: [21.3217, 105.7117],
    pricePerNight: 2500000,
    rating: 4.5,
    globeMarkerSize: 0.07,
  },
  {
    id: "vn-north-9",
    title: "Emeralda Resort Ninh Binh",
    locationName: "Gia Viễn, Ninh Bình",
    coordinates: [20.3542, 105.8792],
    pricePerNight: 1950000,
    rating: 4.6,
    globeMarkerSize: 0.08,
  },
  {
    id: "vn-north-10",
    title: "Tam Coc Garden Resort",
    locationName: "Hoa Lư, Ninh Bình",
    coordinates: [20.2167, 105.9167],
    pricePerNight: 3100000,
    rating: 4.8,
    globeMarkerSize: 0.07,
  },

  // --- MIỀN TRUNG (Bắc Trung Bộ & Duyên Hải Nam Trung Bộ) ---
  {
    id: "vn-central-1",
    title: "Melia Vinpearl Cua Hoi",
    locationName: "Cửa Lò, Nghệ An",
    coordinates: [18.825, 105.7167],
    pricePerNight: 2100000,
    rating: 4.4,
    globeMarkerSize: 0.07,
  },
  {
    id: "vn-central-2",
    title: "Sun Spa Resort",
    locationName: "Đồng Hới, Quảng Bình",
    coordinates: [17.4833, 106.6333],
    pricePerNight: 1800000,
    rating: 4.5,
    globeMarkerSize: 0.07,
  },
  {
    id: "vn-central-3",
    title: "Banyan Tree Lang Co",
    locationName: "Phú Lộc, Thừa Thiên Huế",
    coordinates: [16.275, 108.0167],
    pricePerNight: 9500000,
    rating: 4.9,
    globeMarkerSize: 0.09,
  },
  {
    id: "vn-hue-1",
    title: "Azerai La Residence",
    locationName: "Tp. Huế",
    coordinates: [16.4637, 107.5909],
    pricePerNight: 4500000,
    rating: 4.8,
    globeMarkerSize: 0.08,
  },
  {
    id: "vn-danang-1",
    title: "InterContinental Sun Peninsula",
    locationName: "Sơn Trà, Đà Nẵng",
    coordinates: [16.12, 108.3],
    pricePerNight: 12000000,
    rating: 5.0,
    globeMarkerSize: 0.11,
  },
  {
    id: "vn-danang-2",
    title: "Hyatt Regency Resort",
    locationName: "Ngũ Hành Sơn, Đà Nẵng",
    coordinates: [16.0167, 108.2667],
    pricePerNight: 4800000,
    rating: 4.7,
    globeMarkerSize: 0.09,
  },
  {
    id: "vn-hoian-1",
    title: "Four Seasons The Nam Hai",
    locationName: "Điện Bàn, Quảng Nam",
    coordinates: [15.9167, 108.3167],
    pricePerNight: 15500000,
    rating: 5.0,
    globeMarkerSize: 0.09,
  },
  {
    id: "vn-hoian-2",
    title: "Little Hoi An Boutique",
    locationName: "Tp. Hội An",
    coordinates: [15.8801, 108.3381],
    pricePerNight: 1600000,
    rating: 4.7,
    globeMarkerSize: 0.08,
  },
  {
    id: "vn-central-4",
    title: "Zannier Hotels Bãi San Hô",
    locationName: "Sông Cầu, Phú Yên",
    coordinates: [13.55, 109.25],
    pricePerNight: 8200000,
    rating: 4.9,
    globeMarkerSize: 0.08,
  },
  {
    id: "vn-central-5",
    title: "Anantara Quy Nhon Villas",
    locationName: "Tp. Quy Nhơn",
    coordinates: [13.7167, 109.2167],
    pricePerNight: 7500000,
    rating: 4.8,
    globeMarkerSize: 0.07,
  },
  {
    id: "vn-nhatrang-1",
    title: "Six Senses Ninh Van Bay",
    locationName: "Ninh Hòa, Khánh Hòa",
    coordinates: [12.3583, 109.2792],
    pricePerNight: 18000000,
    rating: 5.0,
    globeMarkerSize: 0.1,
  },
  {
    id: "vn-nhatrang-2",
    title: "Amiana Resort Nha Trang",
    locationName: "Tp. Nha Trang",
    coordinates: [12.2388, 109.1967],
    pricePerNight: 3900000,
    rating: 4.7,
    globeMarkerSize: 0.08,
  },
  {
    id: "vn-central-6",
    title: "Amanoi Resort",
    locationName: "Vĩnh Hy, Ninh Thuận",
    coordinates: [11.7333, 109.1833],
    pricePerNight: 25000000,
    rating: 5.0,
    globeMarkerSize: 0.09,
  },
  {
    id: "vn-central-7",
    title: "Anantara Mui Ne Resort",
    locationName: "Phan Thiết, Bình Thuận",
    coordinates: [10.9333, 108.2833],
    pricePerNight: 4100000,
    rating: 4.6,
    globeMarkerSize: 0.08,
  },

  // --- TÂY NGUYÊN (Cao nguyên) ---
  {
    id: "vn-dalat-1",
    title: "Ana Mandara Villas Dalat",
    locationName: "Tp. Đà Lạt",
    coordinates: [11.9404, 108.4583],
    pricePerNight: 2800000,
    rating: 4.7,
    globeMarkerSize: 0.09,
  },
  {
    id: "vn-dalat-2",
    title: "Dalat Palace Heritage",
    locationName: "Tp. Đà Lạt",
    coordinates: [11.936, 108.439],
    pricePerNight: 3500000,
    rating: 4.8,
    globeMarkerSize: 0.08,
  },
  {
    id: "vn-highland-1",
    title: "Lak Tented Camp",
    locationName: "Lắk, Đắk Lắk",
    coordinates: [12.4167, 108.1833],
    pricePerNight: 2200000,
    rating: 4.6,
    globeMarkerSize: 0.07,
  },
  {
    id: "vn-highland-2",
    title: "Coffee Tour Resort",
    locationName: "Buôn Ma Thuột",
    coordinates: [12.6667, 108.05],
    pricePerNight: 1200000,
    rating: 4.3,
    globeMarkerSize: 0.06,
  },

  // --- MIỀN NAM (Đông Nam Bộ & Miền Tây) ---
  {
    id: "vn-hcm-1",
    title: "The Reverie Saigon",
    locationName: "Quận 1, TP.HCM",
    coordinates: [10.7758, 106.7042],
    pricePerNight: 8500000,
    rating: 5.0,
    globeMarkerSize: 0.13,
  },
  {
    id: "vn-hcm-2",
    title: "Park Hyatt Saigon",
    locationName: "Quận 1, TP.HCM",
    coordinates: [10.7778, 106.7025],
    pricePerNight: 7200000,
    rating: 4.9,
    globeMarkerSize: 0.11,
  },
  {
    id: "vn-hcm-3",
    title: "Mia SaiGon Luxury Boutique",
    locationName: "Quận 2, TP.HCM",
    coordinates: [10.8039, 106.7422],
    pricePerNight: 4500000,
    rating: 4.8,
    globeMarkerSize: 0.1,
  },
  {
    id: "vn-hcm-4",
    title: "Hotel Des Arts Saigon",
    locationName: "Quận 3, TP.HCM",
    coordinates: [10.7831, 106.6967],
    pricePerNight: 3900000,
    rating: 4.7,
    globeMarkerSize: 0.09,
  },
  {
    id: "vn-south-1",
    title: "The Imperial Vung Tau",
    locationName: "Tp. Vũng Tàu",
    coordinates: [10.346, 107.0843],
    pricePerNight: 2900000,
    rating: 4.6,
    globeMarkerSize: 0.08,
  },
  {
    id: "vn-south-2",
    title: "Marina Bay Vung Tau",
    locationName: "Tp. Vũng Tàu",
    coordinates: [10.38, 107.06],
    pricePerNight: 2500000,
    rating: 4.5,
    globeMarkerSize: 0.07,
  },
  {
    id: "vn-south-3",
    title: "Six Senses Con Dao",
    locationName: "Côn Đảo, Bà Rịa - Vũng Tàu",
    coordinates: [8.6833, 106.6083],
    pricePerNight: 16500000,
    rating: 4.9,
    globeMarkerSize: 0.1,
  },
  {
    id: "vn-south-4",
    title: "Poulo Condor Design Resort",
    locationName: "Côn Đảo",
    coordinates: [8.7333, 106.6333],
    pricePerNight: 4800000,
    rating: 4.7,
    globeMarkerSize: 0.08,
  },
  {
    id: "vn-south-5",
    title: "Victoria Can Tho Resort",
    locationName: "Tp. Cần Thơ",
    coordinates: [10.0452, 105.7469],
    pricePerNight: 2200000,
    rating: 4.6,
    globeMarkerSize: 0.08,
  },
  {
    id: "vn-south-6",
    title: "Azerai Can Tho",
    locationName: "Cồn Ấu, Cần Thơ",
    coordinates: [10.02, 105.79],
    pricePerNight: 6500000,
    rating: 4.9,
    globeMarkerSize: 0.08,
  },
  {
    id: "vn-phuquoc-1",
    title: "Regent Phu Quoc",
    locationName: "Phú Quốc, Kiên Giang",
    coordinates: [10.12, 103.98],
    pricePerNight: 12500000,
    rating: 5.0,
    globeMarkerSize: 0.12,
  },
  {
    id: "vn-phuquoc-2",
    title: "JW Marriott Phu Quoc",
    locationName: "Phú Quốc",
    coordinates: [10.01, 104.01],
    pricePerNight: 8500000,
    rating: 4.9,
    globeMarkerSize: 0.11,
  },
  {
    id: "vn-phuquoc-3",
    title: "La Veranda Resort",
    locationName: "Tp. Dương Đông, Phú Quốc",
    coordinates: [10.21, 103.96],
    pricePerNight: 3800000,
    rating: 4.7,
    globeMarkerSize: 0.09,
  },
  {
    id: "vn-south-7",
    title: "Victoria Nui Sam Lodge",
    locationName: "Châu Đốc, An Giang",
    coordinates: [10.6833, 105.0833],
    pricePerNight: 1500000,
    rating: 4.5,
    globeMarkerSize: 0.07,
  },
  {
    id: "vn-south-8",
    title: "Mekong Riverside Resort",
    locationName: "Cái Bè, Tiền Giang",
    coordinates: [10.3333, 106.0333],
    pricePerNight: 2300000,
    rating: 4.4,
    globeMarkerSize: 0.07,
  },
  {
    id: "vn-south-9",
    title: "Nam Du Homestay",
    locationName: "Đảo Nam Du, Kiên Giang",
    coordinates: [9.67, 104.35],
    pricePerNight: 600000,
    rating: 4.2,
    globeMarkerSize: 0.06,
  },
  {
    id: "vn-south-10",
    title: "Dat Mui Ecolodge",
    locationName: "Ngọc Hiển, Cà Mau",
    coordinates: [8.6, 104.75],
    pricePerNight: 950000,
    rating: 4.3,
    globeMarkerSize: 0.07,
  },
];

// Helper để lấy danh sách markers cho Cobe Globe
export const getGlobeMarkers = () => {
  return MOCK_PROPERTIES.map((property) => ({
    location: property.coordinates,
    size: property.globeMarkerSize,
  }));
};

// ============================================================
// VIBE DISCOVERY SECTION
// ============================================================

export interface VibeCategory {
  id: string;
  name: string;
  emoji: string;
  description: string;
  image: string;
  tag: string;
  propertyCount: number;
}

export const VIBE_CATEGORIES: VibeCategory[] = [
  {
    id: "vibe-healing",
    name: "Chữa lành giữa rừng",
    emoji: "🌿",
    description: "Tĩnh lặng, thiên nhiên, yoga ban mai",
    image: "/images/landing_page.webp",
    tag: "nature",
    propertyCount: 128,
  },
  {
    id: "vibe-nomad",
    name: "Digital Nomad ven biển",
    emoji: "🏖️",
    description: "WiFi mạnh, view biển, cà phê sáng",
    image: "/images/landing_2.jpg",
    tag: "beach",
    propertyCount: 95,
  },
  {
    id: "vibe-workation",
    name: "Workation góc cửa sổ",
    emoji: "☕",
    description: "Bàn làm việc, ánh sáng tự nhiên, yên tĩnh",
    image: "/images/landing_3.jpg",
    tag: "workation",
    propertyCount: 74,
  },
  {
    id: "vibe-party",
    name: "Party xuyên màn đêm",
    emoji: "🎉",
    description: "Pool party, rooftop bar, DJ set",
    image: "/images/landing_4.webp",
    tag: "nightlife",
    propertyCount: 62,
  },
  {
    id: "vibe-camping",
    name: "Camping ánh lửa",
    emoji: "🔥",
    description: "Lều trại, BBQ, ngắm sao đêm",
    image: "/images/landing_2.avif",
    tag: "camping",
    propertyCount: 53,
  },
];

// ============================================================
// FEATURED PROPERTIES SECTION
// ============================================================

export interface FeaturedProperty {
  id: string;
  title: string;
  location: string;
  image: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  badge?: string;
}

export const FEATURED_PROPERTIES: FeaturedProperty[] = [
  {
    id: "feat-1",
    title: "Sofitel Legend Metropole Hà Nội",
    location: "Hoàn Kiếm, Hà Nội",
    image: "/images/landing_page.webp",
    pricePerNight: 7500000,
    rating: 5.0,
    reviewCount: 324,
    badge: "Yêu thích",
  },
  {
    id: "feat-2",
    title: "InterContinental Sun Peninsula",
    location: "Sơn Trà, Đà Nẵng",
    image: "/images/landing_2.jpg",
    pricePerNight: 12000000,
    rating: 4.97,
    reviewCount: 189,
    badge: "Siêu chủ nhà",
  },
  {
    id: "feat-3",
    title: "Six Senses Ninh Vân Bay",
    location: "Ninh Hòa, Khánh Hòa",
    image: "/images/landing_3.jpg",
    pricePerNight: 18000000,
    rating: 4.95,
    reviewCount: 156,
  },
  {
    id: "feat-4",
    title: "The Reverie Saigon",
    location: "Quận 1, TP.HCM",
    image: "/images/landing_4.webp",
    pricePerNight: 8500000,
    rating: 4.93,
    reviewCount: 412,
    badge: "Yêu thích",
  },
  {
    id: "feat-5",
    title: "Regent Phú Quốc",
    location: "Phú Quốc, Kiên Giang",
    image: "/images/landing_2.avif",
    pricePerNight: 12500000,
    rating: 4.98,
    reviewCount: 98,
    badge: "Mới",
  },
  {
    id: "feat-6",
    title: "Amanoi Resort Ninh Thuận",
    location: "Vĩnh Hy, Ninh Thuận",
    image: "/images/landing_page.webp",
    pricePerNight: 25000000,
    rating: 5.0,
    reviewCount: 67,
  },
];

// ============================================================
// STATS SECTION
// ============================================================

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const STATS_DATA: StatItem[] = [
  { id: "stat-1", value: 2000, suffix: "+", label: "Chỗ ở đã xác minh" },
  { id: "stat-2", value: 50, suffix: "+", label: "Tỉnh thành phủ sóng" },
  { id: "stat-3", value: 4.8, suffix: "★", label: "Đánh giá trung bình" },
];
