import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { EMAIL_URL } from '~/utils/constants';
import type { FosterApplicationFormData, PetRow } from '~/types/FosterApplication';

const defaultPetRow: PetRow = { type: '', breed: '', name: '', age: '', sex: '', altered: '', howLongOwned: '' };

const defaultValues: FosterApplicationFormData = {
  name: '',
  age: '',
  date: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  homePhone: '',
  cellPhone: '',
  email: '',
  howHeard: '',
  numAdults: '',
  adultAges: '',
  numChildren: '',
  childAges: '',
  hasAllergies: '',
  allergyWho: '',
  homeType: '',
  residenceStatus: '',
  lengthAtAddress: '',
  hasPetRestrictions: '',
  petRestrictionsDetail: '',
  landlordName: '',
  landlordPhone: '',
  pets: [defaultPetRow],
  primaryCaretaker: '',
  yardType: '',
  fenceHeight: '',
  fenceMaterial: '',
  fenceMaterialOther: '',
  agreeLeash: '',
  experience: [],
  previousFosterDescribe: '',
  experienceSizes: [],
  specificBreeds: '',
  interestedTypes: [],
  hoursAlone: '',
  whereHome: '',
  whereAlone: '',
  whereSleep: '',
  unpreparedFor: [],
  sizePreference: '',
  sizePreferenceDetail: '',
  breedPreference: '',
  breedPreferenceDetail: '',
  agePreference: '',
  agePreferenceDetail: '',
  anythingElse: '',
  signature: '',
  signatureDate: '',
  agreementAccepted: false,
};

const EXPERIENCE_OPTIONS = [
  'Never had a dog',
  'Had childhood pet dog',
  'Had one or more as an adult',
  'Have experience with powerful breeds',
  'Have experience working with on-going medical problems with a personal dog',
  'Have experience working at a boarding kennel/resort/pet sitting service etc.',
  'Have experience working with behavioral problems with a personal dog',
  'Have experience working in a veterinary hospital',
  'Am a professional dog trainer',
  'Have previous foster/rescue experience',
];

const INTERESTED_TYPE_OPTIONS = [
  'Adult dog',
  'Puppies',
  'Mother with nursing puppies',
  'Unweaned puppies/Bottle babies',
  'Sick dog/puppy',
  'Injured dog/puppy',
  'Dog/puppy with behavioral issues',
  'Long-term hospice care',
  'Pit Bull/Bully breeds',
];

const UNPREPARED_OPTIONS = [
  'Excessive barking',
  'Destructive chewing',
  'Not housetrained',
  'Digging',
  'Escaping',
  'Resource (food/toy) aggression',
  'Shy, fearful, or undersocialized dog',
  'Not good with children',
  'Not good with other dogs',
  'Not good with small animals/cats',
  'Scratching/biting',
  'Administering medications',
  'Providing on-going training',
  'Very high activity level',
  'Deaf/Blind dogs',
];

const inputClasses =
  'w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#5f8576] focus:border-transparent';
const labelClasses = 'block text-sm font-medium text-gray-700 mb-1';
const fieldWrapClasses = 'mb-4';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

function FosterApplicationForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FosterApplicationFormData>({ defaultValues });

  const { fields: petFields, append: appendPet, remove: removePet } = useFieldArray({ control, name: 'pets' });

  const onSubmit = async (data: FosterApplicationFormData) => {
    setSubmitState('submitting');
    try {
      const response = await fetch('/foster-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }
      setSubmitState('success');
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      setSubmitState('error');
    }
  };

  if (submitState === 'success') {
    return (
      <div className="text-center py-8">
        <i className="bi bi-check-circle-fill text-[#5f8576] text-5xl mb-4"></i>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank you!</h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          Your application has been emailed to{' '}
          <a href={`mailto:${EMAIL_URL}`} className="text-[#5f8576] font-semibold hover:underline">
            {EMAIL_URL}
          </a>
          . We&apos;ll be in touch soon!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10">
      {/* Personal Information */}
      <fieldset>
        <legend className="text-xl font-semibold text-gray-800 mb-4">Personal Information</legend>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`${fieldWrapClasses} md:col-span-2`}>
            <label className={labelClasses} htmlFor="name">
              Name *
            </label>
            <input
              id="name"
              className={inputClasses}
              {...register('name', { required: 'Name is required' })}
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
          </div>
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="age">
              Age *
            </label>
            <input id="age" className={inputClasses} {...register('age', { required: 'Age is required' })} />
            {errors.age && <p className="text-sm text-red-600 mt-1">{errors.age.message}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`${fieldWrapClasses} md:col-span-3`}>
            <label className={labelClasses} htmlFor="address">
              Address *
            </label>
            <input
              id="address"
              className={inputClasses}
              {...register('address', { required: 'Address is required' })}
            />
            {errors.address && <p className="text-sm text-red-600 mt-1">{errors.address.message}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="city">
              City *
            </label>
            <input id="city" className={inputClasses} {...register('city', { required: 'City is required' })} />
            {errors.city && <p className="text-sm text-red-600 mt-1">{errors.city.message}</p>}
          </div>
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="state">
              State *
            </label>
            <input id="state" className={inputClasses} {...register('state', { required: 'State is required' })} />
            {errors.state && <p className="text-sm text-red-600 mt-1">{errors.state.message}</p>}
          </div>
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="zip">
              Zip *
            </label>
            <input id="zip" className={inputClasses} {...register('zip', { required: 'Zip is required' })} />
            {errors.zip && <p className="text-sm text-red-600 mt-1">{errors.zip.message}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="homePhone">
              Home phone
            </label>
            <input id="homePhone" className={inputClasses} {...register('homePhone')} />
          </div>
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="cellPhone">
              Work/Cell phone *
            </label>
            <input
              id="cellPhone"
              className={inputClasses}
              {...register('cellPhone', { required: 'A phone number is required' })}
            />
            {errors.cellPhone && <p className="text-sm text-red-600 mt-1">{errors.cellPhone.message}</p>}
          </div>
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="email">
              Email *
            </label>
            <input
              id="email"
              type="email"
              className={inputClasses}
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
          </div>
        </div>
        <div className={fieldWrapClasses}>
          <label className={labelClasses} htmlFor="howHeard">
            How did you hear about us?
          </label>
          <input id="howHeard" className={inputClasses} {...register('howHeard')} />
        </div>
      </fieldset>

      {/* Household Information */}
      <fieldset>
        <legend className="text-xl font-semibold text-gray-800 mb-4">Household Information</legend>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="numAdults">
              Adults over 21 (incl. self)
            </label>
            <input id="numAdults" className={inputClasses} {...register('numAdults')} />
          </div>
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="adultAges">
              Ages
            </label>
            <input id="adultAges" className={inputClasses} {...register('adultAges')} />
          </div>
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="numChildren">
              Children (under 21)
            </label>
            <input id="numChildren" className={inputClasses} {...register('numChildren')} />
          </div>
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="childAges">
              Ages
            </label>
            <input id="childAges" className={inputClasses} {...register('childAges')} />
          </div>
        </div>

        <div className={fieldWrapClasses}>
          <span className={labelClasses}>Does anyone in the household have allergies to dogs?</span>
          <div className="flex gap-6 items-center">
            <label className="inline-flex items-center gap-2 text-gray-700">
              <input type="radio" value="yes" {...register('hasAllergies')} /> Yes
            </label>
            <label className="inline-flex items-center gap-2 text-gray-700">
              <input type="radio" value="no" {...register('hasAllergies')} /> No
            </label>
          </div>
          <input className={`${inputClasses} mt-2`} placeholder="If yes, who?" {...register('allergyWho')} />
        </div>

        <div className={fieldWrapClasses}>
          <span className={labelClasses}>Do you live in:</span>
          <div className="flex flex-wrap gap-4">
            {['House', 'Apartment', 'Condo', 'Duplex', 'Mobile Home', 'Townhome'].map((option) => (
              <label key={option} className="inline-flex items-center gap-2 text-gray-700">
                <input type="radio" value={option} {...register('homeType')} /> {option}
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={fieldWrapClasses}>
            <span className={labelClasses}>Do you:</span>
            <div className="flex gap-4">
              {['Own', 'Rent', 'Lease'].map((option) => (
                <label key={option} className="inline-flex items-center gap-2 text-gray-700">
                  <input type="radio" value={option} {...register('residenceStatus')} /> {option}
                </label>
              ))}
            </div>
          </div>
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="lengthAtAddress">
              How long have you been at this address?
            </label>
            <input id="lengthAtAddress" className={inputClasses} {...register('lengthAtAddress')} />
          </div>
        </div>

        <div className={fieldWrapClasses}>
          <span className={labelClasses}>If renting/leasing, are there pet restrictions?</span>
          <div className="flex gap-6 items-center mb-2">
            <label className="inline-flex items-center gap-2 text-gray-700">
              <input type="radio" value="yes" {...register('hasPetRestrictions')} /> Yes
            </label>
            <label className="inline-flex items-center gap-2 text-gray-700">
              <input type="radio" value="no" {...register('hasPetRestrictions')} /> No
            </label>
          </div>
          <input className={inputClasses} placeholder="If yes, what are they?" {...register('petRestrictionsDetail')} />
          <p className="text-sm text-gray-500 italic mt-2">
            If renting, we will contact your landlord to ask if fostering animals in your home is acceptable. You will
            not be able to foster until we receive positive confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="landlordName">
              Landlord&apos;s name
            </label>
            <input id="landlordName" className={inputClasses} {...register('landlordName')} />
          </div>
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="landlordPhone">
              Landlord&apos;s phone
            </label>
            <input id="landlordPhone" className={inputClasses} {...register('landlordPhone')} />
          </div>
        </div>
      </fieldset>

      {/* Current Pets */}
      <fieldset>
        <legend className="text-xl font-semibold text-gray-800 mb-4">Please List All of Your Current Pets</legend>
        <div className="space-y-4">
          {petFields.map((field, index) => (
            <div key={field.id} className="grid grid-cols-1 md:grid-cols-7 gap-2 items-end bg-gray-50 p-4 rounded-lg">
              <div>
                <label className={labelClasses}>Dog/Cat</label>
                <input className={inputClasses} {...register(`pets.${index}.type` as const)} />
              </div>
              <div>
                <label className={labelClasses}>Breed</label>
                <input className={inputClasses} {...register(`pets.${index}.breed` as const)} />
              </div>
              <div>
                <label className={labelClasses}>Name</label>
                <input className={inputClasses} {...register(`pets.${index}.name` as const)} />
              </div>
              <div>
                <label className={labelClasses}>Age</label>
                <input className={inputClasses} {...register(`pets.${index}.age` as const)} />
              </div>
              <div>
                <label className={labelClasses}>M/F</label>
                <input className={inputClasses} {...register(`pets.${index}.sex` as const)} />
              </div>
              <div>
                <label className={labelClasses}>Altered?</label>
                <input className={inputClasses} {...register(`pets.${index}.altered` as const)} />
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className={labelClasses}>How long owned?</label>
                  <input className={inputClasses} {...register(`pets.${index}.howLongOwned` as const)} />
                </div>
                {petFields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePet(index)}
                    className="text-red-600 hover:text-red-800 pb-2"
                    aria-label="Remove pet"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => appendPet(defaultPetRow)}
          className="mt-3 text-sm font-medium text-[#5f8576] hover:text-[#0a7372]"
        >
          + Add another pet
        </button>
        <p className="text-sm text-gray-500 italic mt-2">
          We recommend all other animals in your home be up to date on vaccinations. If you have any concerns, please
          discuss the idea of fostering animals with your veterinarian.
        </p>

        <div className={`${fieldWrapClasses} mt-4`}>
          <label className={labelClasses} htmlFor="primaryCaretaker">
            Who will be the primary caretaker of your foster dog(s)?
          </label>
          <input id="primaryCaretaker" className={inputClasses} {...register('primaryCaretaker')} />
        </div>
      </fieldset>

      {/* Yard */}
      <fieldset>
        <legend className="text-xl font-semibold text-gray-800 mb-4">Describe Your Yard</legend>
        <div className={fieldWrapClasses}>
          <div className="flex flex-wrap gap-4">
            {['No yard', 'Unfenced yard', 'Partially fenced yard', 'Completely fenced yard'].map((option) => (
              <label key={option} className="inline-flex items-center gap-2 text-gray-700">
                <input type="radio" value={option} {...register('yardType')} /> {option}
              </label>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="fenceHeight">
              Height of fence
            </label>
            <input id="fenceHeight" className={inputClasses} {...register('fenceHeight')} />
          </div>
          <div className={fieldWrapClasses}>
            <span className={labelClasses}>Made of?</span>
            <div className="flex flex-wrap gap-4">
              {['Wood', 'Chain link', 'Brick', 'Other'].map((option) => (
                <label key={option} className="inline-flex items-center gap-2 text-gray-700">
                  <input type="radio" value={option} {...register('fenceMaterial')} /> {option}
                </label>
              ))}
            </div>
            <input className={`${inputClasses} mt-2`} placeholder="If other" {...register('fenceMaterialOther')} />
          </div>
        </div>
        <p className="text-sm text-gray-500 italic">
          Mutt Mamas foster dogs and puppies must be supervised at all times when outdoors.
        </p>
        <div className={fieldWrapClasses}>
          <span className={labelClasses}>
            If you don&apos;t have a fenced in yard, do you agree to keep your foster dog on leash at all times outside?
          </span>
          <div className="flex gap-6">
            <label className="inline-flex items-center gap-2 text-gray-700">
              <input type="radio" value="yes" {...register('agreeLeash')} /> Yes
            </label>
            <label className="inline-flex items-center gap-2 text-gray-700">
              <input type="radio" value="no" {...register('agreeLeash')} /> No
            </label>
          </div>
        </div>
      </fieldset>

      {/* Experience */}
      <fieldset>
        <legend className="text-xl font-semibold text-gray-800 mb-4">
          How Would You Describe Your Level of Experience with Dogs?
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {EXPERIENCE_OPTIONS.map((option) => (
            <label key={option} className="inline-flex items-start gap-2 text-gray-700">
              <input type="checkbox" className="mt-1" value={option} {...register('experience')} />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className={`${fieldWrapClasses} mt-3`}>
          <label className={labelClasses} htmlFor="previousFosterDescribe">
            If you have previous foster/rescue experience, please describe
          </label>
          <textarea
            id="previousFosterDescribe"
            className={inputClasses}
            rows={2}
            {...register('previousFosterDescribe')}
          />
        </div>

        <div className={fieldWrapClasses}>
          <span className={labelClasses}>Do you have experience with:</span>
          <div className="flex flex-wrap gap-4">
            {['small dogs', 'medium dogs', 'large dogs'].map((option) => (
              <label key={option} className="inline-flex items-center gap-2 text-gray-700">
                <input type="checkbox" value={option} {...register('experienceSizes')} /> {option}
              </label>
            ))}
          </div>
        </div>

        <div className={fieldWrapClasses}>
          <label className={labelClasses} htmlFor="specificBreeds">
            List experience with specific breeds
          </label>
          <input id="specificBreeds" className={inputClasses} {...register('specificBreeds')} />
        </div>
      </fieldset>

      {/* Interested types */}
      <fieldset>
        <legend className="text-xl font-semibold text-gray-800 mb-4">
          What Types of Dog Are You Interested in Fostering?
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {INTERESTED_TYPE_OPTIONS.map((option) => (
            <label key={option} className="inline-flex items-start gap-2 text-gray-700">
              <input type="checkbox" className="mt-1" value={option} {...register('interestedTypes')} />
              <span>{option}</span>
            </label>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="hoursAlone">
              Hours during the AVERAGE day this dog will spend WITHOUT a human
            </label>
            <input id="hoursAlone" className={inputClasses} {...register('hoursAlone')} />
          </div>
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="whereHome">
              Where will this dog be when someone is home?
            </label>
            <input id="whereHome" className={inputClasses} {...register('whereHome')} />
          </div>
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="whereAlone">
              Where will this dog be when alone?
            </label>
            <input id="whereAlone" className={inputClasses} {...register('whereAlone')} />
          </div>
        </div>
        <div className={fieldWrapClasses}>
          <label className={labelClasses} htmlFor="whereSleep">
            Where will this dog sleep at night?
          </label>
          <input id="whereSleep" className={inputClasses} {...register('whereSleep')} />
        </div>
      </fieldset>

      {/* Unprepared for */}
      <fieldset>
        <legend className="text-xl font-semibold text-gray-800 mb-4">
          What Situations Do You Feel Unprepared For?
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {UNPREPARED_OPTIONS.map((option) => (
            <label key={option} className="inline-flex items-start gap-2 text-gray-700">
              <input type="checkbox" className="mt-1" value={option} {...register('unpreparedFor')} />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Preferences */}
      <fieldset>
        <legend className="text-xl font-semibold text-gray-800 mb-4">Do You Have a Preference On:</legend>
        <div className="space-y-4">
          <div>
            <span className={labelClasses}>Size?</span>
            <div className="flex flex-wrap gap-4 items-center">
              <label className="inline-flex items-center gap-2 text-gray-700">
                <input type="radio" value="yes" {...register('sizePreference')} /> Yes
              </label>
              <label className="inline-flex items-center gap-2 text-gray-700">
                <input type="radio" value="no" {...register('sizePreference')} /> No
              </label>
              <input
                className={`${inputClasses} flex-1`}
                placeholder="Size preference"
                {...register('sizePreferenceDetail')}
              />
            </div>
          </div>
          <div>
            <span className={labelClasses}>Breed?</span>
            <div className="flex flex-wrap gap-4 items-center">
              <label className="inline-flex items-center gap-2 text-gray-700">
                <input type="radio" value="yes" {...register('breedPreference')} /> Yes
              </label>
              <label className="inline-flex items-center gap-2 text-gray-700">
                <input type="radio" value="no" {...register('breedPreference')} /> No
              </label>
              <input
                className={`${inputClasses} flex-1`}
                placeholder="Breed preference"
                {...register('breedPreferenceDetail')}
              />
            </div>
          </div>
          <div>
            <span className={labelClasses}>Age?</span>
            <div className="flex flex-wrap gap-4 items-center">
              <label className="inline-flex items-center gap-2 text-gray-700">
                <input type="radio" value="yes" {...register('agePreference')} /> Yes
              </label>
              <label className="inline-flex items-center gap-2 text-gray-700">
                <input type="radio" value="no" {...register('agePreference')} /> No
              </label>
              <input
                className={`${inputClasses} flex-1`}
                placeholder="Age preference"
                {...register('agePreferenceDetail')}
              />
            </div>
          </div>
        </div>

        <div className={`${fieldWrapClasses} mt-4`}>
          <label className={labelClasses} htmlFor="anythingElse">
            Please tell us anything else you would like us to know to help match you up with the right foster animal
          </label>
          <textarea id="anythingElse" className={inputClasses} rows={3} {...register('anythingElse')} />
        </div>
      </fieldset>

      {/* Agreement */}
      <fieldset>
        <legend className="text-xl font-semibold text-gray-800 mb-4">Agreement</legend>
        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600 space-y-3 max-h-64 overflow-y-auto mb-4">
          <p>
            Mutt Mamas determines the criteria for fostering, decides which animals are eligible for foster care, and
            appoints foster caregivers from a pre-approved list of trained providers. Mutt Mamas foster care volunteers
            may always refuse any specific request for any reason. Mutt Mamas staff will inform you of any medical
            treatments to be administered, the anticipated length of the foster-care period, the objectives of each
            particular placement, and any other restrictions or expectations we may have. Mutt Mamas will supply food
            and medical treatments as long as you foster.
          </p>
          <p>
            You will be expected to keep the animal safe and secure, return it to Mutt Mamas when requested to do so,
            and not promise the animal to anyone, or imply that you have the authority to approve a potential adoption.
            Mutt Mamas retains ownership of all animals placed in foster care, and will make all decisions regarding the
            adoption &amp; placement of the animals fostered.
          </p>
          <p>
            Mutt Mamas cannot accommodate people fulfilling court-ordered community service within the Foster Care
            Program. Mutt Mamas does not accept into this program those convicted of violent crimes or crimes involving
            animal cruelty or neglect.
          </p>
          <p>
            The foster parent is responsible for transporting the animals to and from Mutt Mamas or our vet for
            veterinary appointments, surgery, behavior evaluations, vaccinations, etc. Upon the return of your foster
            animal to Mutt Mamas you will be required to fill out a brief questionnaire about your foster animal&apos;s
            behavior and personality.
          </p>
          <p>
            I have read and understand the statements above. I certify that all the information contained in this
            application is true and correct. I understand that although Mutt Mamas takes reasonable care to screen
            animals for foster care placement, it makes no guarantees relating to the animals&apos; health, behavior or
            actions. I understand that I receive foster care animals at my own risk and can decline to accept any animal
            for which Mutt Mamas has asked me to provide care. I acknowledge that Mutt Mamas is not responsible for any
            property damage or personal injury suffered by me, members of my household, including my own animals, or any
            third parties during a foster placement, and I assume liability to provide adequate controls to prevent such
            damage or injury.
          </p>
        </div>

        <label className="flex items-start gap-2 mb-4">
          <input
            type="checkbox"
            className="mt-1"
            {...register('agreementAccepted', { required: 'You must agree to the terms to submit' })}
          />
          <span className="text-gray-700">
            I have read and understand the statements above and certify that all the information contained in this
            application is true and correct. *
          </span>
        </label>
        {errors.agreementAccepted && <p className="text-sm text-red-600 mb-4">{errors.agreementAccepted.message}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="signature">
              Signature (type your full name) *
            </label>
            <input
              id="signature"
              className={inputClasses}
              {...register('signature', { required: 'Signature is required' })}
            />
            {errors.signature && <p className="text-sm text-red-600 mt-1">{errors.signature.message}</p>}
          </div>
          <div className={fieldWrapClasses}>
            <label className={labelClasses} htmlFor="signatureDate">
              Date *
            </label>
            <input
              id="signatureDate"
              type="date"
              className={inputClasses}
              {...register('signatureDate', { required: 'Date is required' })}
            />
            {errors.signatureDate && <p className="text-sm text-red-600 mt-1">{errors.signatureDate.message}</p>}
          </div>
        </div>
      </fieldset>

      <div className="text-center">
        {submitState === 'error' && (
          <p className="text-red-600 mb-4">
            {errorMessage} If this keeps happening, please email us directly at{' '}
            <a href={`mailto:${EMAIL_URL}`} className="underline font-semibold">
              {EMAIL_URL}
            </a>
            .
          </p>
        )}
        <button
          type="submit"
          disabled={submitState === 'submitting'}
          className="inline-block text-white bg-[#9d4837] hover:bg-[#7e3a2c] focus:ring-4 focus:ring-[#b16d5f] font-medium rounded-lg text-lg px-8 py-3 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitState === 'submitting' ? 'Sending…' : 'Submit Application'}
        </button>
        <p className="text-sm text-gray-500 mt-3">Submitting will email your application directly to {EMAIL_URL}.</p>
      </div>
    </form>
  );
}

export default FosterApplicationForm;
