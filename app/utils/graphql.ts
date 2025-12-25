import { GraphQLClient } from 'graphql-request';
import { API_URL, ORGANIZATION_ID, STATUS, S3_URL } from './constants';
import type { Animal } from '../types/Animal';

// GraphQL query for searching animals
export const SEARCH_ANIMALS_QUERY = `
  query SearchAnimal($pagination: PaginationInfoInput!, $filters: AnimalSearchFiltersInput!, $isConsumer: Boolean!) {
    searchAnimal(
      filters: $filters
      pagination: $pagination
      sort: { order: "asc" }
      isConsumer: $isConsumer
    ) {
      totalCount
      animals {
        animalId
        animalName
        description
        physical {
          vaccinated
          size {
            label
          }
          breed {
            primary
            secondary
            mixed
          }
          spayedNeutered
          specialNeeds
          age {
            label
          }
          sex
        }
        behavior {
          houseTrained
          interactions {
            cats
            dogs
            childrenUnder8
            children8AndUp
            otherAnimals
          }
        }
        _contact {
          email
          phone
          address {
            city
            state
          }
        }
        publicUrl {
          url
        }
      }
    }
  }
`;

// GraphQL query for getting media for an animal
export const GET_MEDIA_FOR_ANIMAL_QUERY = `
  query GetMediaForAnimal($animalId: String!) {
    getMediaForAnimal(animalId: $animalId) {
      mediaId
      mediaFormat
    }
  }
`;

interface GetMediaForAnimalResponse {
  getMediaForAnimal: Array<{
    mediaId: string;
    mediaFormat: string;
  }>;
}

interface SearchAnimalResponse {
  searchAnimal: {
    totalCount: number;
    animals: GraphQLAnimal[];
  };
}

export interface GraphQLAnimal {
  animalId: string;
  animalName: string;
  description?: string;
  physical?: {
    vaccinated?: boolean;
    size?: {
      label?: string;
    };
    breed?: {
      primary?: string;
      secondary?: string;
      mixed?: boolean;
    };
    spayedNeutered?: boolean;
    specialNeeds?: boolean;
    age?: {
      label?: string;
    };
    sex?: string;
  };
  behavior?: {
    houseTrained?: boolean;
    interactions?: {
      cats?: boolean | null;
      dogs?: boolean | null;
      childrenUnder8?: boolean | null;
      children8AndUp?: boolean | null;
      otherAnimals?: boolean | null;
    };
  };
  _contact?: {
    email?: string;
    phone?: string | null;
    address?: {
      city?: string;
      state?: string;
    };
  };
  publicUrl?: {
    url?: string;
  };
}

// Helper function to construct media URL
const getMediaUrl = (animalId: string, mediaId: string, mediaFormat: string): string => {
  // Convert jpeg to jpg for the file extension
  const fileExtension = mediaFormat === 'jpeg' ? 'jpg' : mediaFormat;
  return `${S3_URL}animal/${animalId}/image/${mediaId}.${fileExtension}`;
};

// Fetch media for an animal
export const getMediaForAnimal = async (animalId: string): Promise<Array<{ mediaId: string; mediaFormat: string }>> => {
  const variables = {
    animalId,
  };

  const data = await executeGraphQLQuery<GetMediaForAnimalResponse>(GET_MEDIA_FOR_ANIMAL_QUERY, variables);
  return data.getMediaForAnimal;
};

