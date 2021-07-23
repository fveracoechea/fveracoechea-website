export const flexCenter = () => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
} as const)


export const backgroundPattern = {
  backgroundImage: 'url("/images/squares.png")',
  backgroundRepeat: 'repeat',
  // backgroundAttachment: 'fixed',
};