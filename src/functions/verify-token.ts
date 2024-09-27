

export default async function verifyToken(token:string): Promise<boolean> {
  if(!token) return false

  try {
    
    // jwtVerify(token, new TextEncoder().encode(''))
    return true
  } catch (error) {
    return false
  }
}