// Map GraphQL animal response to Animal type
export const mapGraphQLAnimalToAnimal = async (graphqlAnimal: GraphQLAnimal): Promise<Animal> => {
  if (!graphqlAnimal) {
    throw new Error('Cannot map undefined GraphQL animal');
  }

  // Fetch media for this animal
  const mediaList = await getMediaForAnimal(graphqlAnimal.animalId);

  // Use first photo from media for primary photo (media is always defined)
  const firstMedia = mediaList[0];
  const primaryPhotoUrl = firstMedia
    ? getMediaUrl(graphqlAnimal.animalId, firstMedia.mediaId, firstMedia.mediaFormat)
    : '';
  const primaryPhoto = primaryPhotoUrl
    ? {
        small: primaryPhotoUrl,
        medium: primaryPhotoUrl,
        large: primaryPhotoUrl,
        full: primaryPhotoUrl,
      }
    : {
        small: '',
        medium: '',
        large: '',
        full: '',
      };

  // Map media to photos using the new URL format
  const photos = mediaList.map((media) => {
    const mediaUrl = getMediaUrl(graphqlAnimal.animalId, media.mediaId, media.mediaFormat);
    return {
      small: mediaUrl,
      medium: mediaUrl,
      large: mediaUrl,
      full: mediaUrl,
    };
  });

  const videos: string[] = [];
  return {
    id: graphqlAnimal.animalId,
    name: graphqlAnimal.animalName || '',
    age: graphqlAnimal.physical?.age?.label || '',
    size: graphqlAnimal.physical?.size?.label || '',
    gender: (graphqlAnimal.physical?.sex as 'Male' | 'Female') || 'Male',
    description: graphqlAnimal.description || '',
    breeds: {
      primary: graphqlAnimal.physical?.breed?.primary || '',
      secondary: graphqlAnimal.physical?.breed?.secondary || '',
      mixed: graphqlAnimal.physical?.breed?.mixed || false,
      coat: '',
      colors: {
        primary: '',
        secondary: null,
        tertiary: null,
      },
    },
    attributes: {
      spayed_neutered: graphqlAnimal.physical?.spayedNeutered || false,
      house_trained: graphqlAnimal.behavior?.houseTrained || false,
      declawed: null,
      special_needs: graphqlAnimal.physical?.specialNeeds || false,
      shots_current: graphqlAnimal.physical?.vaccinated || false,
    },
    environment: {
      children:
        graphqlAnimal.behavior?.interactions?.childrenUnder8 ||
        graphqlAnimal.behavior?.interactions?.children8AndUp ||
        false,
      dogs: graphqlAnimal.behavior?.interactions?.dogs || false,
      cats: graphqlAnimal.behavior?.interactions?.cats || null,
    },
    contact: {
      email: graphqlAnimal._contact?.email || '',
      phone: graphqlAnimal._contact?.phone || null,
      address: {
        address1: '',
        address2: null,
        city: graphqlAnimal._contact?.address?.city || '',
        state: graphqlAnimal._contact?.address?.state || '',
        postcode: '',
      },
    },
    distance: null,
    organization_id: '',
    organization_animal_id: null,
    photos: photos.length > 0 ? photos : [primaryPhoto],
    primary_photo_cropped: primaryPhoto,
    published_at: '',
    status: STATUS,
    status_changed_at: '',
    tags: [],
    species: '',
    type: '',
    url: graphqlAnimal.publicUrl?.url || '',
    videos: videos,
  };
};

// Create GraphQL client (unauthenticated endpoint)
const graphQLClient = new GraphQLClient(API_URL);

// Execute GraphQL query
export const executeGraphQLQuery = async <T>(query: string, variables: Record<string, unknown>): Promise<T> => {
  try {
    const data = await graphQLClient.request<T>(query, variables);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      // graphql-request provides better error messages
      throw new Error(`GraphQL request failed: ${error.message}`);
    }
    throw error;
  }
};

// Search animals using GraphQL
export const searchAnimals = async (pageSize: number = 100, fromPage: number = 0) => {
  const variables = {
    pagination: {
      fromPage,
      pageSize,
    },
    filters: {
      organization_id: [ORGANIZATION_ID],
      adoption_status: STATUS,
    },
    isConsumer: true,
  };

  const data = await executeGraphQLQuery<SearchAnimalResponse>(SEARCH_ANIMALS_QUERY, variables);
  return data.searchAnimal.animals;
};

// Get a single animal by ID using GraphQL
export const getAnimalById = async (animalId: string): Promise<GraphQLAnimal | undefined> => {
  const variables = {
    pagination: {
      fromPage: 0,
      pageSize: 1,
    },
    filters: {
      pet_ids: [animalId],
      organization_id: [ORGANIZATION_ID],
      adoption_status: STATUS,
    },
    isConsumer: true,
  };

  const data = await executeGraphQLQuery<SearchAnimalResponse>(SEARCH_ANIMALS_QUERY, variables);
  return data.searchAnimal.animals[0];
};
