import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const report = await request.json();
  
  // Log CSP violations in development
  if (process.env.NODE_ENV === 'development') {
    console.warn('CSP Violation:', report);
  }
  
  // In production, you might want to:
  // 1. Send to your logging service
  // 2. Store in your database
  // 3. Alert your monitoring system
  
  return NextResponse.json({ status: 'ok' });
}
