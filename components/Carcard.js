"use client";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { use, useEffect,useState } from 'react';
export default function BasicCard({ nameOfCar="Car name", station=0, people=0,maxseat=15}) {
  const [bgcolor,setBgColor] = useState('bg-green-400')
  const bgCardColor =()=>{
    const color = {green: 'bg-green-400',yellow: 'bg-yellow-400',orange: "bg-orange-400"}
    if(people <= maxseat )
    return color.green
    else if(people<= parseInt(maxseat*1.5))
    return color.yellow
    else return color.orange
  }
  useEffect(()=>{
    const refresh = setInterval(()=>{
      setBgColor(bgCardColor()) 
    },1000)
    return ()=>clearInterval(refresh)
  },[people])
    return (
    <Card sx={{ minWidth: 200 }} className={bgcolor} >
      <CardContent>
        <Typography variant="h5" component="div" align='center' className='mb-1'>
          {/* {(seat/maxseat*100).toFixed(2)}% */}
          {/* {bgcolor} */}
          {nameOfCar} 
        </Typography >
        <Typography className='text-base text-center' color="text.secondary">
           {station} -- station left
        </Typography>
        <Typography className='text-base text-center' color="text.secondary">
            {maxseat-people<0 ? 0:maxseat-people } -- seat left
        </Typography>
        <Typography className='text-base text-center' color="text.secondary">
            {people} -- people in car
        </Typography>
      </CardContent>
    </Card>
  );
}