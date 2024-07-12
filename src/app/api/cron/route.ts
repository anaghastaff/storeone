import { NextResponse } from 'next/server';

export async function GET() {
    
    const cron_url = process.env.CRON_URL;

    try{
        const response = await fetch(cron_url);
        if(response.ok){
            console.log(`Ping Successful @ ${new Date().toLocaleDateString()}`)
            return NextResponse.json({ ok: true }, {status:200});
        }
        return NextResponse.json({error:"server still down due to inactivity"}, {status:500})
        
    }
    catch(error){
        console.error(`ping error @ ${new Date().toLocaleDateString()}`, error)
        return NextResponse.json({error:"server still down due to inactivity"}, {status:500})
    }
  
}
