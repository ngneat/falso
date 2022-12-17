export function isNil<T>(
  value: T | null | undefined
): value is null | undefined {
  return value === null || typeof value === 'undefined';
}

/**
 * Validates the Australian Business Number (ABN)
 * https://abr.business.gov.au/Help/AbnFormat
 * @param abnNumber the abn number to verify
 * @returns true if the abn is valid otherwise false
 */
export const isValidAbn = (abnNumber: string) => {
  const abn = abnNumber.replace(/ /g, '');
  if (abn.length !== 11) return false;

  const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  let weightedSum = 0;

  for (let i = 0; i < weights.length; i++) {
    weightedSum += (Number(String(abn[i])) - (i == 0 ? 1 : 0)) * weights[i];
  }
  return weightedSum % 89 == 0;
};
