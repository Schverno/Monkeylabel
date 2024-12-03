'use client'
import { useEffect, useRef, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PageWrapper } from '@/app/components/page-wrapper';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '@/app/styles/work.module.scss'
import CardWork from '../../components/CardWork';

type Category = 'DOCUMENTARY' | 'COMMERCIALS' | 'MUSIC';


const UpdatePrompt = () => {
  const videosDOCUMENTARY = [

    {
      index: 0,
      src: "/mainVideos/gamechangers.mp4",
      poster: "/posters/0.webp",
      btnText: "Game Changers / Apple TV",
      Titulo: "Game Changers",
      Label: "Apple TV",
      linkVideoLargo: "https://player.vimeo.com/video/1015301576",
      linkcorto: "/mainVideos/gamechangers.mp4",
      credits: [
        { title: "Client", value: "Apple TV / MLS" },
        { title: "Production Company", value: "Monkey Label Films" },
        { title: "Director", value: "Juan Irigoyen" },
        { title: "Director Assistant", value: "Rafael Urbina" },
        { title: "Executive Producer", value: "Alexis Estiz / Daniela Martinez" },
        { title: "Producer", value: "Guli Corradetti" },
        { title: "DOP", value: "Gerald Lee" },
        { title: "Camera", value: "Marco Perreta" },
        { title: "Sound", value: "Ariel Novo Curiel" },
        { title: "Post Production", value: "Monkey Label Films" },
        { title: "Editor", value: "Daniela Benedetti" },
        { title: "Editor", value: "Denise Umaschi" },
        { title: "Editor", value: "Andrea Usher" },
        { title: "Editor", value: "Tomas Dantonio" },
        { title: "Editor", value: "Agostina Raffa" },
        { title: "Assistant Editor", value: "Belen Risso Patron" },
        { title: "Colourist", value: "Juan Celestino" },
        { title: "Sound Design", value: "Guillermo Quintana / Santiago Pafundi" },
      ],
    },
    {
      index: 1,
      src: "/mainVideos/greenland.mp4",
      poster: "/posters/1.webp",
      btnText: "Greenland / ESPN",
      Titulo: "Greenland",
      Label: "ESPN",
      linkVideoLargo: "https://player.vimeo.com/video/1015304667",
      linkcorto: "/mainVideos/greenland.mp4",
      credits: [
        { title: "Client", value: "ESPN+ / ESPN Deportes" },
        { title: "Production Company", value: "ESPN Originals" },
        { title: "Executive Producer", value: "Edgardo Mattei" },
        { title: "Producer", value: "Vilma Obando" },
        { title: "DOP", value: "Juan Irigoyen (Monkey Label) / Gerald Lee" },
        { title: "1st AD", value: "Rafael Urbina" },
        { title: "Sound", value: "Carlos Marcellan" },
        { title: "Data Manager", value: "Ruben Gallego" },
        { title: "Post Production", value: "Monkey Label Films" },
        { title: "Editor", value: "Daniela Benedetti" },
        { title: "Assistant Editor", value: "Belen Risso Patron" },
        { title: "Colourist", value: "Juan Celestino" },
        { title: "Sound Design", value: "Pafundi / Quintana" },
        { title: "Equipment", value: "HD House" },
      ],
    },
    {
      index: 2,
      src: "/mainVideos/valeria.mp4",
      poster: "/posters/1.webp",
      btnText: "Valeria Mazza / Paramount+",
      Titulo: "Valeria Mazza",
      Label: "Paramount+",
      linkVideoLargo: "https://player.vimeo.com/video/1015322584",
      linkcorto: "/mainVideos/valeria.mp4",
      credits: [
        { title: "Client", value: "Paramount+" },
        { title: "Production Company", value: "100 Bares" },
        { title: "Director", value: "Juan Irigoyen / Martin Fradkin (Monkey Label)" },
        { title: "Executive Producer", value: "Muriel Cabeza / Daniela Martinez (Monkey Label)" },
        { title: "Producer", value: "Natasha Gurfinkel" },
        { title: "DOP", value: "Conrado Taina" },
        { title: "Camera", value: "Armin Marchesini Wehmuller" },
        { title: "Sound", value: "Carlos Marcellan" },
        { title: "Editor", value: "Daniela Benedetti" },
        { title: "Assistant Editor", value: "Belen Risso Patron" },
        { title: "Colourist", value: "Juan Celestino" },
        { title: "Sound Design", value: "Guillermo Quintana / Santiago Pafundi" },
      ],
    },
    {
      index: 3,
      src: "/mainVideos/mdf.mp4",
      poster: "/posters/4.webp",
      btnText: "Misterios del Fútbol / FIFA+",
      Titulo: "Misterios del Fútbol",
      Label: "FIFA+",
      linkVideoLargo: "https://player.vimeo.com/video/1015334680",
      linkcorto: "/mainVideos/mdf.mp4",
      credits: [
        { title: "Client", value: "FIFA+" },
        { title: "Production Company", value: "Monkey Label Films" },
        { title: "Director", value: "Juan Irigoyen" },
        { title: "Executive Producer", value: "Alfredo Montes de Oca / Juan Castro" },
        { title: "Producer", value: "Carlos Marcellan" },
        { title: "Line Producer", value: "Joaquin Garcia" },
        { title: "Talent", value: "Diego Ripoll" },
        { title: "DOP", value: "Nicolas Gorla" },
        { title: "Gaffer", value: "Juan Mendoza" },
        { title: "Art Director", value: "Denise Fritzler" },
        { title: "Camera", value: "Conrado Taina" },
        { title: "1st AD", value: "Santiago Burgos" },
        { title: "Post Production", value: "Monkey Label Films" },
        { title: "Editor", value: "Daniela Benedetti" },
        { title: "Assistant Editor", value: "Belen Risso Patron" },
        { title: "Colourist", value: "Juan Celestino" },
        { title: "Sound Design", value: "Guillermo Quintana / Santiago Pafundi" },
      ],
    },
    {
      index: 4,
      src: "/mainVideos/touching.mp4",
      poster: "/posters/8.webp",
      btnText: "Rauw Alejandro (BACKSTAGE TOUCHING THE SKY)",
      Titulo: "(Backstage Touching the Sky)",
      Label: "Rauw Alejandro",
      linkVideoLargo: "https://player.vimeo.com/video/1015300321",
      linkcorto: "/mainVideos/touching.mp4",
      credits: [
        { title: "Artist", value: "Rauw Alejandro" },
        { title: "Director", value: "Marco Perreta" },
        { title: "Producer", value: "Daniela Martinez / Guli Corradetti (Monkey Label)" },
        { title: "DOP", value: "Martin Fradkin / Juan Irigoyen (Monkey Label)" },
        { title: "Sound", value: "Carlos Marcellan (Monkey Label)" },
        { title: "Editor", value: "Andrea Usher" },
        { title: "Colourist", value: "Isaias Bovio" },
      ],
    },
    {
      index: 5,
      src: "/mainVideos/ultimoTrenParis.mp4",
      poster: "/posters/0.webp",
      btnText: "Último Tren a Paris",
      Titulo: "Último Tren a Paris",
      Label: "Vimeo",
      linkVideoLargo: "https://vimeo.com/1015696537",
      linkcorto: "https://vimeo.com/1015696537",  // linkcorto igual al linkVideoLargo
      credits: [
        { title: "Client", value: "ESPN+ / ESPN Deportes" },
        { title: "Production Company", value: "ESPN Originals" },
        { title: "Executive Producer", value: "Edgardo Mattei" },
        { title: "Producer", value: "Vilma Obando / Diego Tissot" },
        { title: "DOP", value: "Juan Irigoyen (Monkey Label) / Gerald Lee" },
        { title: "Sound", value: "Carlos Marcellan" },
        { title: "Data Manager", value: "Daniela Benedetti" },
        { title: "Post Production", value: "Monkey Label Films" },
        { title: "Editor", value: "Daniela Benedetti" },
        { title: "Editor", value: "Ariel Lepe" },
        { title: "Editor", value: "Luciana Sternberg" },
        { title: "Assistant Editor", value: "Belen Risso Patron" },
        { title: "Colourist", value: "Juan Celestino" },
        { title: "Sound Design", value: "Pafundi / Quintana" },
        { title: "Equipment", value: "HD House" },
      ],
    },
    {
      index: 6,
      src: "/mainVideos/beplaying.mp4",
      poster: "/posters/1.webp",
      btnText: "Beplaying",
      Titulo: "Beplaying",
      Label: "Vimeo",
      linkVideoLargo: "https://vimeo.com/1015697765",
      linkcorto: "https://vimeo.com/1015697765",  // linkcorto igual al linkVideoLargo
      credits: [
        { title: "Production Company", value: "Bourke" },
        { title: "Director", value: "Martin Fradkin (Monkey Label)" },
        { title: "Executive Producer", value: "Rodolfo Lamboglia / Tomas Muñoz" },
        { title: "Producer", value: "Guli Corradetti" },
        { title: "DOP", value: "Gerald Lee / Juan Irigoyen" },
        { title: "Post Production", value: "Bourke" },
        { title: "Editor", value: "Pablo Caceres Medina" },
        { title: "Colourist", value: "Juan Celestino" },
        { title: "Equipment", value: "HD House" },
      ],
    },
    {
      index: 7,
      src: "/mainVideos/inHerShoes.mp4",
      poster: "/posters/2.webp",
      btnText: "In Her Shoes",
      Titulo: "In Her Shoes",
      Label: "Vimeo",
      linkVideoLargo: "https://vimeo.com/1015698133",
      linkcorto: "https://vimeo.com/1015698133",  // linkcorto igual al linkVideoLargo
      credits: [
        { title: "Client", value: "ESPN+ / ESPN Deportes" },
        { title: "Production Company", value: "ESPN Originals / Monkey Label Films" },
        { title: "Executive Producer", value: "Edgardo Mattei" },
        { title: "Producer", value: "Daniela Martinez / Natasha Gurfinkel" },
        { title: "DOP", value: "Juan Irigoyen (Monkey Label)" },
        { title: "Sound", value: "Carlos Marcellan" },
        { title: "Post Production", value: "Monkey Label Films" },
        { title: "Editor", value: "Daniela Benedetti" },
        { title: "Colourist", value: "Juan Celestino" },
        { title: "Sound Design", value: "Pafundi / Quintana" },
        { title: "Equipment", value: "Katpa" },
      ],
    },
    {
      index: 8,
      src: "/mainVideos/testigos.mp4",
      poster: "/posters/3.webp",
      btnText: "Testigos",
      Titulo: "Testigos",
      Label: "Vimeo",
      linkVideoLargo: "https://vimeo.com/1015698601",
      linkcorto: "https://vimeo.com/1015698601",  // linkcorto igual al linkVideoLargo
      credits: [
        { title: "Client", value: "ESPN+ / ESPN Deportes" },
        { title: "Production Company", value: "ESPN Originals" },
        { title: "Executive Producer", value: "Edgardo Mattei" },
        { title: "Producer", value: "Guli Corradetti" },
        { title: "DOP", value: "Juan Irigoyen (Monkey Label)" },
        { title: "Sound", value: "Carlos Marcellan" },
        { title: "Post Production", value: "Monkey Label Films" },
        { title: "Editor", value: "Ariel Lepe" },
        { title: "Colourist", value: "Juan Celestino" },
        { title: "Sound Design", value: "Pafundi / Quintana" },
        { title: "Equipment", value: "Katpa" },
      ],
    },
    {
      index: 9,
      src: "/mainVideos/ultimoTrenQatar.mp4",
      poster: "/posters/4.webp",
      btnText: "Último tren a Qatar",
      Titulo: "Último tren a Qatar",
      Label: "Vimeo",
      linkVideoLargo: "https://vimeo.com/1015698797",
      linkcorto: "https://vimeo.com/1015698797",  // linkcorto igual al linkVideoLargo
      credits: [
        { title: "Client", value: "ESPN+ / ESPN Deportes" },
        { title: "Production Company", value: "ESPN Originals" },
        { title: "Executive Producer", value: "Edgardo Mattei" },
        { title: "Producer", value: "Vilma Obando / Guli Corradetti" },
        { title: "DOP", value: "Juan Irigoyen (Monkey Label) / Gerald Lee" },
        { title: "Sound", value: "Carlos Marcellan" },
        { title: "Data Manager", value: "Mauricio Alonso" },
        { title: "Post Production", value: "Monkey Label Films" },
        { title: "Editor", value: "Daniela Benedetti" },
        { title: "Editor", value: "Ariel Lepe" },
        { title: "Assistant Editor", value: "Belen Risso Patron" },
        { title: "Colourist", value: "Juan Celestino" },
        { title: "Sound Design", value: "Pafundi / Quintana" },
        { title: "Equipment", value: "HD House" },
      ],
    },
    {
      index: 10,
      src: "/mainVideos/ultimoTrenTokio.mp4",
      poster: "/posters/5.webp",
      btnText: "Último tren a Tokio",
      Titulo: "Último tren a Tokio",
      Label: "Vimeo",
      linkVideoLargo: "https://vimeo.com/1015699753",
      linkcorto: "https://vimeo.com/1015699753",  // linkcorto igual al linkVideoLargo
      credits: [
        { title: "Client", value: "ESPN+ / ESPN Deportes" },
        { title: "Production Company", value: "ESPN Originals" },
        { title: "Executive Producer", value: "Edgardo Mattei" },
        { title: "Producer", value: "Vilma Obando / Guli Corradetti" },
        { title: "DOP", value: "Juan Irigoyen (Monkey Label) / Gerald Lee" },
        { title: "Sound", value: "Carlos Marcellan" },
        { title: "Data Manager", value: "Pablo Caceres" },
        { title: "Post Production", value: "Bourke" },
        { title: "Editor", value: "Pablo Caceres" },
        { title: "Colourist", value: "Juan Celestino" },
        { title: "Sound Design", value: "Pafundi / Quintana" },
        { title: "Equipment", value: "HD House" },
      ],
    },
    {
      index: 11,
      src: "/mainVideos/espnBucketList.mp4",
      poster: "/posters/6.webp",
      btnText: "The ESPN Bucket List",
      Titulo: "The ESPN Bucket List",
      Label: "Vimeo",
      linkVideoLargo: "https://vimeo.com/1015702725",
      linkcorto: "https://vimeo.com/1015702725",  // linkcorto igual al linkVideoLargo
      credits: [
        { title: "Client", value: "ESPN+ / ESPN Deportes" },
        { title: "Production Company", value: "ESPN Originals / Bourke" },
        { title: "Executive Producer", value: "Edgardo Mattei / Rodolfo Lamboglia" },
        { title: "Producer", value: "Guli Corradetti" },
        { title: "DOP", value: "Juan Irigoyen (Monkey Label) / Gerald Lee" },
        { title: "Sound", value: "Carlos Marcellan" },
        { title: "Data Manager", value: "Pablo Caceres" },
        { title: "Post Production", value: "Bourke" },
        { title: "Editor", value: "Pablo Caceres" },
        { title: "Colourist", value: "Juan Celestino" },
        { title: "Sound Design", value: "Pafundi / Quintana" },
        { title: "Equipment", value: "HD House" },
      ],
    },
  ];

  const videosCOMMERCIALS = [
    {
      index: 0,
      src: "/mainVideos/equino.mp4",
      poster: "/posters/5.webp",
      btnText: "Caballos / Monkey Label",
      Titulo: "Caballos",
      Label: "Monkey Label",
      linkVideoLargo: "https://player.vimeo.com/video/1015331358",
      linkcorto: "/mainVideos/equino.mp4",
      credits: [
        { title: "Client", value: "Lamar" },
        { title: "Production Company", value: "Monkey Label Films" },
        { title: "Director", value: "Juan Irigoyen" },
        { title: "Executive Producer", value: "Daniela Martinez" },
        { title: "Producer", value: "Daniela Martinez" },
        { title: "DOP", value: "Nicolas Gorla" },
        { title: "Sound", value: "Carlos Marcellan" },
        { title: "Post Production", value: "Monkey Label Films" },
        { title: "Editor", value: "Daniela Benedetti" },
        { title: "Colourist", value: "Juan Celestino" },
        { title: "Sound Design", value: "Pafundi / Quintana" },
        { title: "Equipment", value: "Katpa" },
      ],
    },
    {
      index: 1,
      src: "/mainVideos/bodog.mp4",
      poster: "/posters/6.webp",
      btnText: "Bodog / Monkey Label",
      Titulo: "Bodog",
      Label: "Monkey Label",
      linkVideoLargo: "https://player.vimeo.com/video/1015332882",
      linkcorto: "/mainVideos/bodog.mp4",
      credits: [
        { title: "Agency", value: "Pipol" },
        { title: "Client", value: "Bodog" },
        { title: "Production Company", value: "Monkey Label Films" },
        { title: "Director", value: "Juan Irigoyen" },
        { title: "Executive Producer", value: "Daniela Martinez" },
        { title: "Producer", value: "Carlos Marcellan" },
        { title: "DOP", value: "Nicolas Gorla" },
        { title: "Art Director", value: "Valentina Llorens" },
        { title: "Post Production", value: "Monkey Label Films" },
        { title: "Editor", value: "Daniela Benedetti" },
        { title: "Colourist", value: "Juan Celestino" },
        { title: "VFX", value: "Nicolas Agarzua" },
      ],
    },
    {
      index: 2,
      src: "/mainVideos/pibank.mp4",
      poster: "",
      btnText: "Pibank / Monkey Label - Family",
      Titulo: "Pibank",
      Label: "Monkey Label",
      linkVideoLargo: "https://vimeo.com/1015324735",
      linkcorto: "https://vimeo.com/1015324735",
      credits: [
        { title: "Agency", value: "Dentsu" },
        { title: "Client", value: "Pibank" },
        { title: "Production Company", value: "Monkey Label Films" },
        { title: "Director", value: "Juan Irigoyen / Martin Fradkin" },
        { title: "Director Assistant", value: "Jeronimo Toubes" },
        { title: "Executive Producer", value: "Alexis Estiz / Daniela Martinez / Martin Lapissonde" },
        { title: "Head of Production", value: "Catalina Ward" },
        { title: "Producer", value: "Carlos Marcellan" },
        { title: "Location Manager", value: "Nicanor Gonzales del Solar" },
        { title: "Casting", value: "Elencos y Elenquitos" },
        { title: "DOP", value: "Manu Bullrich" },
        { title: "Art Director", value: "Valentina Llorens" },
        { title: "Post Production", value: "Monkey Label Films" },
        { title: "Editor", value: "Daniela Benedetti" },
        { title: "Assistant Editor", value: "Belen Risso Patron" },
        { title: "Colourist", value: "Alejandra Lescano" },
        { title: "Sound Design", value: "Pickle Music" },
        { title: "VFX Supervisor", value: "Nicolas Agarzua (Opposite Visuals)" },
        { title: "VFX Supervisor", value: "Joaquin Romero (Opposite Visuals)" },
        { title: "Motion Graphics", value: "Alexia Miller Moscardini (Opposite Visuals)" },
        { title: "Compositing", value: "Nahuel Acevedo (Opposite Visuals)" },
      ],
    },
    {
      index: 3,
      src: "/mainVideos/baking.mp4",
      poster: "",
      btnText: "Pibank / Monkey Label - Baking",
      Titulo: "Baking",
      Label: "Monkey Label",
      linkVideoLargo: "https://vimeo.com/1015710267",
      linkcorto: "https://vimeo.com/1015710267",
      credits: [
        { title: "Agency", value: "Dentsu" },
        { title: "Client", value: "Pibank" },
        { title: "Production Company", value: "Monkey Label Films" },
        { title: "Director", value: "Juan Irigoyen / Martin Fradkin" },
        { title: "Director Assistant", value: "Jeronimo Toubes" },
        { title: "Executive Producer", value: "Alexis Estiz / Daniela Martinez / Martin Lapissonde" },
        { title: "Head of Production", value: "Catalina Ward" },
        { title: "Producer", value: "Carlos Marcellan" },
        { title: "Location Manager", value: "Nicanor Gonzales del Solar" },
        { title: "Casting", value: "Elencos y Elenquitos" },
        { title: "DOP", value: "Manu Bullrich" },
        { title: "Art Director", value: "Valentina Llorens" },
        { title: "Post Production", value: "Monkey Label Films" },
        { title: "Editor", value: "Daniela Benedetti" },
        { title: "Assistant Editor", value: "Belen Risso Patron" },
        { title: "Colourist", value: "Alejandra Lescano" },
        { title: "Sound Design", value: "Pickle Music" },
        { title: "VFX Supervisor", value: "Nicolas Agarzua (Opposite Visuals)" },
        { title: "VFX Supervisor", value: "Joaquin Romero (Opposite Visuals)" },
        { title: "Motion Graphics", value: "Alexia Miller Moscardini (Opposite Visuals)" },
        { title: "Compositing", value: "Nahuel Acevedo (Opposite Visuals)" },
      ],
    },
    {
      index: 4,
      src: "/mainVideos/dj.mp4",
      poster: "",
      btnText: "Pibank / Monkey Label - DJ",
      Titulo: "DJ",
      Label: "Monkey Label",
      linkVideoLargo: "https://vimeo.com/1015711450",
      linkcorto: "https://vimeo.com/1015711450",
      credits: [
        { title: "Agency", value: "Dentsu" },
        { title: "Client", value: "Pibank" },
        { title: "Production Company", value: "Monkey Label Films" },
        { title: "Director", value: "Juan Irigoyen / Martin Fradkin" },
        { title: "Director Assistant", value: "Jeronimo Toubes" },
        { title: "Executive Producer", value: "Alexis Estiz / Daniela Martinez / Martin Lapissonde" },
        { title: "Head of Production", value: "Catalina Ward" },
        { title: "Producer", value: "Carlos Marcellan" },
        { title: "Location Manager", value: "Nicanor Gonzales del Solar" },
        { title: "Casting", value: "Elencos y Elenquitos" },
        { title: "DOP", value: "Manu Bullrich" },
        { title: "Art Director", value: "Valentina Llorens" },
        { title: "Post Production", value: "Monkey Label Films" },
        { title: "Editor", value: "Daniela Benedetti" },
        { title: "Assistant Editor", value: "Belen Risso Patron" },
        { title: "Colourist", value: "Alejandra Lescano" },
        { title: "Sound Design", value: "Pickle Music" },
        { title: "VFX Supervisor", value: "Nicolas Agarzua (Opposite Visuals)" },
        { title: "VFX Supervisor", value: "Joaquin Romero (Opposite Visuals)" },
        { title: "Motion Graphics", value: "Alexia Miller Moscardini (Opposite Visuals)" },
        { title: "Compositing", value: "Nahuel Acevedo (Opposite Visuals)" },
      ],
    },
    {
      index: 5,
      src: "/mainVideos/garden.mp4",
      poster: "",
      btnText: "Pibank / Monkey Label - Garden",
      Titulo: "Garden",
      Label: "Monkey Label",
      linkVideoLargo: "https://vimeo.com/1015711984",
      linkcorto: "https://vimeo.com/1015711984",
      credits: [
        { title: "Agency", value: "Dentsu" },
        { title: "Client", value: "Pibank" },
        { title: "Production Company", value: "Monkey Label Films" },
        { title: "Director", value: "Juan Irigoyen / Martin Fradkin" },
        { title: "Director Assistant", value: "Jeronimo Toubes" },
        { title: "Executive Producer", value: "Alexis Estiz / Daniela Martinez / Martin Lapissonde" },
        { title: "Head of Production", value: "Catalina Ward" },
        { title: "Producer", value: "Carlos Marcellan" },
        { title: "Location Manager", value: "Nicanor Gonzales del Solar" },
        { title: "Casting", value: "Elencos y Elenquitos" },
        { title: "DOP", value: "Manu Bullrich" },
        { title: "Art Director", value: "Valentina Llorens" },
        { title: "Post Production", value: "Monkey Label Films" },
        { title: "Editor", value: "Daniela Benedetti" },
        { title: "Assistant Editor", value: "Belen Risso Patron" },
        { title: "Colourist", value: "Alejandra Lescano" },
        { title: "Sound Design", value: "Pickle Music" },
        { title: "VFX Supervisor", value: "Nicolas Agarzua (Opposite Visuals)" },
        { title: "VFX Supervisor", value: "Joaquin Romero (Opposite Visuals)" },
        { title: "Motion Graphics", value: "Alexia Miller Moscardini (Opposite Visuals)" },
        { title: "Compositing", value: "Nahuel Acevedo (Opposite Visuals)" },
      ],
    },
    {
      index: 6,
      src: "/mainVideos/fabercastell.mp4",
      poster: "",
      btnText: "Faber Castell",
      Titulo: "Faber Castell",
      Label: "",
      linkVideoLargo: "https://vimeo.com/1015705604",
      linkcorto: "https://vimeo.com/1015705604",
      credits: [
        { title: "Agency", value: "Distrito Arte" },
        { title: "Talent", value: "Damian Betular" },
        { title: "Client", value: "Faber Castell" },
        { title: "Production Company", value: "Monkey Label Films" },
        { title: "Director", value: "Juan Irigoyen" },
        { title: "Executive Producer", value: "Daniela Martinez" },
        { title: "Producer", value: "Carlos Marcellan" },
        { title: "DOP", value: "Nicolas Gorla" },
        { title: "Gaffer", value: "Juan Mendoza" },
        { title: "Art Director", value: "Valentina Llorens" },
        { title: "Post Production", value: "Monkey Label Films" },
        { title: "Editor", value: "Daniela Benedetti" },
        { title: "Colourist", value: "Juan Celestino" },
        { title: "VFX", value: "Nicolas Agarzua" },
      ],
    },
  ];

  const videosMUSIC = [
    {
      index: 0,
      idxMUSIC: 0,
      src: "/mainVideos/china.mp4",
      poster: "/posters/7.webp",
      btnText: "Ay Ay Ay China Suárez / Bourke",
      Titulo: "Ay Ay Ay China Suárez",
      Label: "Bourke",
      linkVideoLargo: "https://player.vimeo.com/video/1015330661",
      linkcorto: "/mainVideos/china.mp4",
      credits: [
        { title: "Artist", value: "China Suarez" },
        { title: "Production Company", value: "Bourke" },
        { title: "Director", value: "Martin Fradkin (Monkey Label)" },
        { title: "Executive Producer", value: "Rodolfo Lamboglia" },
        { title: "Producer", value: "Rocio Taboada" },
        { title: "DOP", value: "Gerald Lee / Juan Carlos Sauczuk" },
        { title: "Art Director", value: "Set Machine" },
        { title: "Post Production", value: "Bourke" },
        { title: "Editor", value: "Pablo Caceres Medina" },
        { title: "Colourist", value: "Juan Celestino" },
        { title: "Equipment", value: "HD House" },
      ],
    },
    {
      index: 1,
      idxMUSIC: 1,
      src: "/mainVideos/touching.mp4",
      poster: "/posters/8.webp",
      btnText: "Rauw Alejandro (BACKSTAGE TOUCHING THE SKY)",
      Titulo: "(Backstage Touching the Sky)",
      Label: "Rauw Alejandro",
      linkVideoLargo: "https://player.vimeo.com/video/1015300321",
      linkcorto: "/mainVideos/touching.mp4",
      credits: [
        { title: "Artist", value: "Rauw Alejandro" },
        { title: "Director", value: "Marco Perreta" },
        { title: "Producer", value: "Daniela Martinez / Guli Corradetti (Monkey Label)" },
        { title: "DOP", value: "Martin Fradkin / Juan Irigoyen (Monkey Label)" },
        { title: "Sound", value: "Carlos Marcellan (Monkey Label)" },
        { title: "Editor", value: "Andrea Usher" },
        { title: "Colourist", value: "Isaias Bovio" },
      ],
    },
  ];


  //DOCUMENTARY HEIGHT
  const containerWorkDivRef = useRef<HTMLDivElement | null>(null);
  const containerWorkRef = useRef<HTMLDivElement | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<Category>('DOCUMENTARY');
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && ['DOCUMENTARY', 'COMMERCIALS', 'MUSIC'].includes(category)) {
      setSelectedCategory(category as Category);
    } else {
      router.push('/info/work?category=DOCUMENTARY');
    }
  }, [searchParams, router]);


  return (
    <PageWrapper>
      <Suspense >
        <div className={styles.containerWork}
          ref={containerWorkRef}
        >

          <div
            className={styles.containerWorkDiv}
            ref={containerWorkDivRef}
          >
            <AnimatePresence >
              {selectedCategory === 'DOCUMENTARY' &&
                <motion.div
                  initial={{ opacity: 0, translateY: 50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  exit={{
                    opacity: 0, translateY: 0,
                    transition: {
                      ease: [0.76, 0, 0.24, 1],
                      duration: 0.5, // Duración más corta para el `exit`
                    },
                  }}
                  className={styles.containerVideos}
                >
                  {[...videosDOCUMENTARY].map((video, idxWork) => (
                    <motion.div
                      key={idxWork}
                      variants={{
                        hidden: {
                          opacity: 0,
                          scaleY: 0.7,
                          scaleX: 0.8,
                        },
                        translatePhase: {
                          opacity: 1,
                          scaleX: 1,
                          scaleY: 1,
                          transition: {
                            ease: [0.76, 0, 0.24, 1],
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                            duration: 1,
                            delay: idxWork * 0.22
                          }
                        },
                      }}
                      initial="hidden"
                      animate="translatePhase"
                      exit={{
                        opacity: 0,
                        scaleX: 0.9,
                        scaleY: 0.9,
                        translateY: -5,
                        transition: {
                          ease: [0.76, 0, 0.24, 1],
                          duration: 0.5,
                        }
                      }}
                      className={styles.containerVideosIN}
                    >
                      <div className={styles.video}>
                        <CardWork src={video.src} linkcorto={video.linkcorto} linkLargo={video.linkVideoLargo} btnText={video.btnText} poster={video.poster} key={idxWork} indexCardWork={video.index} videos={videosDOCUMENTARY} />
                      </div>
                      <div className={styles.videoText}>
                        <p>{video.btnText} </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              }
            </AnimatePresence>
          </div>

          <div className={styles.containerWorkDiv}>
            <AnimatePresence mode='wait'>
              {selectedCategory === 'COMMERCIALS' &&

                <motion.div
                  initial={{ opacity: 0, translateY: 50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  exit={{
                    opacity: 0, translateY: 0,
                    transition: {
                      ease: [0.76, 0, 0.24, 1],
                      duration: 0.5, // Duración más corta para el `exit`
                    },
                  }}
                  className={styles.containerVideos}
                >
                  {[...videosCOMMERCIALS].map((video, idxCOM) => (
                    <motion.div
                      key={idxCOM}
                      variants={{
                        hidden: {
                          opacity: 0,
                          scaleY: 0.7,
                          scaleX: 0.8,
                        },
                        translatePhase: {
                          opacity: 1,
                          scaleX: 1,
                          scaleY: 1,
                          transition: {
                            ease: [0.76, 0, 0.24, 1],
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                            duration: 1,
                            delay: idxCOM * 0.22
                          }
                        },
                      }}
                      initial="hidden"
                      animate="translatePhase"
                      exit={{
                        opacity: 0,
                        scaleX: 0.9,
                        scaleY: 0.9,
                        translateY: -5,
                        transition: {
                          ease: [0.76, 0, 0.24, 1],
                          duration: 0.5,
                        }
                      }}
                      className={styles.containerVideosIN}
                    >
                      <div className={styles.video}>
                        <CardWork src={video.src} linkcorto={video.linkcorto} linkLargo={video.linkVideoLargo} btnText={video.btnText} poster={video.poster} key={idxCOM} indexCardWork={video.index} videos={videosCOMMERCIALS} />
                      </div>
                      <div className={styles.videoText}>
                        <p>{video.btnText} </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              }
            </AnimatePresence>
          </div>

          <div className={styles.containerWorkDiv}>
            <AnimatePresence mode='wait'>
              {selectedCategory === 'MUSIC' &&

                <motion.div
                  initial={{ opacity: 0, translateY: 50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  exit={{
                    opacity: 0, translateY: 0,
                    transition: {
                      ease: [0.76, 0, 0.24, 1],
                      duration: 0.5, // Duración más corta para el `exit`
                    },
                  }}
                  className={styles.containerVideos}
                >
                  {[...videosMUSIC].map((video, idxMUSIC) => (
                    <motion.div
                      key={idxMUSIC}
                      variants={{
                        hidden: {
                          opacity: 0,
                          scaleY: 0.7,
                          scaleX: 0.8,
                        },
                        translatePhase: {
                          opacity: 1,
                          scaleX: 1,
                          scaleY: 1,
                          transition: {
                            ease: [0.76, 0, 0.24, 1],
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                            duration: 1,
                            delay: idxMUSIC * 0.22
                          }
                        },
                      }}
                      initial="hidden"
                      animate="translatePhase"
                      exit={{
                        opacity: 0,
                        scaleX: 0.9,
                        scaleY: 0.9,
                        translateY: -5,
                        transition: {
                          ease: [0.76, 0, 0.24, 1],
                          duration: 0.5,
                        }
                      }}
                      className={styles.containerVideosIN}
                    >
                      <div className={styles.video}>
                        <CardWork src={video.src} linkcorto={video.linkcorto} linkLargo={video.linkVideoLargo} btnText={video.btnText} poster={video.poster} key={video.idxMUSIC} indexCardWork={video.index} videos={videosMUSIC} />
                      </div>
                      <div className={styles.videoText}>
                        <p>{video.btnText} </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              }
            </AnimatePresence>
          </div>


        </div>
      </Suspense>

    </PageWrapper>
  );
}

const WorkPage = () => {
  return (
    <Suspense fallback={null}>
      <UpdatePrompt />
    </Suspense>
  )
}

export default WorkPage;
