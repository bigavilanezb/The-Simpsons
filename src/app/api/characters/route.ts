import { NextResponse } from 'next/server'

// GET /api/characters
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page') || '1'
  
  const apiUrl = process.env.SIMPSONS_API_URL
  
  if (!apiUrl) {
    return NextResponse.json(
      { error: 'API URL not configured' },
      { status: 500 }
    )
  }
  
  try {
    const res = await fetch(`${apiUrl}/characters?page=${page}`, {
      next: { revalidate: 3600 }, // Cachea 1 hora
    })
    
    if (!res.ok) {
      throw new Error(`API responded with status ${res.status}`)
    }
    
    const data = await res.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching characters:', error)
    return NextResponse.json(
      { error: 'Failed to fetch characters' },
      { status: 500 }
    )
  }
}