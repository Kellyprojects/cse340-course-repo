DROP TABLE IF EXISTS project_category;
DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS organization;

CREATE TABLE organization (
    organization_id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    logo_filename VARCHAR(255) NOT NULL
);

CREATE TABLE project (
    project_id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY (organization_id) REFERENCES organization (organization_id)
);

CREATE TABLE category (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL UNIQUE
);

CREATE TABLE project_category (
    project_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    PRIMARY KEY (project_id, category_id),
    FOREIGN KEY (project_id) REFERENCES project (project_id),
    FOREIGN KEY (category_id) REFERENCES category (category_id)
);

INSERT INTO organization (name, description, contact_email, logo_filename)
VALUES
    ('Federal Ministry of Environment', 'Sets national environmental policy, supports state ministries, and coordinates monthly environmental sanitation.', 'environment@cleanstate.ng', 'org-fme.jpg'),
    ('NESREA', 'The National Environmental Standards and Regulations Enforcement Agency inspects dumpsites, factories, and pollution complaints.', 'nesrea@cleanstate.ng', 'org-nesrea.jpg'),
    ('State Waste Management Authority', 'Runs refuse collection, dumpsite evacuation, and accredited waste operators in each state, including LAWMA-style services.', 'waste@cleanstate.ng', 'org-waste.jpg'),
    ('State Ministry of Health', 'Works with primary health centres and environmental health officers on malaria control, flooding, and refuse-related illness.', 'health@cleanstate.ng', 'org-health.jpg');

INSERT INTO project (organization_id, title, description, location, date)
VALUES
    (1, 'Monthly Environmental Sanitation', 'Clear gutters, blocked drainages, and roadside refuse dumps on environmental sanitation day before the rains.', 'Alimosho LGA, Lagos State', '2026-11-28'),
    (1, 'Coastal Mangrove Cleanup', 'Remove plastic waste from mangrove edges and report illegal dumps to the state ministry.', 'Port Harcourt LGA, Rivers State', '2026-12-05'),
    (1, 'Drainage Mapping Walk', 'Walk major streets, mark blocked drainages, and send the list to the LGA environment office.', 'Ibadan North LGA, Oyo State', '2026-12-12'),
    (1, 'Dumpsite Inspection Day', 'Inspect illegal dumps near markets and recommend approved landfill transfer.', 'Kaduna North LGA, Kaduna State', '2027-01-09'),
    (1, 'Sanitation Day Briefing', 'Brief CDA chairmen and environmental health officers before the next sanitation Saturday.', 'AMAC, FCT Abuja', '2027-01-16'),
    (2, 'Factory Smoke Inspection', 'Visit factories and bakeries to check smoke, effluent, and complaint records.', 'Nassarawa LGA, Kano State', '2026-11-21'),
    (2, 'School Dump Reporting Talk', 'Teach pupils and NYSC members how to report illegal dumps to NESREA and the LGA.', 'Alimosho LGA, Lagos State', '2026-12-03'),
    (2, 'Waterfront Pollution Check', 'Inspect waterfront dumps and oil stains along the East-West Road communities.', 'Port Harcourt LGA, Rivers State', '2026-12-17'),
    (2, 'Market Waste Permit Review', 'Review waste operator permits at Garki and Wuse markets.', 'AMAC, FCT Abuja', '2027-01-14'),
    (2, 'Landfill Overflow Visit', 'Check dumpsite overflow near Kawo and send a report to the state waste authority.', 'Kaduna North LGA, Kaduna State', '2027-01-28'),
    (3, 'Market Union Refuse Collection', 'Work with market unions to empty refuse bins morning and evening.', 'Bodija Market, Ibadan North LGA', '2026-11-24'),
    (3, 'Motor Park Sweep', 'Sweep NURTW parks and keep walkways open after evening loading.', 'Iyana Ipaja, Lagos State', '2026-12-08'),
    (3, 'Street Sweeper Support', 'Support CDA street sweeping after monthly sanitation day.', 'Sabon Gari, Kano State', '2026-12-19'),
    (3, 'Bin Distribution Morning', 'Place waste-authority bins at market gates and motor parks.', 'Wuse Market, FCT Abuja', '2027-01-07'),
    (3, 'Evening Collection Shift', 'Run an evening refuse collection shift before night trading starts.', 'Igando, Lagos State', '2027-01-21'),
    (4, 'PHC Malaria and Flood Response', 'Remove stagnant water after flooding and send people to the nearest primary health centre.', 'Port Harcourt LGA, Rivers State', '2026-11-20'),
    (4, 'PHC Outreach Day', 'Join environmental health officers for compound inspection and malaria talks.', 'Alimosho LGA, Lagos State', '2026-12-04'),
    (4, 'Clinic Referral Walk', 'Walk flooded streets, treat breeding spots, and issue PHC referral cards.', 'Ibadan North LGA, Oyo State', '2026-12-18'),
    (4, 'Compound Neatness Visit', 'Visit compounds near the PHC and teach families how to keep gutters clear.', 'Nassarawa LGA, Kano State', '2027-01-08'),
    (4, 'Health Officer Briefing', 'Brief environmental health officers before the next sanitation Saturday.', 'AMAC, FCT Abuja', '2027-01-22');

INSERT INTO category (name)
VALUES
    ('Environmental'),
    ('Educational'),
    ('Community Service'),
    ('Health and Wellness');

INSERT INTO project_category (project_id, category_id)
VALUES
    (1, 1),
    (1, 3),
    (2, 1),
    (3, 1),
    (4, 1),
    (5, 3),
    (6, 1),
    (7, 2),
    (8, 1),
    (9, 3),
    (10, 1),
    (11, 3),
    (12, 3),
    (13, 3),
    (14, 3),
    (15, 3),
    (16, 4),
    (17, 4),
    (18, 4),
    (19, 2),
    (19, 4),
    (20, 4);
