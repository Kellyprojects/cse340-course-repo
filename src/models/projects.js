import db from './db.js';

const getAllProjects = async () => {
    const query = `
        SELECT
            p.project_id,
            p.title,
            p.description,
            p.location,
            p.date,
            o.name AS organization_name
        FROM public.project p
        INNER JOIN public.organization o
            ON p.organization_id = o.organization_id
        ORDER BY p.date, p.title;
    `;

    const result = await db.query(query);

    return result.rows.map((project) => ({
        ...project,
        formattedDate: new Date(project.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }));
};

export { getAllProjects };
