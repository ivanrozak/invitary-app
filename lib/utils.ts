// lib/utils.ts

export function addCommas(x: any) {
  if (x === undefined) return
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const copyToClipboard = async (text: string) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    await navigator.clipboard.writeText(text)
  } else {
    // Fallback if the Clipboard API is not supported
    console.error('Clipboard API not supported')
    // Implement your fallback mechanism here
  }
}
