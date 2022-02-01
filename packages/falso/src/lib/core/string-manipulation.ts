export function replaceAccentedChars(text: string): string {
  return text
    .replace(/[āàáâãäå]/g, 'a')
    .replace(/[ĀÀÁÂÃÄÅ]/g, 'A')
    .replace(/[æ]/g, 'ae')
    .replace(/[Æ]/g, 'AE')
    .replace(/[çčć]/g, 'c')
    .replace(/[ÇČĆ]/g, 'C')
    .replace(/[ð]/g, 'd')
    .replace(/[Ð]/g, 'D')
    .replace(/[ēèéêěëė]/g, 'e')
    .replace(/[ĒÈÉÊĚËĖ]/g, 'E')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[ÌÍÎÏ]/g, 'I')
    .replace(/[ł]/g, 'l')
    .replace(/[Ł]/g, 'L')
    .replace(/[ñń]/g, 'n')
    .replace(/[ÑŃ]/g, 'N')
    .replace(/[ōøòóôõöő]/g, 'o')
    .replace(/[ŌØÒÓÔÕÖŐ]/g, 'O')
    .replace(/[œ]/g, 'oe')
    .replace(/[Œ]/g, 'OE')
    .replace(/[ř]/g, 'r')
    .replace(/[Ř]/g, 'R')
    .replace(/[š]/g, 's')
    .replace(/[Š]/g, 'S')
    .replace(/[ß]/g, 'ss')
    .replace(/[Þ]/g, 'th')
    .replace(/[þ]/g, 'TH')
    .replace(/[ùúûūü]/g, 'u')
    .replace(/[ÙÚÛŪÜ]/g, 'U')
    .replace(/[ýÿ]/g, 'y')
    .replace(/[ÝŸ]/g, 'Y')
    .replace(/[žż]/g, 'z')
    .replace(/[ŽŻ]/g, 'Z');
}

export function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
