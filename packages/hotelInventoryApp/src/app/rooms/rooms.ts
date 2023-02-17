export interface Hotel {
  totalRooms?: number;
  availableRooms?: number;
  bookedRooms?: number;
}

export interface Room {
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
  rating: number;
}
