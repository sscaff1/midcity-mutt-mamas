export interface Animal {
  age: string;
  attributes: {
    spayed_neutered: boolean;
    house_trained: boolean;
    declawed: boolean | null;
    special_needs: boolean;
    shots_current: boolean;
  };
  description: string;
  breeds: {
    primary: string;
    secondary: string;
    mixed: boolean;
    coat: string;
    colors: {
      primary: string;
      secondary: string | null;
      tertiary: string | null;
    };
  };
  contact: {
    email: string;
    phone: string | null;
    address: {
      address1: string;
      address2: string | null;
      city: string;
      state: string;
      postcode: string;
    };
  };
  distance: number | null;
  environment: {
    children: boolean;
    dogs: boolean;
    cats: boolean | null;
  };
  gender: 'Male' | 'Female';
  id: number;
  name: string;
  organization_animal_id: string | null;
  organization_id: string;
  photos: {
    small: string;
    medium: string;
    large: string;
    full: string;
  }[];
  primary_photo_cropped: {
    small: string;
    medium: string;
    large: string;
    full: string;
  };
  published_at: string;
  size: string;
  species: string;
  status: string;
  status_changed_at: string;
  tags: string[];
  type: string;
  url: string;
  videos: string[];
}
