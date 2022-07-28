export const convertToSlug = (text:string) => {
  let convertedText = text.toLowerCase()
                          .replace(/&/g, 'and')
                          .replace(/ /g, '-')
                          .replace(/[^\w-]+/g, '');

  if(convertedText.charAt(0) === '-') {
    convertedText = convertedText.substring(1)
  }

  return convertedText
}