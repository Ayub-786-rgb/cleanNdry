export interface StoreLocation {
  id: number;
  city: string;
  state: string;
  area: string;
  address: string;
  pin: string;
  phone: string;
  timings: string;
}

export const storeLocations: StoreLocation[] = [
  {
    id: 1,
    city: "Angul",
    state: "Odisha",
    area: "In front of Daily Market",
    address: "Township,Nalconagar, Angul",
    pin: "759145",
    phone: "+91 6372767607",
    timings: "10:00 AM - 9:00 PM",
  }
];
