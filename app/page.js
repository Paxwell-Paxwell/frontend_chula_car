"use client";
import { Stack, dialogClasses } from "@mui/material";
import { Carcard } from "@/components";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";


export default function Home() {
  
  const [carData, setCarData] = useState([]);
  useEffect(() => {
    const initNewCar = (new Array(6).fill(0)).map(() => {
      return {
        name: "Car" + faker.number.int(9)+faker.number.int(9),
        station: faker.number.int(5),
        people: faker.number.int(30),
        maxseat: 15,
      };
    }
    )
    setCarData(initNewCar);
  }, [])
  
  useEffect(() => {
    const test = setInterval(() => {
      const newCarData = (new Array(6).fill(0)).map(() => {
        return {
          name: "Car" + faker.number.int(9)+faker.number.int(9),
          station: faker.number.int(5),
          people: faker.number.int(30),
          maxseat: 15,
        };
      })
      setCarData(newCarData);
    }, 5000);
    return () => clearInterval(test);
  }, []);
  return (
    <>
      <Stack spacing={2}>
        {
          
          carData?.sort((a,b)=> a.station-b.station).map((car, index) => {
            return (
              <Carcard
                key={index}
                nameOfCar={car.name}
                station={car.station}
                people={car.people}
                maxseat={car.maxseat}
              />
            );
          }
          )
        }
          
      </Stack>
    </>
  );
}
