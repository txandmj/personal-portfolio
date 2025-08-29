export const portfolioData = {
    personal: {
        name: "Xin Tang",
        title: "Bridging Biology & Code",
        description: "A scientist and developer passionate about leveraging technology to solve complex biological problems. From wet lab to web app, I build innovative solutions.",
        photo: "https://placehold.co/400x400/E2E8F0/4A5568?text=Your+Photo",
        email: "tangx10@uci.edu"
    },

    publications: [
        {
            title: "Discovery of Cell Number-Interstitial Fluid Volume (CIF) Ratio Reveals Secretory Autophagy Pathway to Supply eHsp90α for Wound Healing",
            authors: "Chang, C., Tang, X., et al.",
            year: "2024",
            journal: "Cells",
            link: "https://www.mdpi.com/2073-4409/13/15/1280"
        },
        {
            title: "Previously unrecognized and potentially consequential challenges facing Hsp90 inhibitors in cancer clinical trials",
            authors: "Chang, C., Tang, X., et al.",
            year: "2024",
            journal: "Cell Stress and Chaperones",
            link: "https://www.sciencedirect.com/science/article/pii/S1355814524001135"
        },
        {
            title: "The Distinct Assignments for Hsp90α and Hsp90β: More Than Skin Deep. Cells.",
            authors: "Chang, C., Tang, X., et al.",
            year: "2023",
            journal: "Cells",
            link: "https://www.mdpi.com/2073-4409/12/12/1568"
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
        { name: "mail", link: "mailto:tangx10@uci.edu" },
        { name: "linkedin", link: "#" },
        { name: "github", link: "#" }
    ]
};
