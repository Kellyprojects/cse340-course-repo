import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'production';
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const partnerOrganizations = [
    {
        name: 'Federal Ministry of Environment',
        email: 'environment@cleanstate.ng',
        summary: 'Sets national environmental policy, supports state ministries, and coordinates monthly environmental sanitation.',
        image: '/images/epa-bureau.svg',
        alt: 'Federal Ministry of Environment logo'
    },
    {
        name: 'NESREA',
        email: 'nesrea@cleanstate.ng',
        summary: 'The National Environmental Standards and Regulations Enforcement Agency inspects dumpsites, factories, and pollution complaints.',
        image: '/images/waste-authority.svg',
        alt: 'NESREA logo'
    },
    {
        name: 'State Waste Management Authority',
        email: 'waste@cleanstate.ng',
        summary: 'Runs refuse collection, dumpsite evacuation, and accredited waste operators in each state, including LAWMA-style services.',
        image: '/images/sanitation-corps.svg',
        alt: 'State Waste Management Authority logo'
    },
    {
        name: 'State Ministry of Health',
        email: 'health@cleanstate.ng',
        summary: 'Works with primary health centres and environmental health officers on malaria control, flooding, and refuse-related illness.',
        image: '/images/health-office.svg',
        alt: 'State Ministry of Health logo'
    }
];

const serviceProjects = [
    {
        name: 'Monthly Environmental Sanitation',
        category: 'Environmental',
        summary: 'Clear gutters, blocked drainages, and roadside refuse dumps on environmental sanitation day before the rains.',
        requirements: [
            'Rain boots, gloves, and reflective jackets',
            'Rakes, shovels, wheelbarrows, and refuse sacks',
            'LGA environmental health officer on site'
        ]
    },
    {
        name: 'School and CDA Sanitation Talk',
        category: 'Educational',
        summary: 'Teach pupils, NYSC members, and community development associations how to sort refuse and report illegal dumps.',
        requirements: [
            'Permission from the school or CDA chairman',
            'Guides in English, Pidgin, Yoruba, Hausa, or Igbo',
            'Attendance list for the LGA environment office'
        ]
    },
    {
        name: 'Market Union Refuse Collection',
        category: 'Community Service',
        summary: 'Work with market unions and motor-park leaders to empty refuse bins daily and keep walkways open.',
        requirements: [
            'Market union or NURTW park chairman approval',
            'Refuse bins from the state waste authority',
            'Morning and evening collection shifts'
        ]
    },
    {
        name: 'PHC Malaria and Flood Response',
        category: 'Health and Wellness',
        summary: 'Remove stagnant water after flooding, treat mosquito breeding spots, and send people to the nearest primary health centre.',
        requirements: [
            'Briefing from the State Ministry of Health',
            'Protective gear and PHC referral cards',
            'Support from environmental health officers'
        ]
    }
];

const serviceCategories = [
    {
        name: 'Environmental',
        summary: 'Gutter clearing, drainage, dumpsite evacuation, and monthly environmental sanitation across LGAs.'
    },
    {
        name: 'Educational',
        summary: 'School, NYSC, and CDA talks on refuse sorting, illegal dumping, and keeping compounds neat.'
    },
    {
        name: 'Community Service',
        summary: 'Market unions, motor parks, and street sweepers working with the state waste authority.'
    },
    {
        name: 'Health and Wellness',
        summary: 'Primary health centres and environmental health officers reducing malaria and refuse-related illness.'
    }
];

const stateSnapshot = [
    { label: 'Cleanliness score', value: '86 / 100' },
    { label: 'Open refuse dumps', value: '12' },
    { label: 'Refuse evacuation', value: '94%' },
    { label: 'PHC health index', value: '78 / 100' },
    { label: 'Accredited collectors', value: '91%' }
];

const districtScores = [
    { name: 'Lagos State — Alimosho LGA', score: 92, focus: 'Empty market refuse bins before evening trading at Iyana Ipaja and Igando.' },
    { name: 'Kano State — Nassarawa LGA', score: 81, focus: 'Clear gutters before the rains around Sabon Gari and the main markets.' },
    { name: 'Rivers State — Port Harcourt LGA', score: 74, focus: 'Evacuate illegal dumps along the East-West Road and waterfront communities.' },
    { name: 'FCT Abuja — AMAC', score: 88, focus: 'Keep Garki and Wuse markets clean with morning and evening collection.' },
    { name: 'Oyo State — Ibadan North LGA', score: 69, focus: 'Support Bodija Market union and CDA street sweeping after sanitation day.' },
    { name: 'Kaduna State — Kaduna North LGA', score: 77, focus: 'Inspect dumpsites near Kawo and send overflow to the approved landfill.' }
];

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.get('/', async (req, res) => {
    const title = 'Home';
    res.render('home', { title, stateSnapshot, districtScores });
});

app.get('/organizations', async (req, res) => {
    const title = 'Our Partner Organizations';
    res.render('organizations', { title, partnerOrganizations });
});

app.get('/projects', async (req, res) => {
    const title = 'Service Projects';
    res.render('projects', { title, serviceProjects });
});

app.get('/categories', async (req, res) => {
    const title = 'Service Project Categories';
    res.render('categories', { title, serviceCategories });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
    console.log(`Environment: ${NODE_ENV}`);
});
