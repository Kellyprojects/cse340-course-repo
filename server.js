import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { testConnection } from './src/models/db.js';
import { getAllOrganizations } from './src/models/organizations.js';
import { getAllProjects } from './src/models/projects.js';
import { getAllCategories } from './src/models/categories.js';

const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'production';
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

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
    const organizations = await getAllOrganizations();
    const title = 'Our Partner Organizations';
    res.render('organizations', { title, organizations });
});

app.get('/projects', async (req, res) => {
    const projects = await getAllProjects();
    const title = 'Service Projects';
    res.render('projects', { title, projects });
});

app.get('/categories', async (req, res) => {
    const categories = await getAllCategories();
    const title = 'Service Project Categories';
    res.render('categories', { title, categories });
});

app.listen(PORT, async () => {
    try {
        await testConnection();
        console.log(`Server is running at http://127.0.0.1:${PORT}`);
        console.log(`Environment: ${NODE_ENV}`);
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
});
