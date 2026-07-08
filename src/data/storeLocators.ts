export interface StoreLocation {
  id: number;
  city: string;
  state: string;
  area: string;
  address: string;
  phone: string;
  timings: string;
}

export const storeLocations: StoreLocation[] = [
  {
    id: 1,
    city: "Angul",
    state: "Odisha",
    area: "In front of daily Market",
    address: "Township,Nalconagar, Angul",
    phone: "+91 7609851051",
    timings: "8:00 AM - 9:00 PM",
  }
];
