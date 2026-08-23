export interface PetRow {
  type: string;
  breed: string;
  name: string;
  age: string;
  sex: string;
  altered: string;
  howLongOwned: string;
}

export interface FosterApplicationFormData {
  name: string;
  age: string;
  date: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  homePhone: string;
  cellPhone: string;
  email: string;
  howHeard: string;

  numAdults: string;
  adultAges: string;
  numChildren: string;
  childAges: string;
  hasAllergies: string;
  allergyWho: string;
  homeType: string;
  residenceStatus: string;
  lengthAtAddress: string;
  hasPetRestrictions: string;
  petRestrictionsDetail: string;
  landlordName: string;
  landlordPhone: string;

  pets: PetRow[];

  primaryCaretaker: string;

  yardType: string;
  fenceHeight: string;
  fenceMaterial: string;
  fenceMaterialOther: string;
  agreeLeash: string;

  experience: string[];
  previousFosterDescribe: string;
  experienceSizes: string[];
  specificBreeds: string;

  interestedTypes: string[];

  hoursAlone: string;
  whereHome: string;
  whereAlone: string;
  whereSleep: string;

  unpreparedFor: string[];

  sizePreference: string;
  sizePreferenceDetail: string;
  breedPreference: string;
  breedPreferenceDetail: string;
  agePreference: string;
  agePreferenceDetail: string;

  anythingElse: string;

  signature: string;
  signatureDate: string;
  agreementAccepted: boolean;
}
