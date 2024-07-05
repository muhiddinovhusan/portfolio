import spotify from '../assets/projects/spotify.png'
import crypto from '../assets/projects/crypto.png'
import country from '../assets/projects/country.png'
export const ABOUT = `Hello ! I'm Husan, an experienced frontend developer. I am currently 17 years old. I specialize in improving user experience and creating attractive, interactive web pages. Here you can find my best projects, tech skills and inspiration. I hope you like my work and will have the opportunity to cooperate with you.
`;

export const HERO =`I specialize in creating beautiful and functional websites.
Scroll down to view my work or contact me.`;

export const PROJECTS = [
    {
        title: 'Spotify Clone',
        image : spotify,
        description: `This website is clone of the Spotify
you can listen musics in this website and add musics 
to your favorite musics page and random music selection and etc
`,
        link: 'https://spotify-clone-ranl.vercel.app/',
        technologies : [  
            'React  ', 'Tailwind CSS'
        ],
         github : 'https://github.com/muhiddinovhusan/SpotifyClone'
    },
    {
        title: 'Country App',
        image : country,
        description: `This website about countries this website allows you to 
get some information about the countries

`,
        link: 'https://next-app-country.vercel.app',
        technologies : [  
            'NEXT ', 'Tailwind CSS', 'TypeScript'
        ],
         github : 'https://github.com/muhiddinovhusan/Next_APP'
    },
    {
        title: 'Crypto App',
        image : crypto,
        description: `This website allows you to see the current price of cryptos and their prices in different currencies
`,
        link: 'https://crypto-app-x.vercel.app',
        technologies : [  
            'React ', 'Tailwind CSS', 'TypeScript'
        ],
        github : 'https://github.com/muhiddinovhusan/cryptoApp'

    },
  
  
]


export const CONTACT = {
    address : 'Tashkent, Uzbekistan',
    phone : "+998 94 673-05-02",
    email : "@muhiddinovhusan0207@gmail.com "
}