export const portfolioData = {
    personal: {
        name: "Jane Doe",
        title: "Bridging Biology & Code",
        description: "A scientist and developer passionate about leveraging technology to solve complex biological problems. From wet lab to web app, I build innovative solutions.",
        photo: "https://placehold.co/400x400/E2E8F0/4A5568?text=Your+Photo",
        email: "jane.doe@example.com"
    },

    publications: [
        {
            title: "A Novel Gene Editing Technique for Neurological Disorders",
            authors: "Doe, J., Smith, A., et al.",
            year: "2023",
            journal: "Nature Biotechnology",
            link: "#"
        },
        {
            title: "Proteomic Analysis of Cancer Cell Metabolism",
            authors: "Doe, J., Johnson, B., et al.",
            year: "2021",
            journal: "Cell Reports",
            link: "#"
        }
    ],

    techniques: [
        { name: "CRISPR-Cas9", icon: "dna" },
        { name: "Confocal Microscopy", icon: "microscope" },
        { name: "Flow Cytometry", icon: "scatter-chart" },
        { name: "Western Blot", icon: "test-tubes" },
        { name: "RNA-Sequencing", icon: "file-text" },
        { name: "PCR & qPCR", icon: "pipette" }
    ],

    projects: [
        {
            title: "BioDataViz",
            description: "An interactive web application for visualizing complex biological datasets.",
            image: "https://placehold.co/600x400/E2E8F0/4A5568?text=Project+Screenshot",
            technologies: ["React", "D3.js", "Python", "Flask"],
            link: "#"
        },
        {
            title: "Sequence Analysis Pipeline",
            description: "A command-line tool to automate DNA sequence alignment and analysis.",
            image: "https://placehold.co/600x400/E2E8F0/4A5568?text=Project+Screenshot",
            technologies: ["Python", "Biopython", "Snakemake"],
            link: "#"
        },
        {
            title: "Lab Inventory Manager",
            description: "A full-stack web app to track lab reagents and supplies.",
            image: "https://placehold.co/600x400/E2E8F0/4A5568?text=Project+Screenshot",
            technologies: ["Vue.js", "Node.js", "PostgreSQL"],
            link: "#"
        }
    ],

    skills: [
        "Python", "JavaScript", "React", "Node.js",
        "SQL", "Docker", "AWS", "Git & GitHub"
    ],

    social: [
        { name: "mail", link: "mailto:jane.doe@example.com" },
        { name: "linkedin", link: "#" },
        { name: "github", link: "#" }
    ]
};
