import { EMAIL_URL, MAILGUN_API_BASE, MAILGUN_DOMAIN, MAILGUN_FROM_ADDRESS } from './constants';
import type { FosterApplicationFormData } from '../types/FosterApplication';

function formatList(values: string[]): string {
  return values.length > 0 ? values.map((v) => `- ${v}`).join('\n') : '- None selected';
}

function buildEmailBody(data: FosterApplicationFormData): string {
  const petLines = data.pets
    .filter((pet) => pet.type || pet.breed || pet.name)
    .map(
      (pet, i) =>
        `  ${i + 1}. Type: ${pet.type || '-'}, Breed: ${pet.breed || '-'}, Name: ${pet.name || '-'}, Age: ${
          pet.age || '-'
        }, Sex: ${pet.sex || '-'}, Altered: ${pet.altered || '-'}, Owned: ${pet.howLongOwned || '-'}`,
    )
    .join('\n');

  return `DOG FOSTER CARE APPLICATION

PERSONAL INFORMATION
Name: ${data.name}
Age: ${data.age}
Date: ${data.date}
Address: ${data.address}
City: ${data.city}
State: ${data.state}
Zip: ${data.zip}
Home phone: ${data.homePhone}
Work/Cell phone: ${data.cellPhone}
Email: ${data.email}
How did you hear about us?: ${data.howHeard}

HOUSEHOLD INFORMATION
Adults over 21 (including self): ${data.numAdults} (Ages: ${data.adultAges})
Children under 21: ${data.numChildren} (Ages: ${data.childAges})
Allergies in household: ${data.hasAllergies}${data.hasAllergies === 'yes' ? ` (Who: ${data.allergyWho})` : ''}
Home type: ${data.homeType}
Own/Rent/Lease: ${data.residenceStatus}
Time at address: ${data.lengthAtAddress}
Pet restrictions: ${data.hasPetRestrictions}${
    data.hasPetRestrictions === 'yes' ? ` (Details: ${data.petRestrictionsDetail})` : ''
  }
Landlord name: ${data.landlordName}
Landlord phone: ${data.landlordPhone}

CURRENT PETS
${petLines || '  None listed'}

Primary caretaker of foster dog(s): ${data.primaryCaretaker}

YARD
Yard: ${data.yardType}
Fence height: ${data.fenceHeight}
Fence material: ${data.fenceMaterial}${data.fenceMaterial === 'Other' ? ` (${data.fenceMaterialOther})` : ''}
Agrees to leash if no fenced yard: ${data.agreeLeash}

EXPERIENCE WITH DOGS
${formatList(data.experience)}
Previous foster/rescue experience details: ${data.previousFosterDescribe}
Experience with sizes:
${formatList(data.experienceSizes)}
Specific breed experience: ${data.specificBreeds}

TYPES OF DOG INTERESTED IN FOSTERING
${formatList(data.interestedTypes)}

Hours dog will spend WITHOUT a human (average day): ${data.hoursAlone}
Where dog will be when someone is home: ${data.whereHome}
Where dog will be when alone: ${data.whereAlone}
Where dog will sleep at night: ${data.whereSleep}

SITUATIONS APPLICANT FEELS UNPREPARED FOR
${formatList(data.unpreparedFor)}

PREFERENCES
Size preference: ${data.sizePreference}${data.sizePreference === 'yes' ? ` (${data.sizePreferenceDetail})` : ''}
Breed preference: ${data.breedPreference}${data.breedPreference === 'yes' ? ` (${data.breedPreferenceDetail})` : ''}
Age preference: ${data.agePreference}${data.agePreference === 'yes' ? ` (${data.agePreferenceDetail})` : ''}

ANYTHING ELSE
${data.anythingElse || '-'}

AGREEMENT
I have read and understand the foster care terms and certify that all information in this application is true and correct: ${
    data.agreementAccepted ? 'Yes' : 'No'
  }
Signature: ${data.signature}
Date: ${data.signatureDate}
`;
}

export async function sendFosterApplicationEmail(data: FosterApplicationFormData): Promise<void> {
  const sendingKey = process.env.MG_SENDING_KEY;
  if (!sendingKey) {
    throw new Error('Mailgun is not configured (missing MG_SENDING_KEY).');
  }

  const body = new URLSearchParams();
  body.append('from', MAILGUN_FROM_ADDRESS);
  body.append('to', EMAIL_URL);
  body.append('subject', `Foster Application - ${data.name}`);
  body.append('text', buildEmailBody(data));
  if (data.email) {
    body.append('h:Reply-To', data.email);
  }

  const auth = Buffer.from(`api:${sendingKey}`).toString('base64');
  const response = await fetch(`${MAILGUN_API_BASE}/${MAILGUN_DOMAIN}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Mailgun request failed (${response.status}): ${errorText}`);
  }
}
